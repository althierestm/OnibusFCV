self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Permite buscar os dados do mapa e do Firebase sempre atualizados
  e.respondWith(fetch(e.request));
});
