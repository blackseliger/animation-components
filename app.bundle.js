(()=>{var e,t={114:(e,t,n)=>{var r={"./animations/index.js":[972,960],"./error404/index.js":[232,854]};function a(e){if(!n.o(r,e))return Promise.resolve().then(()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=r[e],a=t[0];return n.e(t[1]).then(()=>n(a))}a.keys=()=>Object.keys(r),a.id=114,e.exports=a}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((t,n)=>(r.f[n](e,t),t),[])),r.u=e=>({854:"error404-index-js",960:"animations-index-js"}[e]+"-"+e+".js"),r.miniCssF=e=>{},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},r.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var i,s;if(void 0!==a)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var c=u[d];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")=="animation-components:"+a){i=c;break}}i||(s=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack","animation-components:"+a),i.src=t),e[t]=[n];var l=(n,r)=>{i.onerror=i.onload=null,clearTimeout(h);var a=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach(e=>e(r)),n)return n(r)},h=setTimeout(l.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=l.bind(null,i.onerror),i.onload=l.bind(null,i.onload),s&&document.head.appendChild(i)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="",(()=>{var e={143:0};r.f.j=(t,n)=>{var a=r.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var o=new Promise((n,r)=>a=e[t]=[n,r]);n.push(a[2]=o);var i=r.p+r.u(t),s=new Error;r.l(i,n=>{if(r.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,a[1](s)}},"chunk-"+t,t)}};var t=(t,n)=>{var a,o,[i,s,u]=n,d=0;if(i.some(t=>0!==e[t])){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(u)u(r)}for(t&&t(n);d<i.length;d++)o=i[d],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0},n=self.webpackChunkanimation_components=self.webpackChunkanimation_components||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),(()=>{"use strict";class e{constructor(){this.routes=[],this.initEventListeners()}initEventListeners(){document.addEventListener("click",e=>{const t=e.target.closest("a");if(!t)return;const n=t.getAttribute("href");n&&n.startsWith("/")&&(e.preventDefault(),this.navigate(n))})}static instance(){return this._instance||(this._instance=new e),this._instance}async route(){let e,t=decodeURI(window.location.pathname).replace(/^\/|\/$/,"");for(let n of this.routes)if(e=t.match(n.pattern),e){this.page=await this.changePage(n.path,e);break}e||(this.page=await this.changePage(this.notFoundPagePath)),document.dispatchEvent(new CustomEvent("route",{detail:{page:this.page}}))}async changePage(e,t){return this.page&&this.page.destroy&&this.page.destroy(),await async function(e,t){const n=document.querySelector("main");n.classList.add("is-loading");const{default:a}=await r(114)(`./${e}/index.js`),o=new a,i=await o.render();n.classList.remove("is-loading");const s=document.querySelector("#content");return s.innerHTML="",s.append(i),o}(e)}navigate(e){history.pushState(null,null,e),this.route()}addRoute(e,t){return this.routes.push({pattern:e,path:t}),this}setNotFoundPagePath(e){return this.notFoundPagePath=e,this}listen(){window.addEventListener("popstate",()=>this.route()),this.route()}}e.instance().addRoute(/^$/,"animations").addRoute(/^404\/?$/,"error404").setNotFoundPagePath("animations").listen()})()})();
//# sourceMappingURL=app.bundle.js.map