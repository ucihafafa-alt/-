const CACHE='tengerin-melmii-fix-no-build16-20260628-2208';
self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(c => c.addAll(['./','index.html','app.js?v=fix-no-build16-20260628-2208','icon.png','bg.jpg','manifest.json']))); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => k===CACHE?null:caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener('fetch', e => { e.respondWith(fetch(e.request).then(r => { const copy=r.clone(); caches.open(CACHE).then(c=>c.put(e.request,copy)).catch(()=>{}); return r; }).catch(()=>caches.match(e.request))); });
