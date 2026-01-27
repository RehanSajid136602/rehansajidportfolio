# Implementation Plan: Cartoonic Pricing & Tech Nodes

**Branch**: `003-cartoonic-pricing-nodes` | **Date**: 2026-01-27 | **Spec**: `C:\Users\Admin\Documents\rehansajidportfolio\specs\003-cartoonic-pricing-nodes\spec.md`
**Input**: Feature specification from `C:\Users\Admin\Documents\rehansajidportfolio\specs\003-cartoonic-pricing-nodes\spec.md`

**Note**: This template is filled in by the `/sp.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Align the Pricing and Tech Nodes visuals with the cartoon theme by replacing dark/neo-brutal styling with semantic theme tokens, ensuring readable contrast, and preserving layout stability. Update section wrappers (AI Ecosystem, Projects, Learning Journey), testimonial cards, and footer email pill to use cartoon surface/background tokens and playful, softer shadows while keeping the existing layout grid unchanged.

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: TypeScript 5.x, React 19.2.3, Next.js 16.1.1  
**Primary Dependencies**: Next.js, React, Tailwind CSS 4, Framer Motion, lucide-react  
**Storage**: N/A (static content)  
**Testing**: No automated test runner configured (no test script in package.json)  
**Target Platform**: Web (Next.js app, modern browsers)  
**Project Type**: Web application  
**Performance Goals**: Maintain CLS < 0.1 in Pricing section; hover animations feel responsive (~60 fps)  
**Constraints**: No layout shifts; avoid neo-brutal styling in affected sections; maintain existing grid/spacing  
**Scale/Scope**: Single marketing/portfolio site with multiple sections

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Constitution file (`C:\Users\Admin\Documents\rehansajidportfolio\.specify\memory\constitution.md`) contains placeholders only; no enforceable gates defined.
- **GATE STATUS: PASS (no constraints found to evaluate).**
- **Post-design re-check: PASS (no constraints found to evaluate).**

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)
<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
src/
├── app/
├── components/
└── lib/

public/
tests/
```

**Structure Decision**: Web application using Next.js App Router with shared UI components in `src/components` and styles in `src/app`.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
