self.addEventListener("install",function(event){
    console.log("installed",event);
    event.waitUntil(
        cache.add("static").then((cache)=>{
            cache.add("../js/jquery-3.5.1.min.js");
            cache.add("../js/script.js");
            cache.add("http://127.0.0.1:8000/");
        })
    );
});

self.addEventListener("activate", function (event) {
    console.log("Activated", event);
    return self.clients.claim();
});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                return response;
            } else {
                return fetch(event.request);
                    
            }
        })
    );
});
