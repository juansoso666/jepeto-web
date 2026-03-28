// config-loader.js
// Módulo para cargar y aplicar la configuración del sitio

class ConfigLoader {
  constructor() {
    this.config = null;
    this.configPath = '/config.json';
  }

  /**
   * Carga la configuración desde el archivo JSON
   */
  async loadConfig() {
    try {
      const response = await fetch(this.configPath);
      if (!response.ok) {
        throw new Error(`Error al cargar config.json: ${response.status}`);
      }
      this.config = await response.json();
      console.log('✅ Configuración cargada correctamente');
      return this.config;
    } catch (error) {
      console.error('❌ Error al cargar la configuración:', error);
      return null;
    }
  }

  /**
   * Aplica la configuración general a la página
   */
  applyGeneralConfig() {
    if (!this.config) return;

    // Aplicar título de la página
    const currentPage = this.getCurrentPageKey();
    if (this.config.pages[currentPage]) {
      document.title = this.config.pages[currentPage].title;
      
      // Actualizar meta tags
      this.updateMetaTag('description', this.config.pages[currentPage].description);
      this.updateMetaTag('keywords', this.config.seo.keywords);
      this.updateMetaTag('author', this.config.seo.author);
      
      // Open Graph
      this.updateMetaTag('og:title', this.config.pages[currentPage].title, 'property');
      this.updateMetaTag('og:description', this.config.pages[currentPage].description, 'property');
    }

    // Aplicar favicon
    this.updateFavicon(this.config.company.favicon);

    // Aplicar colores del tema (CSS variables)
    this.applyThemeColors();
  }

  /**
   * Obtiene la clave de la página actual
   */
  getCurrentPageKey() {
    const path = window.location.pathname;
    const page = path.split('/').pop().replace('.html', '') || 'index';
    
    const pageMap = {
      'index': 'index',
      'servicios': 'servicios',
      'proyectos': 'proyectos',
      'galeria': 'galeria',
      'blog': 'blog',
      'sobre-nosotros': 'sobreNosotros',
      'contacto': 'contacto'
    };
    
    return pageMap[page] || 'index';
  }

