# Track Specification: Phase 1 - Visual Polish

## Overview
This track focuses on implementing high-impact, low-performance-cost visual enhancements to the portfolio's key interaction points. The goal is to immediately grab the user's attention and create a memorable "first impression" and "final impression" without compromising the 100 Lighthouse score.

## Features

### 1. Glitch/Typewriter Hero Intro
- **Concept:** Replace the static "I am Rehan" text with a dynamic entry animation.
- **Behavior:**
  - **Typewriter Effect:** Text types out character by character.
  - **Glitch Effect:** Random CSS clip-path distortions and RGB splits occur on the text during the typing phase and periodically afterwards.
  - **Fallback:** Must remain readable if JS fails (server-side rendered initial state).
- **Tech:** Framer Motion (orchestration) + Custom CSS/Tailwind utilities.

### 2. Interactive Rocket Contact Form
- **Concept:** Gamify the submission process of the contact form.
- **Behavior:**
  - **Submit Action:** On click, the button transforms into a rocket.
  - **Animation:** Rocket launches upwards off the screen.
  - **Feedback:** `canvas-confetti` explosion occurs upon successful "launch".
  - **Reset:** Button returns to state after a delay or success message.
- **Tech:** Framer Motion + `canvas-confetti` + Lucide React icons.

### 3. Cursor Stardust Trail
- **Concept:** A subtle particle trail that follows the user's mouse, reinforcing the "Space/Cosmic" theme.
- **Behavior:**
  - **Trail:** Small glowing particles spawn at cursor position and fade out over time.
  - **Physics:** slight drift/velocity based on mouse speed.
  - **Performance:** Use a React Portal or efficient Canvas overlay to avoid re-rendering the whole page.
  - **Mobile:** Disabled on touch devices to prevent clutter.
- **Tech:** Custom React Hook + Framer Motion (or lightweight Canvas).

## Design Guidelines
- **Theme:** Cyber-Minimalist (Neon accents on deep black).
- **Performance:** No main-thread blocking. Animations should use `transform` and `opacity` only.
- **Accessibility:** Respect `prefers-reduced-motion`. Glitch effects must be disabled or significantly toned down for users with this setting.

## Dependencies
- `canvas-confetti` (for the rocket launch celebration)
- `framer-motion` (already installed)
- `lucide-react` (already installed)
