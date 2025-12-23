import './style.css'
import { courses } from './data/modules.js'

// DOM 元素
const contentArea = document.querySelector('#content-area');
const pageTitle = document.querySelector('#page-title');

// ==========================================
// 核心逻辑 A: 进度存取
// ==========================================

function getProgress() {
  const saved = localStorage.getItem('unido_lms_progress');
  return saved ? JSON.parse(saved) : {};
}

function saveProgress(taskId, isChecked) {
  const currentProgress = getProgress();
  if (isChecked) {
    currentProgress[taskId] = true;
  } else {
    delete currentProgress[taskId];
  }
  localStorage.setItem('unido_lms_progress', JSON.stringify(currentProgress));
  console.log(`[System] Progress Saved: ${taskId} = ${isChecked}`); // 调试日志
}

function getStats() {
  const progress = getProgress();
  const completedCount = Object.keys(progress).length;
  const totalTasks = courses.reduce((acc, course) => acc + course.tasks.length, 0);
  const percentage = totalTasks === 0 ? 0 : Math.round((completedCount / totalTasks) * 100);
  return { completedCount, totalTasks, percentage };
}

// ==========================================
// 核心功能 B: 渲染视图
// ==========================================

function renderOverview() {
  const { completedCount, totalTasks, percentage } = getStats();
  
  pageTitle.innerText = "Dashboard Overview";
  
  contentArea.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div class="text-slate-400 text-sm font-medium uppercase mb-2">Total Progress</div>
          <div class="text-4xl font-bold text-blue-600">${percentage}%</div>
          <div class="w-full bg-gray-100 rounded-full h-3 mt-4 overflow-hidden">
            <div class="bg-blue-600 h-full rounded-full transition-all duration-1000 ease-out" style="width: ${percentage}%"></div>
          </div>
        </div>
        
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div class="text-slate-400 text-sm font-medium uppercase mb-2">Modules Active</div>
          <div class="text-4xl font-bold text-slate-800">${courses.length}</div>
        </div>
        
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div class="text-slate-400 text-sm font-medium uppercase mb-2">Tasks Completed</div>
          <div class="text-4xl font-bold text-emerald-600">${completedCount}<span class="text-xl text-slate-400">/${totalTasks}</span></div>
        </div>
    </div>
  `;
  updateActiveNav('nav-overview');
}

function renderModules() {
  pageTitle.innerText = "Learning Modules";
  const savedProgress = getProgress(); 
  
  // 1. 生成 HTML
  const modulesHTML = courses.map(module => `
    <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all mb-6">
      <div class="flex justify-between items-start mb-4">
        <div>
          <span class="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded uppercase tracking-wide">Module ${module.id}</span>
          <h3 class="text-xl font-bold text-slate-800 mt-2">${module.title}</h3>
        </div>
      </div>
      
      <div class="bg-slate-50 rounded-xl p-4 mt-4">
        <h4 class="text-sm font-bold text-slate-700 mb-3 uppercase text-xs">Module Tasks:</h4>
        <div class="space-y-3">
          ${module.tasks.map(task => {
            const isChecked = savedProgress[task.id] ? 'checked' : '';
            return `
            <label class="flex items-center space-x-3 cursor-pointer group select-none">
              <input type="checkbox" 
                     class="task-checkbox w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 transition cursor-pointer" 
                     data-id="${task.id}" 
                     ${isChecked}>
              <span class="text-slate-700 text-sm group-hover:text-blue-700 transition-colors">${task.text}</span>
            </label>
            `
          }).join('')}
        </div>
      </div>
    </div>
  `).join('');

  // 2. 注入页面
  contentArea.innerHTML = `<div class="max-w-4xl">${modulesHTML}</div>`;
  updateActiveNav('nav-modules');

  // 3. 绑定事件 (调试修复版)
  const checkboxes = document.querySelectorAll('.task-checkbox');
  console.log(`[System] Found ${checkboxes.length} checkboxes on this page.`);

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      const taskId = e.target.getAttribute('data-id');
      const isChecked = e.target.checked;
      
      console.log(`[User Action] Checkbox clicked: ID=${taskId}, Status=${isChecked}`);
      saveProgress(taskId, isChecked);
    });
  });
}

// 辅助函数：更新导航高亮
function updateActiveNav(activeId) {
  document.querySelectorAll('nav a').forEach(el => {
    el.classList.remove('bg-blue-600', 'text-white');
    el.classList.add('text-slate-300', 'hover:bg-slate-800');
  });
  const activeBtn = document.getElementById(activeId);
  if (activeBtn) {
    activeBtn.classList.remove('text-slate-300', 'hover:bg-slate-800');
    activeBtn.classList.add('bg-blue-600', 'text-white');
  }
}

// ==========================================
// 初始化与事件监听
// ==========================================

document.getElementById('nav-docs').addEventListener('click', (e) => {
    e.preventDefault();
    updateActiveNav('nav-docs');
    pageTitle.innerText = "System Documentation";
    
    contentArea.innerHTML = `
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
    `;
});