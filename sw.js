// Service Worker أساسي لموقع Clean للنظافة العامة
const CACHE_NAME = 'clean-ksa-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // يمكن تطوير الكاش لاحقاً إذا احتجت
});
