#!/usr/bin/env node
/**
 * ════════════════════════════════════════════════════════════
 *  Jepeto Reformas — Servidor local de subida de imágenes
 *  Uso: node upload-server.js
 *  Puerto: 3001  (configurable con env PORT=xxxx)
 * ════════════════════════════════════════════════════════════
 *
 *  Permite que el panel de administración suba imágenes
 *  directamente al disco cuando se usa en el servidor de
 *  producción (Nginx) o en local.
 *
 *  Endpoints:
 *    GET  /api/status   — comprueba que el servidor está activo
 *    POST /api/upload   — sube una imagen al directorio correcto
 *
 *  Autenticación:
 *    Header: Authorization: Bearer <TOKEN>
 *    El TOKEN se genera al arrancar el servidor y se muestra
 *    en la consola. Cópialo en Ajustes del panel admin.
 */

'use strict';

const http     = require('http');
const fs       = require('fs');
const path     = require('path');
const crypto   = require('crypto');
const os       = require('os');

/* ── Configuración ── */
const PORT      = process.env.PORT || 3001;
const DOCS_DIR  = path.resolve(__dirname, 'docs');
const IMAGES_DIR = path.join(DOCS_DIR, 'src', 'assets', 'images');

/* ── Token de sesión ──
 *  Se genera aleatoriamente en cada arranque.
 *  Para un token persistente define la variable de entorno:
 *    UPLOAD_TOKEN=<tu-token> node upload-server.js
 */
const SESSION_TOKEN = process.env.UPLOAD_TOKEN || crypto.randomBytes(24).toString('hex');

/* ── Rutas permitidas (seg. directory traversal) ── */
const ALLOWED_DIRS = [
  path.join(IMAGES_DIR),
];

function isPathSafe(targetPath) {
  const resolved = path.resolve(targetPath);
  return ALLOWED_DIRS.some(dir => resolved.startsWith(path.resolve(dir)));
}

/* ── Parser multipart simple ── */
function parseMultipart(body, boundary) {
  const result = { fields: {}, files: {} };
  const sep     = Buffer.from('\r\n--' + boundary);
  const start   = Buffer.from('--' + boundary + '\r\n');

  let pos = body.indexOf(start);
  if (pos === -1) return result;
  pos += start.length;

  while (pos < body.length) {
    const next = indexOf(body, sep, pos);
    const end  = next === -1 ? body.length : next;

    const part = body.slice(pos, end);
    const hEnd = indexOf(part, Buffer.from('\r\n\r\n'), 0);
    if (hEnd === -1) { pos = end + sep.length + 2; continue; }

    const headers = part.slice(0, hEnd).toString('utf8');
    const content = part.slice(hEnd + 4);

    const dispMatch = headers.match(/Content-Disposition:[^\r\n]*name="([^"]+)"(?:[^\r\n]*filename="([^"]+)")?/i);
    if (!dispMatch) { pos = end + sep.length + 2; continue; }

    const fieldName = dispMatch[1];
    const filename  = dispMatch[2];

    if (filename) {
      const ctMatch = headers.match(/Content-Type:\s*(\S+)/i);
      result.files[fieldName] = {
        filename,
        contentType: ctMatch ? ctMatch[1] : 'application/octet-stream',
        data: content,
      };
    } else {
      result.fields[fieldName] = content.toString('utf8');
    }

    if (next === -1) break;
    pos = end + sep.length + 2;
    // Check for final boundary '--'
    const after = body.slice(next + sep.length, next + sep.length + 2).toString();
    if (after === '--') break;
  }

  return result;
}

function indexOf(buf, search, start = 0) {
  return buf.indexOf(search, start);
}

/* ── CORS headers ──
 *  Allow only localhost and the production domain.
 *  Add additional origins via env: CORS_ORIGINS=https://example.com,https://other.com
 */
const ALLOWED_ORIGINS = [
  'http://localhost',
  'http://127.0.0.1',
  'https://jepeto.es',
  'https://www.jepeto.es',
  ...(process.env.CORS_ORIGINS ? process.env.CORS_ORIGINS.split(',') : []),
];

function setCORS(req, res) {
  const origin = req.headers.origin || '';
  const allowed = ALLOWED_ORIGINS.some(o => origin === o || origin.startsWith(o + ':'));
  if (allowed) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');
}

