if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let l={};const o=e=>i(e,a),t={module:{uri:a},exports:l,require:o};s[a]=Promise.all(r.map((e=>t[e]||o(e)))).then((e=>(n(...e),l)))}}define(["./workbox-ab24e45d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"about.html",revision:"7d7313637a3130c0a731e72d08051849"},{url:"assets/_...all_.a91f2471.js",revision:null},{url:"assets/_name_.6cc50b37.js",revision:null},{url:"assets/404.b8e08daa.js",revision:null},{url:"assets/about.399d9853.js",revision:null},{url:"assets/app.e8407981.js",revision:null},{url:"assets/home.a5f15a2a.js",revision:null},{url:"assets/index.afa23a2f.css",revision:null},{url:"assets/README.cf7111c0.js",revision:null},{url:"assets/virtual_pwa-register.6d1fd2b2.js",revision:null},{url:"assets/workbox-window.prod.es5.6954f450.js",revision:null},{url:"index.html",revision:"d6d1dcd29a668beabfeaa92fcfb2879e"},{url:"readme.html",revision:"796ecb1c4defccbae5196b0fea5fda6a"},{url:"favicon.svg",revision:"a795ab195c26601ea433babed25a7d0d"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"37e8d18026b05432f623fc5efac2b4b1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
