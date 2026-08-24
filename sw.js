/* Who is the Imposter — offline service worker.
   Cache-first: once any page asset has been seen, the game runs
   with zero network. Version bump forces a refresh of old assets. */
'use strict';

const CACHE = 'imposter-v2';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './logo.png',
  './icon-192.png',
  './icon-512.png',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then((cached) =>
      cached ||
      fetch(req).then((res) => {
        if (res.ok && new URL(req.url).origin === self.location.origin) {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(req, copy));
        }
        return res;
      }).catch(() => caches.match('./index.html'))
    )
  );
});
