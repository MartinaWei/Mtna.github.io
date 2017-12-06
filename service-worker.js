"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","654f6770c9da7b87b8eb9d64869eecf1"],["/static/css/main.9826c792.css","17e299acc6eb4ec3bc8b2f8fbda87684"],["/static/js/main.33a8d41e.js","4525e909ae2b42ada1dffc2b00a607de"],["/static/media/DNA_word.03817450.png","0381745029a65f310a6de50f72c4ca4d"],["/static/media/Persona.40f3948e.png","40f3948eed8ee558e4552e9f3c8e00e3"],["/static/media/apttern.c7776a70.png","c7776a70cad0d8676f9a8b76726abef6"],["/static/media/elder.9d894b67.png","9d894b671b99b5a6e25d7eccfb0d0ddd"],["/static/media/fig1.e8ffa19c.png","e8ffa19c1db5f515488dce56bcc79451"],["/static/media/fig2.b46f7090.png","b46f709002301637fecfefd37bdf9001"],["/static/media/fig3.41f8d128.png","41f8d128388ff6ff57d59f9a930864e3"],["/static/media/fig4.3bc8771b.png","3bc8771b9a9b4867e0f53fc697d97e60"],["/static/media/fig5.5a2bc914.png","5a2bc914ea6247724065c247c2e1d878"],["/static/media/fig6.0fc8013c.png","0fc8013cec485a11d254b8be6df93fc1"],["/static/media/flow.0f2dee21.png","0f2dee2143f99b7826b91fd00ca59829"],["/static/media/img1.d10c5e48.png","d10c5e48e3839e3fcf6f806ec15e9834"],["/static/media/img2.da15a5b0.png","da15a5b097c54be642e9ae8bd487bc8b"],["/static/media/img3.994fdd79.png","994fdd79ff700abf8391cc9884e7d928"],["/static/media/img4.b0219c1a.png","b0219c1a8b26803ebeade4785879f642"],["/static/media/img5.a78be04c.png","a78be04ceba8cbcc54334030add10424"],["/static/media/kiosk.1fceead6.png","1fceead6c7741315c21d51cf8d1e2b52"],["/static/media/main.6bcaf79c.png","6bcaf79cd845ef3f9e65e626c11cf2d4"],["/static/media/main.ba105a3f.png","ba105a3f09f0ec5b285e4b95481fa864"],["/static/media/pg1.6fa7872a.png","6fa7872a6024f13f71450dd8df0df1f6"],["/static/media/pg2.a59e418e.png","a59e418ee86734d8dddbd7bf78792243"],["/static/media/pg3.7ac4b942.png","7ac4b942cc659cf211c81b8c8f6d4b99"],["/static/media/photo.a27e60e1.png","a27e60e1f1ba68de367a48c075aef49c"],["/static/media/solution.6baf8fbf.png","6baf8fbf8b4998d5f3916ad82e4c6c55"],["/static/media/solution.9d7229f5.png","9d7229f5259afcaeafc0e236b915517d"],["/static/media/values.54b5d0e6.png","54b5d0e6115929d978a09640d2787502"],["/static/media/zoo.6346511a.png","6346511a9215d63e1b0e7dfcf70d4955"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});