// TRACK — Service Worker
// Caches the app shell for offline use

const CACHE_NAME = 'track-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;700;800&display=swap'
];

// Install: cache core assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS).catch(() => {
        // Fonts may fail offline — that's fine
        return cache.addAll(['./','./index.html','./manifest.json']);
      });
    })
  );
  self.skipWaiting();
});

// Activate: clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: network-first for Google Sheets API, cache-first for everything else
self.addEventListener('fetch', event => {
  const url = event.request.url;

  // Always go to network for Google Apps Script (sync calls)
  if (url.includes('script.google.com') || url.includes('fonts.googleapis.com') || url.includes('fonts.gstatic.com') || url.includes('wikimedia.org')) {
    event.respondWith(
      fetch(event.request).catch(() => new Response('', { status: 503 }))
    );
    return;
  }

  // Cache-first for app shell
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request).then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      });
    }).catch(() => caches.match('./index.html'))
  );
});
