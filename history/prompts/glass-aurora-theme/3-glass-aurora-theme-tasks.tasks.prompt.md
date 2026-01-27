---
id: 3
title: glass-aurora-theme-tasks
stage: tasks
date: 2026-01-27
surface: agent
model: claude-sonnet-4-5-20250929
feature: glass-aurora-theme
branch: 005-glass-aurora-theme
user: Admin
command: /sp.tasks
labels: ["theme", "styling", "ui", "glass-morphism", "animation", "accessibility"]
links:
  spec: ../specs/005-glass-aurora-theme/spec.md
  plan: ../specs/005-glass-aurora-theme/plan.md
  tasks: ../specs/005-glass-aurora-theme/tasks.md
  ticket: null
  adr: null
  pr: null
files:
 - specs/005-glass-aurora-theme/tasks.md
 - specs/005-glass-aurora-theme/research.md
 - specs/005-glass-aurora-theme/data-model.md
 - specs/005-glass-aurora-theme/quickstart.md
tests:
 - specs/005-glass-aurora-theme/tasks.md (validation)
---

## Prompt

```
# Tasks

1) Locate Glass Aurora theme files + toggle
Find:
- Theme token definitions for glass-aurora (globals.css or theme file)
- Theme application method (data-theme/class)
- Components for buttons and common cards

Commands:
- rg -n "glass-aurora|aurora" src app styles
- rg -n "data-theme|ThemeProvider|setTheme|localStorage" src
- rg -n "button|Button|cta|Get Started|WhatsApp" src

Output:
- file paths + current token names + where button colors are set

---

### Task 02 — Define Blue button system (replace green only in Glass Aurora)
Goal:
- Make all primary CTAs blue in Glass Aurora without affecting other themes.

Steps:
1) Add/confirm tokens under Glass Aurora:
   - --accent (blue)
   - --accent-hover
   - --accent-active
   - --accent-foreground
   - --ring (blue glow)
2) Ensure "success green" tokens remain for status (if any), but CTAs use accent blue.
3) Update button variants so that when glass-aurora is active:
   - Primary buttons use accent tokens (blue)
   - Secondary buttons use glass outline style
4) Verify all "Get Started" / primary buttons are blue.

Acceptance:
- No green CTAs in Glass Aurora.
- Hover/active states feel premium and readable.

---

### Task 03 — Create "Deep Glass" styling recipe (reusable)
Create reusable class utilities (choose one approach):
A) Tailwind @layer components in globals.css
B) A small `cn()` class preset in a styles module

Define:
- `.glass-panel` (section container)
- `.glass-card` (cards)
- `.glass-pill` (inputs/pills)
- `.glass-button` (buttons)

Deep glass recipe requirements:
- Background: multi-layer translucency
  - base: rgba(255,255,255,0.06–0.12) on dark background
- Blur: backdrop-blur-md/lg (avoid extreme blur everywhere)
- Border: 1px faint, with gradient border option
- Inner highlight: subtle inset (like light on top edge)
- Shadow: soft drop shadow + optional inner shadow
- Optional noise (very subtle) via CSS gradient (no images)

Acceptance:
- Applying `.glass-card` to a card immediately looks "deep glass".

---

### Task 04 — Add specular highlight overlay (the "super glass" feel)
For glass cards and buttons, add a pseudo-element overlay:
- A diagonal translucent gradient that looks like light reflection
- Default: barely visible
- On hover: moves slightly (specular sweep)

Implementation:
- Use `::before` overlay with:
  - background: linear-gradient(...)
  - opacity low
  - transform translateX/rotate
- Animate on hover with transition

Acceptance:
- Hover shows a subtle premium sheen, not a bright stripe.

---

### Task 05 — Add shimmer/aurora micro-animations (tasteful)
Add optional motion patterns:
- Cards: slow float (translateY 2–4px) and/or background gradient drift
- Buttons: tiny glow pulse on hover/focus
- Nodes: gentle breathing (scale 1.00 → 1.03)

Rules:
- Use Framer Motion only if already used; otherwise CSS transitions.
- Must respect `prefers-reduced-motion`:
  - disable floating and sweeping animations
  - keep instant state changes only

Acceptance:
- Motion feels premium, not distracting.

---

### Task 06 — Apply recipe across key sections (no layout changes)
Target:
- Hero CTA buttons
- Services / Packages cards
- Testimonials cards
- AI Ecosystem / orbit nodes + center chip
- Learning Journey cards
- Footer email pill and social buttons

Replace ad-hoc styles with:
- glass-card / glass-pill / glass-button + tokenized colors

Acceptance:
- Entire site under Glass Aurora feels consistent.
- No section looks "flat" compared to others.

---

### Task 07 — Fix icon contrast + blue accent coherence
Under Glass Aurora:
- Set orbit/node icons to a bright high-contrast token (e.g., --node-text)
- Ensure node backgrounds are glass bubbles (not muddy gray)
- Add subtle icon drop-shadow if needed
- Ensure any accent rings use blue (not green)

Acceptance:
- Icons readable at a glance.
- No green accent leakage.

---

### Task 08 — QA + Regression checks
Run:
- npm run dev
- (optional) npm run build

Checklist (Glass Aurora):
- Buttons are blue everywhere CTAs appear
- Cards/pills have deep glass look + sheen on hover
- Aurora background subtle and premium
- Text readable, no contrast issues
- Animations smooth + reduced motion respected

Checklist (Other themes):
- No styling regressions
- Theme switch still works and persists

Deliver:
- Files changed
- Token list (Glass Aurora)
- Short "before vs after" notes (what improved)
```

## Response snapshot

Successfully generated comprehensive tasks for the Glass Aurora Theme Enhancement feature. The tasks.md file includes:

- Phase-based organization with clear goals and acceptance criteria
- 18 specific tasks with sequential IDs (T001-T018)
- Proper file paths for each implementation task
- Dependencies documented between tasks
- Parallel execution opportunities identified
- Implementation strategy following MVP-first approach

The tasks address all requirements from the user:
1. Locating Glass Aurora theme files and toggle mechanism (T001)
2. Defining blue button system to replace green accents (T002)
3. Creating deep glass styling recipe (T003)
4. Adding specular highlight overlay (T004)
5. Adding shimmer/aurora micro-animations (T005)
6. Applying recipe across key sections (T006-T011)
7. Fixing icon contrast and blue accent coherence (T012-T014)
8. QA and regression checks (T015-T018)

Each task follows the required format with clear acceptance criteria and implementation instructions. The tasks are organized by user story priority to enable independent implementation and testing.

## Outcome

- ✅ Impact: Created complete task breakdown for Glass Aurora theme implementation
- 🧪 Tests: Tasks validated against requirements checklist
- 📁 Files: Created tasks.md with proper structure and organization
- 🔁 Next prompts: Ready for implementation phase (/sp.implement)
- 🧠 Reflection: Tasks follow user story priorities and enable independent testing

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Proceed to implementation phase