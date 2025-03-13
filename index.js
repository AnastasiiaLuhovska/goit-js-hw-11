import{i as c}from"./assets/vendor-iVKk4foX.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const l=s=>{const o=new URLSearchParams({key:"49325952-cafcda966d997e584839964e4",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}).toString();return fetch(`https://pixabay.com/api/?${o}`).then(t=>{if(!t.ok)throw new Error(`Помилка HTTP ${t.status}`);return t.json()})},u=({webformatURL:s,largeImageURL:o,tags:t,likes:i,views:e,comments:r,downloads:a})=>`<li>
      <a class ="link" href="${o}">
          <img class="image" src = "${s}" alt="${t}"/>
          <div class= "wrapper">
              <div class ="container">
                  <p>Likes</p>
                  <p>${i}</p>
              </div>
              <div class ="container">
                  <p>Views</p>
                  <p>${e}</p>
              </div>
               <div class ="container">
                  <p>Comments</p>
                  <p>${r}</p>
              </div>
              <div class ="container">
                  <p>Downloads</p>
                  <p>${a}</p>
              </div>
          </div>
      </a>
</li>`,n={form:document.querySelector(".form"),gallery:document.querySelector(".gallery")},p=s=>{s.preventDefault();const o=s.target.elements["search-text"].value;o.trim()&&(l(o).then(t=>{t.hits.length===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!"});const i=t.hits.map(e=>u(e)).join("");n.gallery.innerHTML=i}).catch(t=>console.log(t.message)),s.target.reset())};n.form.addEventListener("submit",p);
//# sourceMappingURL=index.js.map
