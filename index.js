import{S as m,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function p(r){return fetch(`https://pixabay.com/api/?key=46309603-7d83d81f3414b6bb7a2d6c2e1&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`).then(s=>(s.ok||iziToast.error({message:"Something went wrong",position:"bottomRight"}),s.json()))}function f(r){return r.map(({largeImageURL:o,webformatURL:i,tags:s,likes:e,views:t,comments:a,downloads:u})=>`<li class="gallery-item">
        <article class="card">
    <a class="card-link" href="${o}"><img class="card-image" src="${i}" alt="${s}" loading="lazy"/></a>        <div class="card-container">
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
            <p class="card-count">${a}</p>
          </div>
          <div class="card-item">
            <p class="card-title">Downloads</p>
            <p class="card-count">${u}</p>
          </div>
        </div>
        </article>
          </li>`).join("")}function g(r){r.classList.remove("hidden"),r.style.display="block"}function l(r){r.classList.add("hidden"),r.style.display="none"}const h=document.querySelector(".form"),d=document.querySelector(".gallery"),n=document.getElementById("loader-indicator");let y=new m(".gallery a",{captionsData:"alt",captionDelay:250});h.addEventListener("submit",L);function L(r){r.preventDefault();const i=r.currentTarget.elements.state.value.trim();if(i===""){c.error({message:"Enter a search query",position:"center"});return}d.innerHTML="",g(n),p(i).then(e=>{l(n);const t=e.hits;if(t.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"center"});return}d.insertAdjacentHTML("beforeend",f(t)),y.refresh()}).catch(e=>{l(n),c.error({message:"Error! Something went wrong.",position:"center"})})}
//# sourceMappingURL=index.js.map
