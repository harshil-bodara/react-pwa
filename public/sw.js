let cacheData = "V1";

this.addEventListener("install",(event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                "/static/js/main.chunk.js",
                "/static/js/0.chunk.js",
                "/static/js/bundle.js",
                "/static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg",
                "/favicon.ico",
                "/index.html",
                "/"
            ])
        })
    )
})

this.addEventListener("fetch",(event) => {
    if(!navigator.onLine)
    {
        event.respondWith(
            caches.match(event.request).then((resp) => {
                if(resp)
                {
                    return resp;
                }
            })
        )
    }
})
