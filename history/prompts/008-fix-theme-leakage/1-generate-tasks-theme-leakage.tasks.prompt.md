---
id: 1
title: Generate tasks for theme background leakage fix
stage: tasks
date: 2026-01-27
surface: agent
model: gemini-2.0-flash-thinking-exp
feature: 008-fix-theme-leakage
branch: 008-fix-theme-leakage
user: Admin
command: /sp.tasks
labels: ["theme", "bug-fix", "css", "task-generation"]
links:
  spec: specs/008-fix-theme-leakage/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/008-fix-theme-leakage/spec.md
  - specs/008-fix-theme-leakage/plan.md
  - specs/008-fix-theme-leakage/tasks.md
tests:
  - none
---

## Prompt

Context for task generation: Write /sp.tasks.md with tasks + acceptance criteria to fix theme background leakage. Tasks: T1) Identify theme token files and selectors - Find CSS file(s) defining --bg/--surface/--card etc. - List each selector used for tokens (e.g., :root, body, [data-theme="..."]). T2) Find the root cause of yellow override - Confirm if cartoonic tokens are defined globally (wrong). - Confirm if theme attribute is missing or stuck on cartoonic. - Check for duplicate --bg definitions across selectors or files. - Check CSS order and specificity issues. T3) Fix token scoping - Ensure cartoonic vars exist only in [data-theme="cartoon"] (or cartoonic-light/dark block). - Ensure glass-aurora vars exist only in [data-theme="glass-aurora"]. - Ensure theme2 vars exist only in [data-theme="theme2"]. - Ensure :root only holds neutral defaults that do not look cartoonic. T4) Fix theme application mechanism - Ensure html/body has the expected attribute/class on initial load and on toggle. - If SSR hydration mismatch exists, implement a safe initial theme apply (without flash). T5) Regression verification - Background looks correct per theme across hero→footer. - Learning Journey and testimonials do not show unintended yellow in non-cartoonic themes. - No layout shifts. Acceptance criteria: - When theme != cartoonic, page background is not yellow. - Cartoonic remains yellow. - No hardcoded color reintroduced.

## Response snapshot

Generated a comprehensive tasks.md for fixing theme background leakage, organized by phase and user story. The plan includes identification of root cause, token re-scoping, and regression testing. Also created supporting spec.md and plan.md files in specs/008-fix-theme-leakage/.

## Outcome

- ✅ Impact: Created executable tasks for fixing a critical UI bug.
- 🧪 Tests: No tests run yet; tasks include verification steps.
- 📁 Files: Created spec.md, plan.md, tasks.md in specs/008-fix-theme-leakage/.
- 🔁 Next prompts: Run T001 to begin identification.
- 🧠 Reflection: The SDD workflow was followed by creating spec and plan before tasks, ensuring clarity.

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
