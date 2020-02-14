const staticAssets = [
  "./",
  "./public/index/html",
  "./public/style.css",
  "./public/bundle.js",
  "./public/images/img0.png",
  "./public/images/img6.png",
  "./public/images/img5.png",
  "./public/images/img4.png",
  "./public/images/img3.png",
  "./public/images/img2.png",
  "./public/images/img1.png",
  "./public/images/logo.png",
  "./public/manifest.json"
];

self.addEventListener("install", async event => {
  const cache = await caches.open("static-cache");
  cache.addAll(staticAssets);
});

self.addEventListener("fetch", event => {
  const req = event.request;
  const url = new URL(req.url);

  if (url.origin === location.url) {
    event.respondWith(cacheFirst(req));
  } else {
    event.respondWith(networkFirst(req));
  }
});

async function cacheFirst(req) {
  const cachedResponse = caches.match(req);
  return cachedResponse || fetch(req);
}

async function networkFirst(req) {
  const cache = await caches.open("dynamic-cache");

  try {
    const res = await fetch(req);
    cache.put(req, res.clone());
    return res;
  } catch (error) {
    return await cache.match(req);
  }
}
