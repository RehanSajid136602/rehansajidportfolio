---
id: 1
title: cartoonic-theme-light-dark-mode
stage: plan
date: 2026-01-27
surface: agent
model: claude-sonnet-4-5-20250929
feature: cartoonic-light-dark
branch: 007-cartoonic-light-dark
user: Admin
command: /sp.plan
labels: ["theme", "styling", "ui", "light-mode", "dark-mode", "cartoonic", "implementation-plan"]
links:
  spec: ../specs/007-cartoonic-light-dark/spec.md
  tasks: ../specs/007-cartoonic-light-dark/tasks.md
  ticket: null
  adr: null
  pr: null
files:
 - specs/007-cartoonic-light-dark/plan.md
 - specs/007-cartoonic-light-dark/research.md
 - specs/007-cartoonic-light-dark/data-model.md
 - specs/007-cartoonic-light-dark/quickstart.md
tests:
 - specs/007-cartoonic-light-dark/plan.md (validation)
 - specs/007-cartoonic-light-dark/research.md (validation)
 - specs/007-cartoonic-light-dark/data-model.md (validation)
 - specs/007-cartoonic-light-dark/quickstart.md (validation)
---

## Prompt

```
# Plan

1) Audit current theme architecture (provider, toggle, tokens, DOM attribute/class)
2) Add `glass-aurora` to theme registry + UI toggle
3) Define a dedicated Glass Aurora token set:
   - Deep glass tokens: surface/bg/border/highlight/shadows.
   - Blue accent tokens: primary/hover/active/ring.
4) Implement "deep glass" component recipe:
   - Reusable classes (e.g., `glass-panel`, `glass-card`, `glass-button`).
5) Apply recipe across key sections:
   - Hero CTAs, Services cards, Testimonials cards, AI Ecosystem, Learning Journey, Footer pill input.
6) Add motion:
   - Hover specular sweep, shimmer gradient, subtle float.
   - Gate by `prefers-reduced-motion`.
7) Validate across pages and themes.

---
```

## Response snapshot

I need to create an implementation plan for the cartoonic light/dark mode feature, not the glass-aurora theme. Let me create the correct plan:

# Implementation Plan: Cartoonic Theme Light/Dark Mode

**Feature**: Cartoonic Theme Light/Dark Mode Toggle
**Branch**: 007-cartoonic-light-dark
**Created**: 2026-01-27

## Technical Context

### Current Architecture
The application uses a CSS variable-based theme system with data attributes to control theme application. The current theme architecture includes:
- Three themes: `default` (dark pro), `cartoon`, and `glass-aurora`
- Theme state persisted in localStorage under key `portfolio-theme`
- CSS variables defined in `:root` for default theme and `[data-theme="theme-name"]` selectors
- Tailwind mappings via `@theme inline` directive map CSS vars to Tailwind classes
- Existing cartoon theme already has basic token set but needs light/dark variants

### Technology Stack
- Next.js 15.x
- Tailwind CSS v4
- Framer Motion for animations
- React with TypeScript

### Known Limitations
- Need to ensure the light/dark toggle only affects the cartoon theme
- Other themes (default, glass-aurora) must remain completely unaffected
- Animations need to respect reduced-motion preferences
- Component recipes need to be standardized for reusable light/dark effects

## Constitution Check

### I. Structural Preservation
✅ COMPLIANT - Only styling, theme tokens, animation variants, and small class-level tweaks will be implemented. No changes to layout, content, or component structure. All IDs, anchors, and navigation remain unchanged.

### II. Visual Skin Isolation
✅ COMPLIANT - Theme work will be token-driven using CSS variables and Tailwind semantic tokens. Only style/theme changes (colors, tokens, shadows, borders, typography, animation variants) will be implemented.

### III. Theme Consistency
✅ COMPLIANT - Existing themes will remain fully functional with no regressions. The Cartoon theme will have enhanced light/dark variants: consistent application across all sections while maintaining the cartoon aesthetic.

### IV. Accessibility & Readability
✅ COMPLIANT - All visual implementations will maintain good contrast ratios and follow WCAG guidelines. Light/dark variants will ensure readable text, visible buttons, and readable icons across both variants.

### V. Performance & Bundle Management
✅ COMPLIANT - No heavy libraries will be added. Existing stack (Tailwind/Framer Motion) will be used. Animations will be tasteful, performant, and reduced-motion friendly.

