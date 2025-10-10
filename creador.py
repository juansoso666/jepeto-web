import os

# Nombre del proyecto
project_name = "jepeto-reformas"

# Estructura de carpetas
folders = [
    f"{project_name}/src/js",
    f"{project_name}/src/assets/images",
    f"{project_name}/src/assets/fonts"
]

# Archivos HTML a crear
html_files = [
    "index.html",
    "servicios.html",
    "proyectos.html",
    "contacto.html",
    "blog.html",
    "galeria.html",
    "sobre-nosotros.html"
]

# Archivos JS
js_files = [
    "src/js/main.js",
    "src/js/components.js"
]

# Crear carpetas
for folder in folders:
    os.makedirs(folder, exist_ok=True)
    print(f"Carpeta creada: {folder}")

# Crear archivos HTML vacíos
for file in html_files:
    path = os.path.join(project_name, file)
    if not os.path.exists(path):
        with open(path, "w", encoding="utf-8") as f:
            f.write(f"<!-- {file} de Jepeto Reformas -->\n")
        print(f"Archivo creado: {path}")

# Crear archivos JS básicos
for file in js_files:
    path = os.path.join(project_name, file)
    if not os.path.exists(path):
        with open(path, "w", encoding="utf-8") as f:
            f.write("// JavaScript inicial\n")
        print(f"Archivo creado: {path}")

# Crear package.json básico
package_json_path = os.path.join(project_name, "package.json")
if not os.path.exists(package_json_path):
    with open(package_json_path, "w", encoding="utf-8") as f:
        f.write("""{
  "name": "jepeto-reformas",
  "version": "1.0.0",
  "scripts": {
    "start": "echo 'Configura tu servidor local o Live Server'"
  },
  "dependencies": {}
}
""")
    print(f"Archivo creado: {package_json_path}")

# Crear .gitignore
gitignore_path = os.path.join(project_name, ".gitignore")
if not os.path.exists(gitignore_path):
    with open(gitignore_path, "w", encoding="utf-8") as f:
        f.write("node_modules/\n.DS_Store\n/dist\n")
    print(f"Archivo creado: {gitignore_path}")

print("\n✅ Estructura del proyecto creada correctamente")
