if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const c=e=>i(e,r),l={module:{uri:r},exports:t,require:c};s[r]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(o(...e),t)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-599875ad.js",revision:null},{url:"assets/workbox-window.prod.es5-5ffdab76.js",revision:null},{url:"index.html",revision:"8ceac2b1eb6b4e7c9bc47f98eb7efaae"},{url:"masked-icon.svg",revision:"761b5e5756bcccdb6c2bb56832277c89"},{url:"manifest.webmanifest",revision:"52b21721174ec6af6ac38df4f840d39a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
