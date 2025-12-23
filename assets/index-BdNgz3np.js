(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const i=[{id:1,title:"Module 1: Digital Transformation in Industry",desc:"Understanding the basics of Industry 4.0 and UNIDO's role.",objectives:["Define Industry 4.0","Identify key technologies","UNIDO case studies"],tasks:[{id:"t1-1",text:"Read the Intro PDF"},{id:"t1-2",text:"Watch the case study video"},{id:"t1-3",text:"Complete the quiz"}],resources:[{label:"UNIDO Strategy PDF",link:"#"},{label:"Video Link",link:"#"}]},{id:2,title:"Module 2: Monitoring & Evaluation (M&E)",desc:"How to track project progress using KPIs.",objectives:["Understand KPIs","Data collection methods","Reporting standards"],tasks:[{id:"t2-1",text:"Review the KPI checklist"},{id:"t2-2",text:"Draft a sample report"}],resources:[{label:"M&E Guidelines",link:"#"}]},{id:3,title:"Module 3: Knowledge Management",desc:"Documentation best practices for sustainability.",objectives:["Documentation tools","Archiving","Sharing knowledge"],tasks:[{id:"t3-1",text:"Create a folder structure"},{id:"t3-2",text:"Write a handover note"}],resources:[{label:"SharePoint Guide",link:"#"}]}],c="unido_lms_progress";function d(){const t=localStorage.getItem(c);return t?JSON.parse(t):{}}function g(t,s){const o=d();s?o[t]=!0:delete o[t],localStorage.setItem(c,JSON.stringify(o))}function l(){const t=d(),s=i.reduce((e,r)=>e+r.tasks.length,0),o=Object.keys(t).length,n=s===0?0:Math.round(o/s*100);return{totalTasks:s,completedTasks:o,percentage:n}}function u(){const t=document.querySelector("#main-content");if(!t)return;const s=l();t.innerHTML=`
    <h2 class="text-2xl font-bold mb-4">Dashboard Overview</h2>
    <p class="mb-4 text-gray-600">Welcome back! Real-time tracking of your progress.</p>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="p-6 bg-white shadow rounded-lg border border-gray-100">
        <h3 class="text-gray-500 text-sm uppercase tracking-wider">Total Progress</h3>
        <div class="flex items-end gap-2 mt-2">
          <span class="text-4xl font-bold text-blue-600">${s.percentage}%</span>
          <span class="text-sm text-green-500 mb-1">
            ${s.percentage>0?"In Progress":"Not Started"}
          </span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2.5 mt-4">
          <div class="bg-blue-600 h-2.5 rounded-full" style="width: ${s.percentage}%"></div>
        </div>
      </div>

      <div class="p-6 bg-white shadow rounded-lg border border-gray-100">
        <h3 class="text-gray-500 text-sm uppercase tracking-wider">Modules Active</h3>
        <p class="text-4xl font-bold text-gray-800 mt-2">${i.length}</p>
      </div>

      <div class="p-6 bg-white shadow rounded-lg border border-gray-100">
        <h3 class="text-gray-500 text-sm uppercase tracking-wider">Tasks Completed</h3>
        <p class="text-4xl font-bold text-purple-600 mt-2">${s.completedTasks} <span class="text-lg text-gray-400">/ ${s.totalTasks}</span></p>
      </div>
    </div>
  `}function p(){const t=document.querySelector("#main-content");if(!t)return;const s=d(),o=i.map(n=>`
    <div class="mb-6 p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition">
      <div class="flex justify-between items-start mb-4">
        <div>
          <span class="text-xs font-bold text-blue-500 bg-blue-50 px-2 py-1 rounded">MODULE ${n.id}</span>
          <h3 class="text-xl font-bold text-gray-800 mt-2">${n.title}</h3>
        </div>
      </div>
      
      <div class="space-y-3">
        ${n.tasks.map(e=>{const r=s[e.id]?"checked":"";return`
            <div class="flex items-center p-2 hover:bg-gray-50 rounded group">
              <input type="checkbox" id="${e.id}" data-task-id="${e.id}" ${r} 
                class="task-checkbox w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer">
              <label for="${e.id}" class="ml-3 text-gray-600 cursor-pointer group-hover:text-blue-600 transition">${e.text}</label>
            </div>
          `}).join("")}
      </div>
    </div>
  `).join("");t.innerHTML=`
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold">Training Modules</h2>
    </div>
    <div class="grid gap-4">
      ${o}
    </div>
  `,document.querySelectorAll(".task-checkbox").forEach(n=>{n.addEventListener("change",e=>{const r=e.target.getAttribute("data-task-id"),a=e.target.checked;g(r,a),console.log(`Task ${r} is now ${a?"DONE":"TODO"}`)})})}function m(){const t=document.querySelector("#main-content");if(!t)return;const s=l();t.innerHTML=`
    <h2 class="text-2xl font-bold mb-6">User Tracking & Analytics</h2>
    
    <div class="bg-white shadow overflow-hidden sm:rounded-lg border border-gray-200">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completion</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr>
            <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Intern Candidate</td>
            <td class="px-6 py-4 whitespace-nowrap"><span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Online</span></td>
            <td class="px-6 py-4 whitespace-nowrap text-blue-600 font-bold">${s.percentage}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  `}function b(){const t=document.querySelector("#main-content");t&&(t.innerHTML=`
    <h2 class="text-2xl font-bold mb-4">Documentation</h2>
    <div class="prose max-w-none bg-white p-8 rounded-lg shadow-sm border border-gray-200">
      <p class="text-gray-600">Documentation content...</p>
    </div>
  `)}function h(){const t={"nav-overview":u,"nav-modules":p,"nav-tracking":m,"nav-docs":b};for(const[s,o]of Object.entries(t)){const n=document.getElementById(s);n&&n.addEventListener("click",e=>{e.preventDefault(),o(),document.querySelectorAll("nav a").forEach(r=>{r.classList.remove("bg-blue-600","text-white"),r.classList.add("text-slate-300")}),n.classList.remove("text-slate-300"),n.classList.add("bg-blue-600","text-white")})}}document.addEventListener("DOMContentLoaded",()=>{h(),u()});
