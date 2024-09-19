import{i as a,S as u}from"./assets/vendor-BrddEoy-.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="46068756-c5f919e10572d3f09e9540b43",x="https://pixabay.com/api/";async function b(r){return(await(await fetch(`${x}?key=${y}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`)).json()).hits}function v(r,i){const o=r.map(({webformatURL:s,largeImageURL:e,tags:t,likes:n,views:g,comments:h,downloads:m})=>`
      <div class="photo-card">
    <div class="photo-card-img">
      <a href="${e}" class="gallery-link">
        <img src="${s}" alt="${t}" loading="lazy" />
      </a>
    </div>
    <div class="info">
      <div class="info-item">
        <b>Likes</b>
        <p>${n}</p>
      </div>
      <div class="info-item">
        <b>Views</b>
        <p>${g}</p>
      </div>
      <div class="info-item">
        <b>Comments</b>
        <p>${h}</p>
      </div>
      <div class="info-item">
        <b>Downloads</b>
        <p>${m}</p>
      </div>
    </div>
  </div>
  `).join("");i.innerHTML=o}const c=document.getElementById("search-form"),p=document.getElementById("gallery"),d=document.getElementById("loader");let l;c.addEventListener("submit",async r=>{r.preventDefault();const i=c.query.value.trim();if(!i){a.warning({title:"Warning",message:"OMG!?... Please enter a search query!",position:"topRight"});return}p.innerHTML="",d.classList.remove("hidden");try{const o=await b(i);if(o.length===0){a.info({title:"Info",message:"OMG!?... No images found!",position:"topRight"});return}v(o,p),d.classList.add("hidden"),l?l.refresh():l=new u(".gallery-link")}catch{a.error({title:"Error",message:"OMG!?... Something went wrong!",position:"topRight"})}finally{d.classList.add("hidden")}});const w=`
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

p:last-child {
  margin-bottom: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: currentColor;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

body {
  font-family: 'Montserrat', sans-serif;
}

.search-form {
  margin: 20px;
  text-align: center;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  grid-gap: 24px;
  padding: 20px;
}

.photo-card {
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.photo-card-img {
  width: 100%;
  height: auto;
  flex: 1;
}

.loader {
  display: flex;
  justify-content: center;
  margin: 20px;
}

.hidden {
  display: none;
}

.info {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  width: auto;
  height: 48px;
  padding: 4px 0;
}

input {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.04em;
  color: #2e2f42;
  border: 1px solid #808080;
  border-color: #808080;
  border-radius: 4px;
  min-width: 274px;
  height: 40px;
  padding: 0px 16px;
}

input:hover {
  border-color: #000;
}

input :focus {
  border-color: #4e75ff;
}

button {
  cursor: pointer;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  width: auto;
  height: 40px;
  background: #4e75ff;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.04em;
  color: #fff;
}

button:hover {
  border: none;
  background: #6c8cff;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.04em;
  color: #fff;
}

`,f=document.createElement("style");f.innerText=w;document.head.appendChild(f);
//# sourceMappingURL=index.js.map