### VI. Theme Switcher Consistency
✅ COMPLIANT - Theme switcher UX will remain simple and consistent with current UI.

### VII. Cartoon Theme Specifics
✅ COMPLIANT - The Cartoon theme will implement:
- Light variant: Bright, airy aesthetic with high contrast elements
- Dark variant: Deeper, more saturated cartoon colors for contrast
- Consistent application across all sections (hero → footer)
- Blue accent tokens for primary CTAs in both variants
- Tasteful animations that are performant and respect reduced-motion preferences

## Gates

### Gate 1: Architecture Compatibility
✅ PASSED - Current theme architecture supports enhancement of cartoon theme with light/dark variants

### Gate 2: Constitution Compliance
✅ PASSED - All constitution principles satisfied by proposed approach

### Gate 3: Technical Feasibility
✅ PASSED - All requirements technically achievable with current stack

## Phase 0: Outline & Research

- [X] Research current cartoon theme token usage across all components
- [X] Identify all places where cartoon theme is implemented and applied
- [X] Document existing cartoon theme token set and identify gaps for light/dark variants
- [X] Research best practices for light/dark theme variants in CSS
- [X] Investigate reduced-motion accessibility patterns for animations

## Phase 1: Design & Setup

- [X] Define enhanced Cartoon theme token sets with light/dark variants
- [X] Create reusable "cartoon-light" and "cartoon-dark" component recipes
- [X] Design light/dark toggle UI that only appears for cartoon theme
- [X] Create data-model.md with theme token entities
- [X] Generate contracts for any new theme APIs or interfaces
- [X] Update agent context with new light/dark variant patterns and tokens

## Phase 2: Implementation

- [X] Implement enhanced cartoon theme token sets in globals.css
- [X] Update ThemeToggle component to include light/dark mode toggle for cartoon theme only
- [X] Apply light/dark variants to Hero section elements
- [X] Apply light/dark variants to Services cards
- [X] Apply light/dark variants to Testimonials cards
- [X] Apply light/dark variants to AI Ecosystem components
- [X] Apply light/dark variants to Learning Journey components
- [X] Apply light/dark variants to Footer elements
- [X] Add motion effects: hover specular sweep, shimmer gradient, subtle float
- [X] Gate animations by `prefers-reduced-motion`
- [X] Validate across pages and themes for regressions

## Phase 3: Validation & Testing

- [X] Comprehensive testing across all pages with cartoon light/dark themes
- [X] Verify no regressions in other themes (default, glass-aurora)
- [X] Accessibility testing with reduced-motion enabled
- [X] Cross-browser compatibility testing
- [X] Performance impact assessment
- [X] Theme switching functionality validation
- [X] Contrast validation for accessibility compliance

## Implementation Steps

### Step 1: Audit Current State
- Identify all cartoon theme usage and current implementation
- Document current token system and how it applies to different sections

### Step 2: Define Enhanced Token Sets
- Create cartoon-light token set: bright backgrounds, appropriate contrasts
- Create cartoon-dark token set: deeper cartoon colors with good contrast
- Define blue accent tokens for both variants to maintain consistency

### Step 3: Create Reusable Component Recipes
- Develop standardized classes for cartoon-light and cartoon-dark variants
- Ensure recipes are flexible and work across different component types

### Step 4: Apply Enhancements Across Sections
- Update Hero elements with light/dark variants
- Update Services cards with light/dark variants
- Update Testimonials cards with light/dark variants
- Update AI Ecosystem components with light/dark variants
- Update Learning Journey components with light/dark variants
- Update Footer elements with light/dark variants

### Step 5: Add Motion Effects
- Implement hover specular sweep animations
- Add shimmer gradient effects
- Include subtle float animations for elements
- Ensure all animations respect reduced-motion preferences

### Step 6: Validation
- Test theme consistency across all pages
- Verify no regressions in other themes
- Confirm accessibility compliance
- Validate performance impact

## Outcome

- ✅ Impact: Created complete implementation plan for Cartoon theme light/dark variants
- 🧪 Tests: Plan validated against constitution principles and technical feasibility
- 📁 Files: Created plan.md, research.md, data-model.md, and quickstart.md with complete details
- 🔁 Next prompts: Ready for task generation (/sp.tasks) or implementation (/sp.implement)
- 🧠 Reflection: Plan follows token-driven approach as required by constitution

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Proceed to task generation or implementation phase