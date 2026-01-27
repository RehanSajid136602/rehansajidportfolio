---
id: 003
title: Create Implementation Plan for Cartoonic Pricing & Nodes
stage: plan
date: 2026-01-27
surface: agent
model: gemini-2.0-flash-thinking-exp-1219
feature: cartoonic-pricing-nodes
branch: 003-cartoonic-pricing-nodes
user: Admin
command: /sp.plan
labels: [plan, cartoonic, pricing, nodes]
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
 - specs/003-cartoonic-pricing-nodes/contracts/services.schema.json
tests:
 - null
---

## Prompt

/sp.plan # Plan

A) Identify where these sections live (component files) and how styles are applied:
   - Packages/Pricing component
   - Tech Nodes component (skills/tools/tech stack)
   - Any theme tokens or globals affecting them

B) Fix Packages text visibility:
   - Replace low-contrast text colors with semantic tokens:
     text-primary, text-muted, text-accent
   - Ensure card backgrounds are stable and not muddy
   - Improve hierarchy: title > price > bullets

C) Convert nodes to cartoonic style:
   - Node base: bubble background, soft gradient or solid, outline, shadow
   - Add subtle highlight overlay
   - Ensure theme tokens apply (not hard-coded colors)

D) Verify visually in browser:
   - Packages readable
   - Nodes look cartoonic
   - No neo-brutal remnants

## Response snapshot

Generated technical implementation plan for feature `003-cartoonic-pricing-nodes`.
Created supporting artifacts: `research.md`, `data-model.md`, `quickstart.md`, and JSON schema for services.
Updated agent context with detected tech stack (Next.js 15.x, Tailwind v4).

## Outcome

- ✅ Impact: Solidified the technical path for transforming pricing and tech nodes.
- 🧪 Tests: N/A
- 📁 Files: plan.md, research.md, data-model.md, quickstart.md, services.schema.json.
- 🔁 Next prompts: /sp.tasks
- 🧠 Reflection: Research confirmed CSS filter approach for SVG shadows is cleaner than SVG filters for this scale.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): null
