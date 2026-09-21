<div align="center">

<!-- Animated Header Wave Banner -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:022c22,50:059669,100:0284c7&height=220&section=header&text=Quantum%20Wellness%20🌿&fontSize=38&fontColor=ffffff&animation=fadeIn&fontAlignY=36&desc=AI%20Meets%20Ayurveda%20%26%20Energy%20Diagnostics%20%7C%20Health--Tech%20SPA&descAlignY=58&descSize=17" alt="Quantum Wellness Banner" width="100%"/>

<!-- Animated Typing Subtitle -->
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&duration=3000&pause=800&color=10B981&center=true&vCenter=true&width=1000&height=50&lines=Non-Invasive+Wellness+Assessment+%26+Bio-Energy+Diagnostics;Bridging+AI-Driven+Analytics+with+Traditional+Ayurvedic+Wisdom;Single+Page+Application+(SPA)+with+Hash+Router+%26+Chart.js+Analytics;Live+on+Vercel%3A+Interactive+Health+Dashboards+%26+Booking+%F0%9F%9A%80" alt="Quantum Wellness Typing SVG" />

<br>

<p align="center">
  <a href="https://design-thinking-project-kappa.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/Live_Demo-Vercel_Deployed-10B981?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo"/>
  </a>
  <img src="https://img.shields.io/badge/Frontend-HTML5_%26_CSS3-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/Logic-JavaScript_ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/Visualizations-Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white" alt="Chart.js"/>
  <img src="https://img.shields.io/badge/UI_Style-Glassmorphism-0284C7?style=for-the-badge" alt="Glassmorphism"/>
</p>

<!-- Live Operational Indicators -->
<p align="center">
  <img src="https://img.shields.io/badge/Design_Framework-5_Stage_Design_Thinking-8B5CF6?style=flat-square&logo=figma&logoColor=white"/>
  <img src="https://img.shields.io/badge/Navigation-Client_SPA_Hash_Router-0284C7?style=flat-square"/>
  <img src="https://img.shields.io/badge/Interactive_Widgets-Assessment_Quiz_%26_Booking-10B981?style=flat-square"/>
  <img src="https://img.shields.io/badge/Device_Support-Fully_Responsive-F59E0B?style=flat-square"/>
</p>

<p align="center">
  <b>A human-centered health-tech Single Page Application (SPA) integrating non-invasive bio-energy diagnostics, Ayurvedic principles, and modern data visualization to provide holistic wellness assessments.</b>
</p>

</div>

---

### 🌐 Live Application Demo

