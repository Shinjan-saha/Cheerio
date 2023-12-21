self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('static').then(cache => {
            return cache.addAll(['./index.html', './assets/css/main.css','assets/css/fontawesome-all.min.css','./assets/css/noscript.css','./assets/js/breakpoints.min.js', './assets/js/browser.min.js','./assets/js/jquery.min.js','./assets/js/util.js','./assets/js/main.js','./images/Contribute.png','./images/cherlogo.png','./images/overlay.png','./images/pic03.jpg','./images/pic11.jpg','./images/pic14.jpg','./images/pic17.jpg','./images/pic2.jpg','./images/pic22.jpg','./images/pic5.jpg','./images/pic8.jpg','./images/pxfuel.jpg','./images/bg.jpg','./images/emergenew.png','./images/pic01.jpg','./images/pic1.jpg','./images/pic12.jpg','./images/pic15.jpg','./images/pic18.jpg','./images/pic20.jpg','./images/pic3.jpg','./images/pic6.jpg','./images/pic9.jpg','./images/intro.png','./images/pic02.jpg','./images/pic10.jpg','./images/pic13.jpg','./images/pic16.jpg','./images/pic19.jpg','./images/pic21.jpg','./images/pic4.jpg','./images/pic7.jpg','./images/purpcir.png']);
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
