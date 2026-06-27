const CACHE="finlab-precificadora-v1";
const ASSETS=["./","index.html","jspdf.umd.min.js","html2canvas.min.js","icon.png","icon-192.png","apple-touch-icon.png","og.png","manifest.webmanifest"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",e=>{
  const req=e.request;
  if(req.method!=="GET")return;
  if(req.mode==="navigate"){
    e.respondWith(fetch(req).then(resp=>{const cl=resp.clone();caches.open(CACHE).then(c=>c.put("index.html",cl));return resp;}).catch(()=>caches.match("index.html").then(r=>r||caches.match("./"))));
    return;
  }
  e.respondWith(caches.match(req).then(r=>r||fetch(req).then(resp=>{if(resp&&resp.status===200&&resp.type==="basic"){const cl=resp.clone();caches.open(CACHE).then(c=>c.put(req,cl));}return resp;}).catch(()=>r)));
});
