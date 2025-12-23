(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const i=[{id:1,title:"Module 1: Digital Transformation in Industry",desc:"Understanding the basics of Industry 4.0 and UNIDO's role.",objectives:["Define Industry 4.0","Identify key technologies","UNIDO case studies"],tasks:[{id:"t1-1",text:"Read the Intro PDF"},{id:"t1-2",text:"Watch the case study video"},{id:"t1-3",text:"Complete the quiz"}],resources:[{label:"UNIDO Strategy PDF",link:"#"},{label:"Video Link",link:"#"}]},{id:2,title:"Module 2: Monitoring & Evaluation (M&E)",desc:"How to track project progress using KPIs.",objectives:["Understand KPIs","Data collection methods","Reporting standards"],tasks:[{id:"t2-1",text:"Review the KPI checklist"},{id:"t2-2",text:"Draft a sample report"}],resources:[{label:"M&E Guidelines",link:"#"}]},{id:3,title:"Module 3: Knowledge Management",desc:"Documentation best practices for sustainability.",objectives:["Documentation tools","Archiving","Sharing knowledge"],tasks:[{id:"t3-1",text:"Create a folder structure"},{id:"t3-2",text:"Write a handover note"}],resources:[{label:"SharePoint Guide",link:"#"}]}];function d(){const t=document.querySelector("#main-content");t&&(t.innerHTML=`
    <h2 class="text-2xl font-bold mb-4">Dashboard Overview</h2>
    <p class="mb-4 text-gray-600">Welcome back! Here is your learning progress at a glance.</p>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="p-6 bg-white shadow rounded-lg border border-gray-100">
        <h3 class="text-gray-500 text-sm uppercase tracking-wider">Total Progress</h3>
        <div class="flex items-end gap-2 mt-2">
          <span class="text-4xl font-bold text-blue-600">15%</span>
          <span class="text-sm text-green-500 mb-1">↑ 2% this week</span>
        </div>
      </div>
      <div class="p-6 bg-white shadow rounded-lg border border-gray-100">
        <h3 class="text-gray-500 text-sm uppercase tracking-wider">Modules Active</h3>
        <p class="text-4xl font-bold text-gray-800 mt-2">${i.length}</p>
      </div>
      <div class="p-6 bg-white shadow rounded-lg border border-gray-100">
        <h3 class="text-gray-500 text-sm uppercase tracking-wider">Tasks Completed</h3>
        <p class="text-4xl font-bold text-purple-600 mt-2">1/7</p>
      </div>
    </div>

    <div class="bg-white p-6 rounded-lg shadow border border-gray-100">
      <h3 class="font-bold text-gray-700 mb-4">Weekly Activity</h3>
      <div class="h-40 bg-gray-50 rounded flex items-center justify-center text-gray-400">
        [Chart Visualization Placeholder]
      </div>
    </div>
  `)}function l(){const t=document.querySelector("#main-content");if(!t)return;const n=i.map(a=>`
    <div class="mb-6 p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition">
      <div class="flex justify-between items-start mb-4">
        <div>
          <span class="text-xs font-bold text-blue-500 bg-blue-50 px-2 py-1 rounded">MODULE ${a.id}</span>
          <h3 class="text-xl font-bold text-gray-800 mt-2">${a.title}</h3>
        </div>
        <span class="text-xs text-gray-400">30 mins</span>
      </div>
      
      <div class="space-y-3">
        ${a.tasks.map(r=>`
          <div class="flex items-center p-2 hover:bg-gray-50 rounded group">
            <input type="checkbox" id="${r.id}" class="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer">
            <label for="${r.id}" class="ml-3 text-gray-600 cursor-pointer group-hover:text-blue-600 transition">${r.text}</label>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");t.innerHTML=`
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold">Training Modules</h2>
      <button class="text-sm text-blue-600 hover:underline">Download All PDF</button>
    </div>
    <div class="grid gap-4">
      ${n}
    </div>
  `}function c(){const t=document.querySelector("#main-content");t&&(t.innerHTML=`
    <h2 class="text-2xl font-bold mb-6">User Tracking & Analytics</h2>
    
    <div class="bg-white shadow overflow-hidden sm:rounded-lg border border-gray-200">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Login</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completion</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr>
            <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Intern Candidate</td>
            <td class="px-6 py-4 whitespace-nowrap"><span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span></td>
            <td class="px-6 py-4 whitespace-nowrap text-gray-500">Just now</td>
            <td class="px-6 py-4 whitespace-nowrap text-blue-600 font-bold">15%</td>
          </tr>
           <tr>
            <td class="px-6 py-4 whitespace-nowrap text-gray-500">Test User B</td>
            <td class="px-6 py-4 whitespace-nowrap"><span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span></td>
            <td class="px-6 py-4 whitespace-nowrap text-gray-500">2 days ago</td>
            <td class="px-6 py-4 whitespace-nowrap text-gray-500">0%</td>
          </tr>
        </tbody>
      </table>
    </div>
  `)}function u(){const t=document.querySelector("#main-content");t&&(t.innerHTML=`
    <h2 class="text-2xl font-bold mb-4">Documentation</h2>
    <div class="prose max-w-none bg-white p-8 rounded-lg shadow-sm border border-gray-200">
      <h3 class="text-lg font-bold text-gray-800">About this Prototype</h3>
      <p class="text-gray-600 mt-2">This Learning Management System (LMS) is designed for UNIDO's capacity building projects.</p>
      
      <h4 class="font-bold mt-6 mb-2">Key Features:</h4>
      <ul class="list-disc pl-5 text-gray-600 space-y-2">
        <li><strong>Data-Driven:</strong> Content is generated from a JSON file.</li>
        <li><strong>Responsive:</strong> Works on mobile and desktop (Tailwind CSS).</li>
        <li><strong>Offline-Ready:</strong> Uses local browser storage (simulated).</li>
      </ul>

      <div class="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500 text-blue-700">
        <strong>Note:</strong> This is a frontend-only demo. Data changes are saved to your browser's LocalStorage.
      </div>
    </div>
  `)}function p(){const t={"nav-overview":d,"nav-modules":l,"nav-tracking":c,"nav-docs":u};for(const[n,a]of Object.entries(t)){const r=document.getElementById(n);r&&r.addEventListener("click",e=>{e.preventDefault(),a(),document.querySelectorAll("nav a").forEach(s=>{s.classList.remove("bg-blue-600","text-white"),s.classList.add("text-slate-300")}),r.classList.remove("text-slate-300"),r.classList.add("bg-blue-600","text-white")})}}document.addEventListener("DOMContentLoaded",()=>{p(),d()});
