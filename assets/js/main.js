const card = product => `<article class="product-card" data-type="${product.type}"><a class="product-image" href="producto.html?modelo=${product.slug}"><img src="${product.image}" alt="${product.name}" loading="lazy"><span>Ver detalle ↗</span></a><div class="product-info"><p>${product.type === 'gorra' ? 'GORRA' : 'SOMBRERO'}</p><h3><a href="producto.html?modelo=${product.slug}">${product.name}</a></h3></div></article>`;

const catalog = document.querySelector('#catalog-products');
const featured = document.querySelector('#featured-products');
if (catalog) catalog.innerHTML = products.map(card).join('');
if (featured) featured.innerHTML = products.slice(0, 3).map(card).join('');

document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  document.querySelectorAll('.catalog-grid .product-card').forEach(item => item.hidden = button.dataset.filter !== 'todos' && item.dataset.type !== button.dataset.filter);
}));

const detail = document.querySelector('#product-detail');
if (detail) {
  const slug = new URLSearchParams(window.location.search).get('modelo');
  const product = products.find(item => item.slug === slug) || products[0];
  document.title = `${product.name} · NA CAPS`;
  const message = encodeURIComponent(`Hola, vi la referencia ${product.name} en su web y quiero consultar por un pedido al por mayor.`);
  detail.innerHTML = `<section class="product-page section-pad"><a class="back-link" href="catalogo.html">← Volver al catálogo</a><div class="product-layout"><div class="detail-image"><img src="${product.image}" alt="${product.name}"></div><div class="detail-copy"><p class="eyebrow">${product.type === 'gorra' ? 'MODELO DE GORRA' : 'MODELO DE SOMBRERO'}</p><h1>${product.name}</h1><p class="product-description">${product.description}</p><ul class="spec-list"><li><span>Material</span><strong>${product.material}</strong></li><li><span>Talla</span><strong>${product.size}</strong></li><li><span>Colores</span><strong>${product.colors}</strong></li><li><span>Acabado</span><strong>${product.customization}</strong></li></ul><a class="button" href="https://wa.me/51912944038?text=${message}" target="_blank" rel="noopener">Consultar ahora <span>↗</span></a><p class="detail-note">Pedidos al por mayor desde 12 unidades. Trae tu muestra para fabricar el modelo que necesitas.</p></div></div></section>`;
}

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) toggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.classList.toggle('open', open); toggle.setAttribute('aria-expanded', open); });
