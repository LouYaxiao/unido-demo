import './style.css'
import { courses } from './data/modules.js'

// --- 核心工具：本地存储管理 (Mini Database) ---
const STORAGE_KEY = 'unido_lms_progress';

// 读取进度
function getProgress() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : {};
}

// 保存进度
function saveProgress(taskId, isChecked) {
  const progress = getProgress();
  if (isChecked) {
    progress[taskId] = true; // 标记为完成
  } else {
    delete progress[taskId]; // 移除标记
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

// 计算统计数据
function calculateStats() {
  const progress = getProgress();
  // 1. 计算总任务数 (遍历所有课程的所有任务)
  const totalTasks = courses.reduce((acc, course) => acc + course.tasks.length, 0);
  // 2. 计算已完成任务数
  const completedTasks = Object.keys(progress).length;
  // 3. 计算百分比
  const percentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  return { totalTasks, completedTasks, percentage };
}


// --- 页面渲染逻辑 ---

// 1. 渲染仪表盘 (Overview)
function renderDashboard() {
  const mainContent = document.querySelector('#main-content');
  if (!mainContent) return;

  // 获取实时数据！
  const stats = calculateStats();

  mainContent.innerHTML = `
    <h2 class="text-2xl font-bold mb-4">Dashboard Overview</h2>
    <p class="mb-4 text-gray-600">Welcome back! Real-time tracking of your progress.</p>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="p-6 bg-white shadow rounded-lg border border-gray-100">
        <h3 class="text-gray-500 text-sm uppercase tracking-wider">Total Progress</h3>
        <div class="flex items-end gap-2 mt-2">
          <span class="text-4xl font-bold text-blue-600">${stats.percentage}%</span>
          <span class="text-sm text-green-500 mb-1">
            ${stats.percentage > 0 ? 'In Progress' : 'Not Started'}
          </span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2.5 mt-4">
          <div class="bg-blue-600 h-2.5 rounded-full" style="width: ${stats.percentage}%"></div>
        </div>
      </div>

      <div class="p-6 bg-white shadow rounded-lg border border-gray-100">
        <h3 class="text-gray-500 text-sm uppercase tracking-wider">Modules Active</h3>
        <p class="text-4xl font-bold text-gray-800 mt-2">${courses.length}</p>
      </div>

      <div class="p-6 bg-white shadow rounded-lg border border-gray-100">
        <h3 class="text-gray-500 text-sm uppercase tracking-wider">Tasks Completed</h3>
        <p class="text-4xl font-bold text-purple-600 mt-2">${stats.completedTasks} <span class="text-lg text-gray-400">/ ${stats.totalTasks}</span></p>
      </div>
    </div>
  `;
}

// 2. 渲染课程列表 (Modules)
function renderModules() {
  const mainContent = document.querySelector('#main-content');
  if (!mainContent) return;

  const progress = getProgress(); // 获取当前勾选状态

  const modulesHtml = courses.map(course => `
    <div class="mb-6 p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition">
      <div class="flex justify-between items-start mb-4">
        <div>
          <span class="text-xs font-bold text-blue-500 bg-blue-50 px-2 py-1 rounded">MODULE ${course.id}</span>
          <h3 class="text-xl font-bold text-gray-800 mt-2">${course.title}</h3>
        </div>
      </div>
      
      <div class="space-y-3">
        ${course.tasks.map(task => {
          // 检查这个任务之前是否被勾选过
          const isChecked = progress[task.id] ? 'checked' : '';
          return `
            <div class="flex items-center p-2 hover:bg-gray-50 rounded group">
              <input type="checkbox" id="${task.id}" data-task-id="${task.id}" ${isChecked} 
                class="task-checkbox w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer">
              <label for="${task.id}" class="ml-3 text-gray-600 cursor-pointer group-hover:text-blue-600 transition">${task.text}</label>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `).join('');

  mainContent.innerHTML = `
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold">Training Modules</h2>
    </div>
    <div class="grid gap-4">
      ${modulesHtml}
    </div>
  `;

  // --- 关键一步：绑定勾选事件 ---
  // 找到页面上所有的复选框
  document.querySelectorAll('.task-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      const taskId = e.target.getAttribute('data-task-id');
      const isChecked = e.target.checked;
      
      // 1. 保存到本地存储
      saveProgress(taskId, isChecked);
      
      // 2. (可选) 打印日志看看
      console.log(`Task ${taskId} is now ${isChecked ? 'DONE' : 'TODO'}`);
    });
  });
}

// 3. 渲染追踪页面 (Tracking) - 这里我们也让它读真实数据
function renderTracking() {
  const mainContent = document.querySelector('#main-content');
  if (!mainContent) return;

  const stats = calculateStats();

  mainContent.innerHTML = `
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
            <td class="px-6 py-4 whitespace-nowrap text-blue-600 font-bold">${stats.percentage}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

// 4. 渲染文档页面 (Documentation)
function renderDocs() {
  const mainContent = document.querySelector('#main-content');
  if (!mainContent) return;
  mainContent.innerHTML = `
    <h2 class="text-2xl font-bold mb-4">Documentation</h2>
    <div class="prose max-w-none bg-white p-8 rounded-lg shadow-sm border border-gray-200">
      <p class="text-gray-600">Documentation content...</p>
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
        renderFunction();
        // 更新高亮样式
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
  renderDashboard();
});