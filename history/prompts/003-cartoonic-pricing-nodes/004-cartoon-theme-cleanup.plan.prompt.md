---
id: 004
title: Cartoon theme cleanup plan
stage: plan
date: 2026-01-27
surface: agent
model: gpt-5
feature: cartoonic-pricing-nodes
branch: 003-cartoonic-pricing-nodes
user: Admin
command: manual
labels: [plan, cartoon, theme, sections]
links:
  spec: specs/003-cartoonic-pricing-nodes/spec.md
  ticket: null
  adr: null
  pr: null
files:
 - specs/003-cartoonic-pricing-nodes/plan.md
 - specs/003-cartoonic-pricing-nodes/research.md
 - specs/003-cartoonic-pricing-nodes/data-model.md
 - specs/003-cartoonic-pricing-nodes/quickstart.md
 - specs/003-cartoonic-pricing-nodes/contracts/README.md
 - AGENTS.md
tests:
 - null
---

## Prompt

Plan
A) Identify which section(s) are still using dark theme styles:
   - "The AI Ecosystem" section wrapper
   - "Projects" section wrapper
   - "Learning Journey" wrapper (and any parent container)
   - Any global theme tokens for background

B) Replace hard-coded dark backgrounds with cartoon theme tokens:
   - Use semantic tokens: section-bg, surface-bg, card-bg, border, text
   - Ensure the cartoon theme defines those tokens

C) Fix footer email pill contrast:
   - Adjust input text, placeholder, and icon colors
   - Ensure background/border allow readability

D) Improve testimonial card styling:
   - Use lighter card bg (cartoon surface)
   - Stronger text colors
   - Slight playful shadow/outline (not neo-brutal)

E) Validate visually:
   - Cartoon theme: no dark block
   - Email visible
   - Testimonials readable and consistent

## Response snapshot

Created and updated the implementation plan for the cartoon theme cleanup and generated research, data model, contracts, and quickstart docs. Updated agent context with the detected Next.js/Tailwind stack.

## Outcome

- ? Impact: Documented the plan and design decisions for removing dark sections and improving contrast.
- ?? Tests: Not run (plan-only changes).
- ?? Files: plan.md, research.md, data-model.md, quickstart.md, contracts/README.md, AGENTS.md.
- ?? Next prompts: /sp.tasks
- ?? Reflection: Scoped semantic theme tokens to remove hard-coded colors while preserving layout.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): null
