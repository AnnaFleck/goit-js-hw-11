import{i as n}from"./assets/vendor-17o45ynk.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();function l(o){return fetch(`https://pixabay.com/api/?key=46309603-7d83d81f3414b6bb7a2d6c2e1&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&per_page=30`).then(r=>(r.ok||iziToast.error({message:"Something went wrong",position:"bottomRight"}),r.json()))}function d(o){return o.map(({largeImageURL:s,webformatURL:c,tags:r,likes:e,views:t,comments:i,downloads:a})=>`<li class="gallery-item">
        <article class="card">
    <a class="card-link" href="${s}"><img class="card-image" src="${c}" alt="${r}" loading="lazy"/></a>        <div class="card-container">
          <div class="card-item">
            <p class="card-title">Likes</p>
            <p class="card-count">${e}</p>
          </div>
          <div class="card-item">
            <p class="card-title">Views</p>
            <p class="card-count">${t}</p>
          </div>
          <div class="card-item">
            <p class="card-title">Comments</p>
            <p class="card-count">${i}</p>
          </div>
          <div class="card-item">
            <p class="card-title">Downloads</p>
            <p class="card-count">${a}</p>
          </div>
        </div>
        </article>
          </li>`).join("")}const u=document.querySelector(".input"),p=document.querySelector(".gallery"),m=document.querySelector(".button");m.addEventListener("click",o=>{o.preventDefault();const s=u.value;if(s===""){n.error({message:"Enter a search query",position:"center"});return}l(s).then(r=>{const e=r.hits;if(e.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"center"});return}p.insertAdjacentHTML("beforeend",d(e)),console.log(r.hits)}).catch(r=>{n.error({message:"Error! Something went wrong.",position:"center"})})});
//# sourceMappingURL=index.js.map
