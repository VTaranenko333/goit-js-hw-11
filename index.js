import{i as a,S as g}from"./assets/vendor-BrddEoy-.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="46068756-c5f919e10572d3f09e9540b43",y="https://pixabay.com/api/";async function v(r){return(await(await fetch(`${y}?key=${h}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`)).json()).hits}function b(r,i){const o=r.map(({webformatURL:n,largeImageURL:e,tags:t,likes:s,views:m,comments:p,downloads:u})=>`
      <div class="photo-card">
    <div class="photo-card-img">
      <a href="${e}" class="gallery-link">
        <img src="${n}" alt="${t}" loading="lazy" />
      </a>
    </div>
    <div class="info">
      <div class="info-item">
        <b>Likes</b>
        <p>${s}</p>
      </div>
      <div class="info-item">
        <b>Views</b>
        <p>${m}</p>
      </div>
      <div class="info-item">
        <b>Comments</b>
        <p>${p}</p>
      </div>
      <div class="info-item">
        <b>Downloads</b>
        <p>${u}</p>
      </div>
    </div>
  </div>
  `).join("");i.innerHTML=o}const d=document.getElementById("search-form"),f=document.getElementById("gallery"),c=document.getElementById("loader");let l;d.addEventListener("submit",async r=>{r.preventDefault();const i=d.query.value.trim();if(!i){a.warning({title:"Warning",message:"OMG!?... Please enter a search query!",position:"topRight"});return}f.innerHTML="",c.classList.remove("hidden");try{const o=await v(i);if(o.length===0){a.info({title:"Info",message:"OMG!?... No images found!",position:"topRight"});return}b(o,f),c.classList.add("hidden"),l?l.refresh():l=new g(".gallery-link")}catch{a.error({title:"Error",message:"OMG!?... Something went wrong!",position:"topRight"})}finally{c.classList.add("hidden")}});
//# sourceMappingURL=index.js.map
