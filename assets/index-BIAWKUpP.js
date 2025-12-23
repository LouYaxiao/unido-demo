(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const a=document.querySelector("#content-area"),l=document.querySelector("#page-title");function c(o){document.querySelectorAll("nav a").forEach(r=>{r.classList.remove("bg-blue-600","text-white"),r.classList.add("text-slate-300","hover:bg-slate-800")});const s=document.getElementById(o);s&&(s.classList.remove("text-slate-300","hover:bg-slate-800"),s.classList.add("bg-blue-600","text-white"))}document.getElementById("nav-docs").addEventListener("click",o=>{o.preventDefault(),c("nav-docs"),l.innerText="System Documentation",a.innerHTML=`
      <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-4xl">
        <div class="prose prose-slate max-w-none">
          <h3 class="text-xl font-bold text-slate-800 mb-4">About this Prototype</h3>
          <p class="text-slate-600 mb-6">
            This is a lightweight <strong>Learning Management System (LMS)</strong> prototype designed to demonstrate technical proficiency for the UNIDO internship position. 
            It showcases how to build a serverless, interactive application using modern frontend technologies (Vite, Tailwind, Vanilla JS).
          </p>

          <h4 class="font-bold text-slate-800 mb-2">Key Features</h4>
          <ul class="list-disc list-inside text-slate-600 space-y-2 mb-6">
            <li>
              <strong>Data-Driven Architecture:</strong> 
              Content is decoupled from the code (via <code>modules.js</code>), allowing non-technical staff to easily update training materials without modifying the source code.
            </li>
            <li>
              <strong>State Persistence:</strong> 
              Utilizes browser <code>LocalStorage</code> to save user progress automatically, ensuring data continuity without requiring a backend server.
            </li>
            <li>
              <strong>Real-time Monitoring:</strong> 
              The Dashboard calculates and visualizes Key Performance Indicators (KPIs) instantly based on user interactions.
            </li>
          </ul>

          <h4 class="font-bold text-slate-800 mb-2">Future Scalability</h4>
          <p class="text-slate-600 bg-slate-50 p-4 rounded-lg border border-slate-200 text-sm leading-relaxed">
            Currently, the system operates client-side. The next development phase involves integrating <strong>REST APIs</strong> to replace the static data file with a cloud database (e.g., Firebase or SQL). This would enable multi-user authentication, role-based access control, and centralized reporting for project managers.
          </p>
        </div>
      </div>
    `});
