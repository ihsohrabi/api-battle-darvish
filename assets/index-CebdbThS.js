(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const c=()=>`<div
      id="gamesContainer"
      class="w-full bg-slate-900 p-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 auto-rows-[411px] [&>*]:bg-slate-600 gap-4"
    >
    </div>`,n=async()=>{let i=(await(await fetch("https://ihsohrabi.github.io/api-battle/db.json")).json()).map(t=>`<div class="relative">
        <img
          class="w-full h-[164px] object-cover"
          src="${t.image}"
          alt="${t.gameName}"
        />
        <div class="flex items-center px-4 py-2 gap-4">
          <img
            class="w-[30px] h-[30px] object-contain"
            src="${t.icon}"
            alt="${t.gameTitle}"
          />
          <span class="text-slate-100 font-bold">${t.gameName}</span>
        </div>
        <h2 class="text-[20px] text-slate-200 line-clamp-2 font-bold px-4">
          ${t.gameTitle}
        </h2>
        <p class="text-yellow-500 text-[14px] px-4 line-clamp-3">
        ${t.desc}
        </p>
        <span
          class="text-[18px] font-bold text-white absolute left-[15px] bottom-[15px]"
          >$${t.price}</span
        >
      </div>`);document.querySelector("#gamesContainer").insertAdjacentHTML("afterbegin",i.join(""))},l=(...o)=>{o.forEach(s=>{document.querySelector("#root").insertAdjacentHTML("beforeend",s)})};l(c());n();
