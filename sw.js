const CACHE_NAME = 'familia-firme-v1';
const assets = [
  'index.html', // Essencial para o PWA
  '1.html',
  '2.html',
  '3.html',
  '4.html',
  '5.html',
  '6.html',
  '7.html',
  '8.html',
  '1000301044.png',
  'capa-192.png', 
  'capa-512.png', 
  'manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Adicionamos um por um para garantir que não trave se uma imagem faltar
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
