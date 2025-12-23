(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d=[{id:1,title:"Module 1: Digital Transformation in Industry",desc:"Understanding the basics of Industry 4.0 and UNIDO's role.",objectives:["Define Industry 4.0","Identify key technologies","UNIDO case studies"],tasks:[{id:"t1-1",text:"Read the Intro PDF"},{id:"t1-2",text:"Watch the case study video"},{id:"t1-3",text:"Complete the quiz"}],resources:[{label:"UNIDO Strategy PDF",link:"#"},{label:"Video Link",link:"#"}]},{id:2,title:"Module 2: Monitoring & Evaluation (M&E)",desc:"How to track project progress using KPIs.",objectives:["Understand KPIs","Data collection methods","Reporting standards"],tasks:[{id:"t2-1",text:"Review the KPI checklist"},{id:"t2-2",text:"Draft a sample report"}],resources:[{label:"M&E Guidelines",link:"#"}]},{id:3,title:"Module 3: Knowledge Management",desc:"Documentation best practices for sustainability.",objectives:["Documentation tools","Archiving","Sharing knowledge"],tasks:[{id:"t3-1",text:"Create a folder structure"},{id:"t3-2",text:"Write a handover note"}],resources:[{label:"SharePoint Guide",link:"#"}]}];document.querySelector("#app")||document.body;function l(){const o=document.querySelector("#main-content");o&&(o.innerHTML=`
    <h2 class="text-2xl font-bold mb-4">Dashboard Overview</h2>
    <p class="mb-4">Welcome back, here is your learning progress.</p>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div class="p-4 bg-white shadow rounded-lg border border-gray-200">
        <h3 class="text-gray-500 text-sm">Total Progress</h3>
        <p class="text-3xl font-bold text-blue-600">0%</p>
      </div>
      <div class="p-4 bg-white shadow rounded-lg border border-gray-200">
        <h3 class="text-gray-500 text-sm">Modules Active</h3>
        <p class="text-3xl font-bold text-green-600">${d.length}</p>
      </div>
      <div class="p-4 bg-white shadow rounded-lg border border-gray-200">
        <h3 class="text-gray-500 text-sm">Tasks Completed</h3>
        <p class="text-3xl font-bold text-purple-600">0/7</p>
      </div>
    </div>
  `)}function a(){const o=document.querySelector("#main-content");if(!o)return;const s=d.map(r=>`
    <div class="mb-6 p-6 bg-white rounded-lg shadow-md border-l-4 border-blue-500">
      <h3 class="text-xl font-bold mb-2">${r.title}</h3>
      <div class="space-y-2">
        ${r.tasks.map(i=>`
          <div class="flex items-center">
            <input type="checkbox" id="${i.id}" class="w-5 h-5 text-blue-600 rounded mr-3">
            <label for="${i.id}" class="text-gray-700">${i.text}</label>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");o.innerHTML=`
    <h2 class="text-2xl font-bold mb-6">Training Modules</h2>
    <div class="grid gap-4">
      ${s}
    </div>
  `}function c(){const o=document.getElementById("nav-overview");o&&o.addEventListener("click",r=>{r.preventDefault(),l()});const s=document.getElementById("nav-modules");s&&s.addEventListener("click",r=>{r.preventDefault(),console.log("Modules clicked!"),a()})}document.addEventListener("DOMContentLoaded",()=>{c(),l()});
