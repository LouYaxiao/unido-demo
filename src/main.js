import './style.css'
import { courses } from './data/modules.js'

// --- 核心逻辑：渲染不同页面 ---

// 1. 渲染仪表盘 (Overview)
function renderDashboard() {
  const mainContent = document.querySelector('#main-content');
  if (!mainContent) return;

  mainContent.innerHTML = `
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
        <p class="text-4xl font-bold text-gray-800 mt-2">${courses.length}</p>
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
  `;
}

// 2. 渲染课程列表 (Modules)
function renderModules() {
  const mainContent = document.querySelector('#main-content');
  if (!mainContent) return;

  const modulesHtml = courses.map(course => `
    <div class="mb-6 p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition">
      <div class="flex justify-between items-start mb-4">
        <div>
          <span class="text-xs font-bold text-blue-500 bg-blue-50 px-2 py-1 rounded">MODULE ${course.id}</span>
          <h3 class="text-xl font-bold text-gray-800 mt-2">${course.title}</h3>
        </div>
        <span class="text-xs text-gray-400">30 mins</span>
      </div>
      
      <div class="space-y-3">
        ${course.tasks.map(task => `
          <div class="flex items-center p-2 hover:bg-gray-50 rounded group">
            <input type="checkbox" id="${task.id}" class="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer">
            <label for="${task.id}" class="ml-3 text-gray-600 cursor-pointer group-hover:text-blue-600 transition">${task.text}</label>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  mainContent.innerHTML = `
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold">Training Modules</h2>
      <button class="text-sm text-blue-600 hover:underline">Download All PDF</button>
    </div>
    <div class="grid gap-4">
      ${modulesHtml}
    </div>
  `;
}

// 3. 渲染追踪页面 (Tracking) - 新增！
function renderTracking() {
  const mainContent = document.querySelector('#main-content');
  if (!mainContent) return;

  mainContent.innerHTML = `
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
  `;
}

// 4. 渲染文档页面 (Documentation) - 新增！
function renderDocs() {
  const mainContent = document.querySelector('#main-content');
  if (!mainContent) return;

  mainContent.innerHTML = `
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
  `;
}

// --- 导航事件监听 ---
function setupNavigation() {
  const navMap = {
    'nav-overview': renderDashboard,
    'nav-modules': renderModules,
    'nav-tracking': renderTracking,
    'nav-docs': renderDocs
  };

  for (const [id, renderFunction] of Object.entries(navMap)) {
    const link = document.getElementById(id);
    if (link) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        renderFunction(); // 切换内容
        
        // 可选：更新侧边栏的高亮状态
        document.querySelectorAll('nav a').forEach(el => {
          el.classList.remove('bg-blue-600', 'text-white');
          el.classList.add('text-slate-300');
        });
        link.classList.remove('text-slate-300');
        link.classList.add('bg-blue-600', 'text-white');
      });
    }
  }
}

// --- 初始化 ---
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  renderDashboard(); // 默认显示仪表盘
});