  /**
   * Actualiza un meta tag
   */
  updateMetaTag(name, content, attribute = 'name') {
    if (!content) return;
    
    let meta = document.querySelector(`meta[${attribute}="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  }

  /**
   * Actualiza el favicon
   */
  updateFavicon(faviconPath) {
    if (!faviconPath) return;
    
    let link = document.querySelector('link[rel="icon"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = faviconPath;
  }

  /**
   * Aplica los colores del tema como variables CSS
   */
  applyThemeColors() {
    if (!this.config.theme) return;
    
    const root = document.documentElement;
    root.style.setProperty('--primary-color', this.config.theme.primaryColor);
    root.style.setProperty('--secondary-color', this.config.theme.secondaryColor);
    root.style.setProperty('--accent-color', this.config.theme.accentColor);
    root.style.setProperty('--text-color', this.config.theme.textColor);
    root.style.setProperty('--bg-color', this.config.theme.backgroundColor);
  }

  /**
   * Reemplaza los marcadores de posición en el HTML con datos de configuración
   */
  replacePlaceholders() {
    if (!this.config) return;

    // Reemplazar en elementos con atributo data-config
    const elements = document.querySelectorAll('[data-config]');
    elements.forEach(element => {
      const configPath = element.getAttribute('data-config');
      const value = this.getNestedValue(this.config, configPath);
      
      if (value !== undefined) {
        if (element.tagName === 'IMG') {
          element.src = value;
        } else if (element.tagName === 'A') {
          element.href = value;
        } else {
          element.textContent = value;
        }
      }
    });

    // Reemplazar marcadores de posición en el texto {{ }}
    this.replaceTextPlaceholders();
  }

  /**
   * Reemplaza marcadores de posición en el texto usando {{ key }}
   */
  replaceTextPlaceholders() {
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );

    const nodesToReplace = [];
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (node.nodeValue && node.nodeValue.includes('{{')) {
        nodesToReplace.push(node);
      }
    }

    nodesToReplace.forEach(node => {
      let text = node.nodeValue;
      const regex = /\{\{\s*([^}]+)\s*\}\}/g;
      
      text = text.replace(regex, (match, key) => {
        const value = this.getNestedValue(this.config, key.trim());
        return value !== undefined ? value : match;
      });
      
      node.nodeValue = text;
    });
  }

  /**
   * Obtiene un valor anidado del objeto de configuración usando notación de puntos
   */
  getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => {
      return current && current[key] !== undefined ? current[key] : undefined;
    }, obj);
  }

  /**
   * Carga y renderiza servicios
   */
  renderServices(containerId = 'services-container') {
    const container = document.getElementById(containerId);
    if (!container || !this.config.services) return;

    container.innerHTML = '';
    
    this.config.services.forEach(service => {
      const serviceCard = this.createServiceCard(service);
      container.appendChild(serviceCard);
    });
  }

  /**
   * Crea una tarjeta de servicio
   */
  createServiceCard(service) {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300';
    
    card.innerHTML = `
      <img src="${service.image}" alt="${service.name}" class="w-full h-48 object-cover" onerror="this.src='/src/assets/images/placeholder.jpg'">
      <div class="p-6">
        <div class="text-4xl mb-3">${service.icon}</div>
        <h3 class="text-xl font-bold mb-2 text-gray-800">${service.name}</h3>
        <p class="text-gray-600 mb-4">${service.description}</p>
        <ul class="space-y-2">
          ${service.features.map(feature => `
            <li class="flex items-center text-sm text-gray-700">
              <span class="text-green-500 mr-2">✓</span>
              ${feature}
            </li>
          `).join('')}
        </ul>
      </div>
    `;
    
    return card;
  }

  /**
   * Carga y renderiza proyectos
   */
  renderProjects(containerId = 'projects-container') {
    const container = document.getElementById(containerId);
    if (!container || !this.config.projects) return;

    container.innerHTML = '';
    
    this.config.projects.forEach(project => {
      const projectCard = this.createProjectCard(project);
      container.appendChild(projectCard);
    });
  }

  /**
   * Crea una tarjeta de proyecto
   */
  createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300';
    
    card.innerHTML = `
      <div class="relative">
        <img src="${project.image}" alt="${project.name}" class="w-full h-64 object-cover" onerror="this.src='/src/assets/images/placeholder.jpg'">
        <span class="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">${project.category}</span>
      </div>
      <div class="p-6">
        <h3 class="text-xl font-bold mb-2 text-gray-800">${project.name}</h3>
        <p class="text-gray-600 mb-4">${project.description}</p>
        <div class="flex justify-between text-sm text-gray-500 mb-3">
          <span>📅 ${project.year}</span>
          <span>⏱️ ${project.duration}</span>
        </div>
        <ul class="space-y-1">
          ${project.features.map(feature => `
            <li class="flex items-center text-sm text-gray-700">
              <span class="text-green-500 mr-2">•</span>
              ${feature}
            </li>
          `).join('')}
        </ul>
      </div>
    `;
    
    return card;
  }

  /**
   * Carga y renderiza el blog
   */
  renderBlog(containerId = 'blog-container') {
    const container = document.getElementById(containerId);
    if (!container || !this.config.blog) return;

    container.innerHTML = '';
    
    this.config.blog.forEach(post => {
      const blogCard = this.createBlogCard(post);
      container.appendChild(blogCard);
    });
  }

  /**
   * Crea una tarjeta de blog
   */
  createBlogCard(post) {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300';
    
    card.innerHTML = `
      <img src="${post.imagen}" alt="${post.titulo}" class="w-full h-48 object-cover" onerror="this.src='/src/assets/images/placeholder.jpg'">
      <div class="p-6">
        <div class="flex justify-between items-center mb-2">
          <span class="text-xs text-green-600 font-semibold">${post.categoria}</span>
          <span class="text-xs text-gray-500">${this.formatDate(post.fecha)}</span>
        </div>
        <h3 class="text-xl font-bold mb-2 text-gray-800">${post.titulo}</h3>
        <p class="text-gray-600 mb-4">${post.descripcion}</p>
        <a href="${post.url}" class="text-green-600 hover:text-green-700 font-semibold inline-flex items-center">
          Leer más →
        </a>
      </div>
    `;
    
    return card;
  }

  /**
   * Formatea una fecha
   */
  formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  /**
   * Carga y renderiza testimonios
   */
  renderTestimonials(containerId = 'testimonials-container') {
    const container = document.getElementById(containerId);
    if (!container || !this.config.testimonials) return;

    container.innerHTML = '';
    
    this.config.testimonials.forEach(testimonial => {
      const testimonialCard = this.createTestimonialCard(testimonial);
      container.appendChild(testimonialCard);
    });
  }

  /**
   * Crea una tarjeta de testimonio
   */
  createTestimonialCard(testimonial) {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-lg shadow-md p-6';
    
    const stars = '⭐'.repeat(testimonial.rating);
    
    card.innerHTML = `
      <div class="mb-4">${stars}</div>
      <p class="text-gray-700 mb-4 italic">"${testimonial.text}"</p>
      <div class="flex items-center">
        ${testimonial.image ? `<img src="${testimonial.image}" alt="${testimonial.name}" class="w-12 h-12 rounded-full mr-3">` : ''}
        <div>
          <p class="font-bold text-gray-800">${testimonial.name}</p>
          <p class="text-sm text-gray-500">${testimonial.role}</p>
        </div>
      </div>
    `;
    
    return card;
  }

  /**
   * Actualiza el formulario de contacto con la URL de configuración
   */
  updateContactForm() {
    if (!this.config.pages.contacto) return;
    
    const form = document.querySelector('form');
    if (form && this.config.pages.contacto.formSubmitUrl) {
      form.action = this.config.pages.contacto.formSubmitUrl;
      
      // Agregar campo oculto para página de éxito
      if (this.config.pages.contacto.formSuccessPage) {
        let successInput = form.querySelector('input[name="_next"]');
        if (!successInput) {
          successInput = document.createElement('input');
          successInput.type = 'hidden';
          successInput.name = '_next';
          form.appendChild(successInput);
        }
        successInput.value = window.location.origin + this.config.pages.contacto.formSuccessPage;
      }
    }
  }

  /**
   * Inicializa el cargador de configuración
   */
  async init() {
    await this.loadConfig();
    
    if (this.config) {
      this.applyGeneralConfig();
      this.replacePlaceholders();
      
      // Renderizar contenido dinámico según la página
      if (document.getElementById('services-container')) {
        this.renderServices();
      }
      if (document.getElementById('projects-container')) {
        this.renderProjects();
      }
      if (document.getElementById('blog-container')) {
        this.renderBlog();
      }
      if (document.getElementById('testimonials-container')) {
        this.renderTestimonials();
      }
      
      // Actualizar formulario de contacto
      this.updateContactForm();
      
      console.log('🎨 Configuración aplicada correctamente');
    }
  }
}

// Crear instancia global
window.configLoader = new ConfigLoader();

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.configLoader.init();
  });
} else {
  window.configLoader.init();
}
