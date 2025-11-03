document.addEventListener('DOMContentLoaded', () => {
  fetch('src/data/blog.json')
    .then(response => response.json())
    .then(data => {
      const blogContainer = document.getElementById('blog-container');
      blogContainer.innerHTML = '';

      data.forEach(post => {
        const card = document.createElement('article');
        card.className = 'blog-card bg-white shadow-md overflow-hidden hover:scale-[1.02] transition-all';

        card.innerHTML = `
          <img src="${post.imagen}" alt="${post.titulo}" class="img-flexible">
          <div class="p-6">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">${post.titulo}</h2>
            <p class="text-gray-600 mb-4">${post.descripcion}</p>
            <a href="${post.url}" class="text-primary font-semibold hover:underline">Leer más →</a>
          </div>
        `;
        blogContainer.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Error al cargar el blog:', error);
    });
});
