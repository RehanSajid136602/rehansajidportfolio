---
id: 6
title: Create Implementation Plan for Cartoonic Light/Dark
stage: plan
date: 2026-01-27
surface: agent
model: gemini-2.0-flash-thinking-exp-1219
feature: glass-aurora-theme
branch: 005-glass-aurora-theme
user: Admin
command: /sp.plan
labels: [plan, cartoonic, theme, variants]
links:
  spec: specs/005-glass-aurora-theme/spec.md
  ticket: null
  adr: null
  pr: null
files:
 - specs/005-glass-aurora-theme/plan.md
 - specs/005-glass-aurora-theme/research.md
 - specs/005-glass-aurora-theme/data-model.md
 - specs/005-glass-aurora-theme/quickstart.md
tests:
 - none
---

## Prompt

/sp.plan Generate /sp.plan.md for implementing cartoonic-only Light/Dark mode.

Plan must include:
1) Audit:
   - Find theme registry + theme toggle UI.
   - Find where theme is applied to document (data-theme, class, etc).
   - Find token definitions location.

2) Data model decision (must pick one):
   A) Use data-theme="cartoonic" + data-variant="light|dark"
   OR
   B) Use data-theme="cartoonic-light" / "cartoonic-dark" as distinct theme keys
   Choose the approach that causes the fewest changes and least regression.

3) Tokens:
   - Add two token sets for cartoonic: light and dark.
   - Ensure all sections use semantic tokens (no hard-coded bg/text that blocks modes).

4) UI toggle:
   - Add a Light/Dark toggle that only appears (or is enabled) when theme == cartoonic.
   - On switching away from cartoonic, hide/disable toggle; do not change other themes.

5) Persistence:
   - Save only cartoonic mode preference.
   - On load, if theme is cartoonic, apply saved mode (else ignore).

6) Validation:
   - Test hero -> footer, orbit/nodes, testimonials, footer pill under cartoonic light/dark.
   - Confirm glass-aurora/theme2 unchanged.

Output phases + touched files + rollback plan.
No code yet.

## Response snapshot

Generated implementation plan for Cartoonic Light/Dark mode.
Audit: Identifed `ThemeToggle.tsx` and `globals.css` as key files.
Decision: Option A (`data-variant`) chosen for least regression.
Phases: 1. Token Expansion, 2. Logic & Toggle UI, 3. Persistence.
Artifacts: `research.md`, `data-model.md`, `quickstart.md` created.

## Outcome

- ✅ Impact: Established a clear technical path for adding variant support to the Cartoon theme.
- 📁 Files: plan.md, research.md, data-model.md, quickstart.md.
- 🔁 Next prompts: /sp.tasks
- 🧠 Reflection: Choosing the variant approach keeps the main theme cycle simple while providing the requested granularity.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): null
