# Pro Portfolio - Gemini CLI Edition

A high-performance, motion-driven developer portfolio built with Next.js 16, React 19, and Framer Motion.

## 🚀 Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript

## ✨ Key Features
- **Modern UI:** Minimalist dark-themed design with a focus on typography and hierarchy.
- **Motion System:** Consistent animation language (fade + translate) with staggered entries.
- **Responsive:** Mobile-first design with desktop enhancements.
- **Interactive Work:** Project cards with hover reveals and interactive "Journey" timeline.
- **Utility Driven:** Clean architecture with shared animation tokens and utility helpers.

## 🛠 Setup & Development
1. Clone the repository.
2. Install dependencies: `npm install`
3. Run dev server: `npm run dev`
4. Build for production: `npm run build`

## 🎨 Animation Philosophy
- **Entry:** Subtle `y: 20` to `y: 0` translation with opacity fade.
- **Duration:** 0.5s for main transitions, 0.1s staggering for child elements.
- **Feedback:** Scale and lift effects only on interactive components.