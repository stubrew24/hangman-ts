const staticAssets = [
  "./",
  "./images/img0.png",
  "./images/img6.png",
  "./images/img5.png",
  "./images/img4.png",
  "./images/img3.png",
  "./images/img2.png",
  "./images/img1.png",
  "./images/logo.png",
  "./index/html",
  "./bundle.js",
  "./style.css",
  "./manifest.json"
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
