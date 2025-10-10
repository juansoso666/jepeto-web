// main.js
console.log("🚀 Reformas Web: JS cargado correctamente");

// ======== MENÚ RESPONSIVO ========
const menuBtn = document.querySelector("header button");
const nav = document.querySelector("header nav");

if (menuBtn && nav) {
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

// ======== FORMULARIO DE CONTACTO ========
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = form.querySelector("#nombre").value.trim();
    const email = form.querySelector("#email").value.trim();

    if (!nombre || !email) {
      alert("Por favor, completa los campos obligatorios.");
      return;
    }

    alert(`¡Gracias ${nombre}! Hemos recibido tu solicitud. Te contactaremos pronto.`);
    form.reset();
  });
}

// ======== SCROLL SUAVE ========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
