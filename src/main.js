import './style.css'
import { courses } from './data/modules.js'

// 1. 获取页面上的关键元素
const app = document.querySelector('#app') || document.body; // 防御性写法
// 注意：这里假设你的 HTML 里有一个 id="content-area" 或者类似的容器用来放变动的内容
// 如果没有，我们可能需要直接操作 DOM。为了保险，我们假设你有一个 id="main-content" 的 div。

// --- 核心逻辑：渲染不同页面 ---

// A. 渲染仪表盘 (Overview)
function renderDashboard() {
  const mainContent = document.querySelector('#main-content');
  if (!mainContent) return;

  mainContent.innerHTML = `
    <h2 class="text-2xl font-bold mb-4">Dashboard Overview</h2>
    <p class="mb-4">Welcome back, here is your learning progress.</p>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div class="p-4 bg-white shadow rounded-lg border border-gray-200">
        <h3 class="text-gray-500 text-sm">Total Progress</h3>
        <p class="text-3xl font-bold text-blue-600">0%</p>
      </div>
      <div class="p-4 bg-white shadow rounded-lg border border-gray-200">
        <h3 class="text-gray-500 text-sm">Modules Active</h3>
        <p class="text-3xl font-bold text-green-600">${courses.length}</p>
      </div>
      <div class="p-4 bg-white shadow rounded-lg border border-gray-200">
        <h3 class="text-gray-500 text-sm">Tasks Completed</h3>
        <p class="text-3xl font-bold text-purple-600">0/7</p>
      </div>
    </div>
  `;
}

// B. 渲染课程列表 (Modules)
function renderModules() {
  const mainContent = document.querySelector('#main-content');
  if (!mainContent) return;

  // 生成 HTML 字符串
  const modulesHtml = courses.map(course => `
    <div class="mb-6 p-6 bg-white rounded-lg shadow-md border-l-4 border-blue-500">
      <h3 class="text-xl font-bold mb-2">${course.title}</h3>
      <div class="space-y-2">
        ${course.tasks.map(task => `
          <div class="flex items-center">
            <input type="checkbox" id="${task.id}" class="w-5 h-5 text-blue-600 rounded mr-3">
            <label for="${task.id}" class="text-gray-700">${task.text}</label>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  mainContent.innerHTML = `
    <h2 class="text-2xl font-bold mb-6">Training Modules</h2>
    <div class="grid gap-4">
      ${modulesHtml}
    </div>
  `;
  
  // 重要：重新绑定复选框事件（因为 HTML 是重写的）
  // 这里可以加 saveProgress 逻辑
}

// --- 导航事件监听 ---
function setupNavigation() {
  // 1. Overview 按钮
  const navOverview = document.getElementById('nav-overview');
  if (navOverview) {
    navOverview.addEventListener('click', (e) => {
      e.preventDefault(); // 阻止链接跳转
      renderDashboard();
    });
  }

  // 2. Modules 按钮
  const navModules = document.getElementById('nav-modules');
  if (navModules) {
    navModules.addEventListener('click', (e) => {
      e.preventDefault();
      console.log("Modules clicked!"); // 调试用
      renderModules();
    });
  }
}

// --- 初始化 ---
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  renderDashboard(); // 默认显示仪表盘
});