🔗 **Explore the Live App on Vercel:** **[https://design-thinking-project-kappa.vercel.app](https://design-thinking-project-kappa.vercel.app)**

---

### ⚡ Interactive Diagnostic & Wellness Assessment Simulation

<div align="center">

<!-- Animated Interactive Assessment Terminal -->
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=15&duration=4200&pause=1200&color=38BDF8&background=0D1117&center=false&vCenter=true&width=860&height=125&lines=%24+start-assessment+--mode+ayurveda-ai;%F0%9F%A7%A0+Evaluating+Biometrics%3A+Vata+%2F+Pitta+%2F+Kapha+Energy+Balance...;%F0%9F%93%8A+Chart.js+Radar+Rendered%3A+Vitality%3A+88%25+%7C+Stress+Index%3A+Low+%7C+Digestion%3A+Optimal;%E2%9C%85+Personalized+Holistic+Wellness+Blueprint+Generated+for+Client!" alt="Wellness Terminal Simulation"/>

</div>

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Design Thinking Framework](#-design-thinking-framework)
- [System Architecture & Router](#-system-architecture--router)
- [Key Features](#-key-features)
- [Interactive Analytics & Visualizations](#-interactive-analytics--visualizations)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Author & Connect](#-author--connect)

---

## 💡 Overview

Modern healthcare frequently isolates physical symptoms without addressing mental vitality, stress levels, or systemic balance. Patients often find diagnostic clinics intimidating, sterile, and reactive rather than preventative.

**Quantum Wellness** is a design-thinking driven wellness platform created to transform holistic health discovery:
- **Non-Invasive Diagnostic Philosophy:** Combines energy diagnostics, acupressure, and Ayurvedic body-typing (Doshas) with modern analytical assessments.
- **Glassmorphic Aesthetic:** Employs calming, nature-inspired emerald and cyan translucent glassmorphic components to reduce patient anxiety.
- **Instant Interactive Visualization:** Uses **Chart.js** to transform subjective health answers into clear, actionable radar and bar charts.
- **Frictionless Single Page Experience:** Pure JavaScript hash-based routing ensures zero-page-reload transitions between assessment, booking, and health dashboards.

---

## 🎨 Design Thinking Framework

This project was built following the formal **5-Stage Design Thinking Methodology**:

```
[1. Empathize] ──► [2. Define] ──► [3. Ideate] ──► [4. Prototype] ──► [5. Test & Deploy]
```

1. **Empathize:** Conducted user interviews with health-conscious individuals who felt overwhelmed by complex medical jargon and sought natural, non-invasive wellness guidance.
2. **Define:** Formulated the core problem statement: *“How might we provide individuals with an accessible, calming, and visually intuitive platform to understand their holistic health metrics without invasive procedures?”*
3. **Ideate:** Brainstormed combining ancient Ayurvedic energy frameworks with modern biometric visualizations and self-guided health questionnaires.
4. **Prototype:** Built an interactive, high-fidelity responsive Single Page Application with dynamic Chart.js diagnostics and appointment booking wizards.
5. **Test & Deploy:** Validated layout readability, mobile touch interactions, and deployed globally to **Vercel** with instant worldwide availability.

---

## 🏛 System Architecture & Router

The application operates as a pure client-side Single Page Application (SPA) driven by an active hash change listener:

```mermaid
flowchart TD
    User(["Client Browser"])
    
    subgraph SPA ["Client-Side SPA Architecture"]
        Hash["URL Hash Listener\n(window.onhashchange)"]
        Router["Route Dispatcher\n(routes: home, about, services, assessment, dashboard, appointment, profile, blog)"]
        Nav["Glassmorphic Navbar Controller\n(.scrolled & .active states)"]
        
        Hash --> Router
        Router --> Nav
    end

    subgraph DynamicPages ["DOM Section Renderer"]
        Home["#home (Hero + Stat Counters)"]
        Assess["#assessment (Health Quiz Wizard)"]
        Dash["#dashboard (Chart.js Radar & Bar Graphs)"]
        Appt["#appointment (Booking Confirmation)"]
    end

    subgraph CDN ["External Assets"]
        CJS["Chart.js Analytics Library"]
        FA["FontAwesome Icons"]
        GF["Google Fonts (Inter & Poppins)"]
    end

    User -->|Navigate / Click| Hash
    Router --> Home & Assess & Dash & Appt
    Dash --> CJS
    Nav --> FA
    Home --> GF
```

---

## ✨ Key Features

| Feature | Details |
| :--- | :--- |
| 🌿 **Holistic Wellness Assessment** | Interactive health quiz categorizing user lifestyle, stress indices, and Ayurvedic energy balance. |
| 📊 **Dynamic Chart.js Dashboards** | Interactive health radar and trend charts visualizing sleep quality, vitality scores, and balance metrics. |
| ⚡ **Hash-Based SPA Routing** | Instant navigation without server round-trips across 8 distinct sections (`home`, `about`, `services`, `assessment`, `dashboard`, `appointment`, `profile`, `blog`). |
| 🔮 **Glassmorphic Modern UI** | Translucent frosted-glass cards, smooth blur effects, subtle drop shadows, and responsive layout grids. |
| 📅 **Appointment Scheduling** | Integrated appointment booking interface enabling users to schedule in-person wellness consultations. |
| 📱 **Mobile-First Responsive** | Optimized for seamless viewing on smartphones, tablets, and wide-screen desktops. |
| 🚀 **Vercel Edge Deployment** | Globally cached on Vercel's Edge Network for instant sub-second load times. |

---

## 📊 Interactive Analytics & Visualizations

The platform features built-in **Chart.js** diagnostic integrations inside the user dashboard:

- **Vitality Radar Chart:** Plots 6 dimensions of health (Energy, Sleep, Digestion, Immunity, Mental Calm, and Physical Balance).
- **Stress & Recovery Trends:** Multi-axis line chart tracking daily recovery rhythms.
- **Live Counter Animations:** Counters smoothly animate upward when scrolling into the statistics view.

---

## 📂 Project Structure

```
design-thinking-project/
├── index.html          # Core SPA markup containing all 8 page sections
├── style.css           # Glassmorphism, animations, responsive design tokens
├── app.js              # Routing engine, Chart.js initializer, scroll effects
└── README.md           # Project documentation
```

---

## 🚀 Getting Started

### 1. View Online
Simply visit the production deployment:  
👉 **[https://design-thinking-project-kappa.vercel.app](https://design-thinking-project-kappa.vercel.app)**

### 2. Run Locally

No build tools or compilers required!

```bash
# Clone the repository
git clone https://github.com/anish03-hub/design-thinking-project.git
cd design-thinking-project

# Option A: Open directly in your browser
open index.html

# Option B: Run with a local development server
npx serve .
```

---

<div align="center">

## 👨‍💻 Author & Connect

**Anish Kumar Sah**  
*Java Developer | Spring Boot & REST APIs | B.Tech CSE @ Symbiosis Institute of Technology, Pune*

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Anish%20Kumar%20Sah-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/anishsah)
[![Email](https://img.shields.io/badge/Email-sah42515%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:sah42515@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-anish03--hub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/anish03-hub)

<br>

<!-- Animated Waving Footer Banner -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0284c7,50:059669,100:022c22&height=110&section=footer" alt="Footer Banner" width="100%"/>

<sub>Built with ❤️ using HTML5, CSS3 Glassmorphism, JavaScript, and Chart.js. Applying Design Thinking to healthcare technology.</sub>

</div>
