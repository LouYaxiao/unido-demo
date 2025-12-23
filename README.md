 🌍 UNIDO Internship Prototype: LMS & Monitoring Tool

![Status](https://img.shields.io/badge/Status-Prototype%20Live-success)
![Tech](https://img.shields.io/badge/Built%20With-Vite%20%7C%20Tailwind%20%7C%20VanillaJS-blue)

> Live Demo: [👉 Click here to view the Application](https://github.com/LouYaxiao/unido-demo)

 📋 Project Overview (项目背景)
This prototype was developed to demonstrate technical proficiency for the UNIDO Internship application. 

It simulates a Capacity Building Platform (Learning Management System) designed to support project implementation and monitoring. The goal was to build a lightweight, responsive, and data-driven application that requires zero backend infrastructure, making it easy to deploy and maintain in resource-constrained environments.

 ✨ Key Features (核心功能)

 📊 Real-time Monitoring (Dashboard): Instantly visualizes user progress and KPIs. The dashboard updates dynamically based on user interactions without page reloads.
 🧩 Modular Architecture: Content is separated from code (`data-driven`), allowing non-technical staff to update training modules by simply editing a JSON file.
 💾 Local Persistence: Uses browser `LocalStorage` to save user progress (checkboxes). This simulates a database connection, allowing data continuity even if the user refreshes the page or loses internet connectivity.
 📱 Fully Responsive: Built with Tailwind CSS, ensuring the interface is accessible on desktops, tablets, and mobile devices used in the field.

 🛠️ Technical Stack (技术栈)

 Core: HTML5, Vanilla JavaScript (ES6+)
 Styling: Tailwind CSS (Utility-first framework)
 Build Tool: Vite (Next-generation frontend tooling)
 Deployment: GitHub Actions / GitHub Pages

 🚀 How to Run Locally (本地运行指南)

If you wish to examine the source code or extend the features:

1.  Clone the repository:
    ```bash
    git clone [https://github.com/你的用户名/你的仓库名.git](https://github.com/你的用户名/你的仓库名.git)
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```

 📈 Future Scalability (扩展计划)
Currently, this is a client-side prototype. To scale this for UNIDO's enterprise use, the next steps would be:
1.  API Integration: Replace the static `modules.js` with RESTful API calls to a cloud database.
2.  Authentication: Add secure login for multi-user tracking.
3.  Analytics Export: Allow exporting completion data to CSV/PDF for reporting.

