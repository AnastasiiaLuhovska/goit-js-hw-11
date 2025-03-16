import{a as f,b as m,i as g,S as h}from"./assets/vendor-YD7FdOII.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const y=r=>f.get("https://pixabay.com/api/",{params:{key:"49325952-cafcda966d997e584839964e4",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}),b=({webformatURL:r,largeImageURL:s,tags:a,likes:i,views:e,comments:t,downloads:o})=>{const l=a.split(",").filter((p,d,u)=>d===u.indexOf(p));return`<li>
      <a class ="link" href="${s}">
          <img class="image" src = "${r}" alt="${l}"/>
          <div class= "wrapper">
              <div class ="container">
                  <p>Likes</p>
                  <p class="numbers">${i}</p>
              </div>
              <div class ="container">
                  <p>Views</p>
                  <p class="numbers">${e}</p>
              </div>
               <div class ="container">
                  <p>Comments</p>
                  <p class="numbers">${t}</p>
              </div>
              <div class ="container">
                  <p>Downloads</p>
                  <p class="numbers">${o}</p>
              </div>
          </div>
      </a>
</li>`},n=m.create('<span class="loader"></span>'),c={form:document.querySelector(".form"),gallery:document.querySelector(".gallery")},v=r=>{r.preventDefault();const s=r.target.elements["search-text"].value;s.trim()&&(r.target.reset(),n.show(),y(s).then(a=>{a.data.hits.length===0&&g.error({message:"Sorry, there are no images matching your search query. Please try again!"});const i=a.data.hits.map(e=>b(e)).join("");c.gallery.innerHTML=i,new h(".link",{captionsData:"alt"})}).catch(a=>console.log(a.message)).finally(n.close()))};c.form.addEventListener("submit",v);
//# sourceMappingURL=index.js.map
