// Service Worker for 物理クイズ PWA
const CACHE_NAME = 'phys-quiz-v7';

// キャッシュするファイル一覧
const PRECACHE_FILES = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './categories.js',
  './data/trivia.js',
  './data/badges.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './images/blackboard.jpg',
  './images/character.png',
  './images/housou_hare.jpg',
  './images/housou_kumori.jpg',
  './images/huseikai.png',
  './images/seikai_p1.png',
  './images/seikai_p2.png',
  './images/mihiraki.png',
  './images/kokubannomi.png',
  './data/p0.js',
  './data/p1.js',
  './data/p2.js',
  './data/p3.js',
  './data/p4.js',
  './data/p5.js'
];

// 外部CDNリソース（ネットワーク優先、フォールバックでキャッシュ）
const CDN_RESOURCES = [
  'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/contrib/auto-render.min.js',
  'https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;700&display=swap'
];

// インストール: プリキャッシュ
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(PRECACHE_FILES);
    }).then(() => self.skipWaiting())
  );
});

// アクティベート: 古いキャッシュを削除
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// フェッチ: Cache First（ローカル）、Network First（CDN/API）
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Supabase API は常にネットワーク
  if (url.hostname.includes('supabase')) {
    event.respondWith(fetch(event.request));
    return;
  }

  // CDNリソース: ネットワーク優先、失敗時キャッシュ
  if (url.hostname !== location.hostname) {
    event.respondWith(
      fetch(event.request).then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      }).catch(() => caches.match(event.request))
    );
    return;
  }

  // ローカルリソース: キャッシュ優先
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request).then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      });
    })
  );
});
