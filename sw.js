/* ENEM Lab — service worker (cache primeiro, atualiza em segundo plano) */
var CACHE = 'enemlab-v2';
var ARQUIVOS = [
  './',
  './index.html',
  './js/app.js',
  './js/flash.js',
  './js/match.js',
  './js/memory.js',
  './js/quiz.js',
  './js/store.js',
  './js/util.js',
  './css/style.css',
  './data/d-artes-tic.js',
  './data/d-biologia.js',
  './data/d-estrangeira.js',
  './data/d-filosofia.js',
  './data/d-fisica.js',
  './data/d-geografia.js',
  './data/d-historia.js',
  './data/d-literatura.js',
  './data/d-matematica.js',
  './data/d-portugues.js',
  './data/d-quimica.js',
  './data/d-redacao.js',
  './data/d-sociologia.js',
  './data/dicas.js',
  './data/registry.js',
  './icons/apple-touch-icon.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/maskable-512.png',
  './manifest.json'
];
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(ARQUIVOS); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.open(CACHE).then(function (c) {
    return c.match(e.request, { ignoreSearch: true }).then(function (hit) {
      var rede = fetch(e.request).then(function (r) {
        if (r && r.ok && new URL(e.request.url).origin === location.origin) c.put(e.request, r.clone());
        return r;
      }).catch(function () { return hit; });
      return hit || rede;
    });
  }));
});
