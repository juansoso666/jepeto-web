// main.js
console.log("🚀 Reformas Web: JS cargado correctamente");

// ======== MENÚ RESPONSIVO ========
// Support both old and new menu structures
const menuBtn = document.getElementById('menu-toggle') || document.querySelector("header button");
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
} else if (menuBtn) {
  // Fallback for old structure
  const nav = document.querySelector("header nav");
  if (nav) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("hidden");
      nav.classList.toggle("flex");
      nav.classList.toggle("flex-col");
      nav.classList.toggle("bg-white");
      nav.classList.toggle("absolute");
      nav.classList.toggle("top-16");
      nav.classList.toggle("left-0");
      nav.classList.toggle("w-full");
      nav.classList.toggle("p-4");
    });
  }
}

// ======== FORMULARIO DE CONTACTO ========
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    // Note: Form will submit to FormSubmit.co, so we allow default behavior
    // Just validate before submission
    
    const nombre = form.querySelector('[name="nombre"]')?.value.trim();
    const email = form.querySelector('[name="email"]')?.value.trim();
    const mensaje = form.querySelector('[name="mensaje"]')?.value.trim();

    if (!nombre || !email || !mensaje) {
      e.preventDefault();
      alert("Por favor, completa todos los campos obligatorios.");
      return false;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      e.preventDefault();
      alert("Por favor, introduce un email válido.");
      return false;
    }

    // Form is valid, allow submission to FormSubmit.co
    return true;
  });
}

// ======== SCROLL SUAVE ========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// ======== LIGHTBOX PARA GALERÍA ========
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');
  const galleryImages = document.querySelectorAll('.gallery-img');

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.classList.add('active');
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });
  }

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
    }
  });

  // Close lightbox on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      lightbox.classList.remove('active');
    }
  });
}

