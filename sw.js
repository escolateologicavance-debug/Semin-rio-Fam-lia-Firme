const CACHE_NAME = 'familia-firme-v1';
const assets = [
  '1.html', '2.html', '3.html', '4.html', '5.html', '6.html', '7.html', '8.html',
  '1000301044.png', '1773162817019.jpeg', '1000301189.jpg', '1773174854728.jpeg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(assets))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});