function json(res, code, data) {
  const body = JSON.stringify(data);
  res.writeHead(code, {
    'Content-Type':   'application/json',
    'Content-Length': Buffer.byteLength(body),
  });
  res.end(body);
}

/* ── Request handler ── */
const server = http.createServer((req, res) => {
  setCORS(req, res);

  // Preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  /* GET /api/status */
  if (req.method === 'GET' && req.url === '/api/status') {
    return json(res, 200, { ok: true, message: 'Servidor Jepeto activo', version: '1.0' });
  }

  /* POST /api/upload */
  if (req.method === 'POST' && req.url === '/api/upload') {
    // Auth check
    const auth = req.headers['authorization'] || '';
    const token = auth.replace(/^Bearer\s+/i, '').trim();
    if (token !== SESSION_TOKEN) {
      return json(res, 401, { ok: false, error: 'Token inválido' });
    }

    const ct = req.headers['content-type'] || '';
    const boundaryMatch = ct.match(/boundary=([^\s;]+)/i);
    if (!ct.includes('multipart/form-data') || !boundaryMatch) {
      return json(res, 400, { ok: false, error: 'Content-Type incorrecto. Se espera multipart/form-data' });
    }
    const boundary = boundaryMatch[1];

    const chunks = [];
    req.on('data', chunk => chunks.push(chunk));
    req.on('end', () => {
      try {
        const body   = Buffer.concat(chunks);
        const parsed = parseMultipart(body, boundary);

        // Resolve and validate path strictly — rejects any traversal attempt
        // path.resolve normalises encoded sequences; isPathSafe then checks the boundary
        const targetAbs = path.resolve(DOCS_DIR, parsed.fields.path || '');

        if (!targetAbs || !isPathSafe(targetAbs)) {
          return json(res, 403, { ok: false, error: 'Ruta no permitida' });
        }

        const fileData = parsed.files.image;
        if (!fileData) {
          return json(res, 400, { ok: false, error: 'Campo "image" requerido' });
        }

        const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'];
        if (!allowedTypes.includes(fileData.contentType)) {
          return json(res, 400, { ok: false, error: `Tipo de archivo no permitido: ${fileData.contentType}` });
        }

        // Ensure directory exists
        try {
          fs.mkdirSync(path.dirname(targetAbs), { recursive: true });
        } catch (mkdirErr) {
          console.error(`[❌] No se pudo crear el directorio: ${mkdirErr.message}`);
          return json(res, 500, { ok: false, error: `No se pudo crear el directorio: ${mkdirErr.message}` });
        }

        // Write file
        fs.writeFileSync(targetAbs, fileData.data);

        const savedRelPath = path.relative(DOCS_DIR, targetAbs);
        console.log(`[✅] Imagen guardada: ${savedRelPath} (${fileData.data.length} bytes)`);
        return json(res, 200, { ok: true, message: `Imagen guardada: ${savedRelPath}` });

      } catch (err) {
        console.error('[❌]', err.message);
        return json(res, 500, { ok: false, error: err.message });
      }
    });
    return;
  }

  /* 404 */
  json(res, 404, { ok: false, error: 'Ruta no encontrada' });
});

/* ── Arrancar ── */
server.listen(PORT, () => {
  const ifaces  = os.networkInterfaces();
  const ips = Object.values(ifaces).flat().filter(i => i.family === 'IPv4' && !i.internal).map(i => i.address);

  console.log('\n════════════════════════════════════════════════');
  console.log('  🏗️  Jepeto Reformas — Servidor de subida');
  console.log('════════════════════════════════════════════════');
  console.log(`  Puerto    : ${PORT}`);
  console.log(`  Local     : http://localhost:${PORT}/api/status`);
  if (ips.length) console.log(`  Red       : http://${ips[0]}:${PORT}/api/status`);
  console.log('');
  console.log('  🔑 TOKEN DE ACCESO (cópialo en el panel admin):');
  console.log('');
  console.log(`  ${SESSION_TOKEN}`);
  console.log('');
  console.log('  📁 Directorio de imágenes:');
  console.log(`  ${IMAGES_DIR}`);
  console.log('════════════════════════════════════════════════\n');
});

server.on('error', err => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\n❌ El puerto ${PORT} ya está en uso. Prueba: PORT=3002 node upload-server.js\n`);
  } else {
    console.error('\n❌ Error del servidor:', err.message);
  }
  process.exit(1);
});
