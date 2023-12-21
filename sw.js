self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('static').then(cache => {
            return cache.addAll(['./index.html', './assets/css/main.css','assets/css/fontawesome-all.min.css','./assets/css/noscript.css','./assets/js/breakpoints.min.js', './assets/js/browser.min.js','./assets/js/jquery.min.js','./assets/js/util.js','./assets/js/main.js']);
        })
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});
