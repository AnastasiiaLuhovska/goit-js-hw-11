import{a as f,b as m,S as g,i as h}from"./assets/vendor-COdsPqSE.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const y=r=>f.get("https://pixabay.com/api/",{params:{key:"49325952-cafcda966d997e584839964e4",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}),b=({webformatURL:r,largeImageURL:s,tags:a,likes:o,views:e,comments:t,downloads:i})=>{const l=a.split(",").filter((d,p,u)=>p===u.indexOf(d)).join(",");return`<li>
      <a class ="link" href="${s}">
          <img class="image" src = "${r}" alt="${l}"/>
          <div class= "wrapper">
              <div class ="container">
                  <p>Likes</p>
                  <p class="numbers">${o}</p>
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
                  <p class="numbers">${i}</p>
              </div>
          </div>
      </a>
</li>`},c=m.create('<span class="loader"></span>'),v=r=>{const s=r.data.hits.map(o=>b(o)).join("");n.gallery.innerHTML=s,new g(".link",{captionsData:"alt"}).refresh()},n={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},L=r=>{r.preventDefault();const s=r.target.elements["search-text"].value;s.trim()&&(r.target.reset(),c.show(),y(s).then(a=>{a.data.hits.length===0&&h.error({message:"Sorry, there are no images matching your search query. Please try again!"}),v(a)}).catch(a=>console.log(a.message)).finally(c.close()))};n.form.addEventListener("submit",L);n.loader.classList.add("hidden");
//# sourceMappingURL=index.js.map
