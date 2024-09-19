import{i as s,S as u}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const x="46068756-c5f919e10572d3f09e9540b43",y="https://pixabay.com/api/";async function b(r){return(await(await fetch(`${y}?key=${x}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`)).json()).hits}function v(r,o){const i=r.map(({webformatURL:a,largeImageURL:e,tags:t,likes:n,views:g,comments:m,downloads:h})=>`
      <div class="photo-card">
    <div class="photo-card-img">
      <a href="${e}" class="gallery-link">
        <img src="${a}" alt="${t}" loading="lazy" />
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
        <p>${m}</p>
      </div>
      <div class="info-item">
        <b>Downloads</b>
        <p>${h}</p>
      </div>
    </div>
  </div>
  `).join("");o.innerHTML=i}const l=document.getElementById("search-form"),c=document.getElementById("gallery"),p=document.getElementById("loader");let d;l.addEventListener("submit",async r=>{r.preventDefault();const o=l.query.value.trim();if(!o){s.warning({title:"Warning",message:"OMG!?... Please enter a search query!",position:"topRight"});return}c.innerHTML="",p.classList.remove("hidden");try{const i=await b(o);i.length===0?s.info({title:"Info",message:"OMG!?... No images found!",position:"topRight"}):(v(i,c),d?d.refresh():d=new u(".gallery-link"))}catch{s.error({title:"Error",message:"OMG!?... Something went wrong!",position:"topRight"})}finally{p.classList.add("hidden")}});const w=`
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
   position: fixed;
  top: 100;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 64px;
  height: 64px;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
}
.loader:after {
  content: '';
  position: absolute;
  inset: 8px;
  margin: auto;
  background: #222b32;
}
.loader:before {
  content: '';
  position: absolute;
  inset: -15px;
  margin: auto;
  background: #de3500;
  animation: diamondLoader 2s linear infinite;
}
@keyframes diamondLoader {
  0%  ,10% {
    transform: translate(-64px , -64px) rotate(-45deg)
  }
  90% , 100% {
    transform: translate(0px , 0px) rotate(-45deg)
  }
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

input:focus {
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
