# Tasks: Glass Aurora Theme Implementation

**Feature**: Glass Aurora Theme Implementation
**Branch**: 005-glass-aurora-theme
**Date**: 2026-01-27

## Overview

This document outlines the tasks required to implement the glass-aurora theme to satisfy the following requirements:
- A new selectable theme exists: `glass-aurora`
- Switching to `glass-aurora` updates the entire site consistently
- No section stays "stuck" with old colors
- Icons and nodes remain readable (no contrast issues)
- Existing themes remain unchanged and selectable
- Theme persists on refresh (same persistence mechanism as current themes)

## Dependencies

- Task T003 (Add token set for glass-aurora) must be completed before T005 (Tokenize hard-coded section colors)
- Task T002 (Add new theme option to registry) must be completed before T003 (Add token set)

## Parallel Execution Opportunities

- Tasks T004 (Add aurora background layer) can be executed in parallel with T005 (Tokenize hard-coded colors)
- Tasks T005 and T006 (Ensure node/icon contrast) can be executed in parallel after T003

## Implementation Strategy

Start with foundational theme infrastructure (registry + CSS variables), then implement visual effects and tokenize remaining hard-coded colors. Each task builds upon the previous to ensure consistent theme application.

---

## Phase 1: Setup

- [X] T001 Audit theme system to identify current architecture and persistence mechanisms in src/components/ui/ThemeToggle.tsx and src/app/globals.css

## Phase 2: Foundation Tasks

- [X] T002 Add `glass-aurora` theme option to registry in src/components/ui/ThemeToggle.tsx
- [X] T003 Add comprehensive CSS variable token set for glass-aurora theme in src/app/globals.css

## Phase 3: User Story 1 - Glass Aurora Theme Selection (P1)

**Goal**: Enable users to select the new `glass-aurora` theme and have it update the entire site consistently.

**Independent Test**: Can be fully tested by selecting the glass-aurora theme from the theme selector and verifying that the entire site updates consistently, delivering the new aesthetic experience.

- [X] T004 Add aurora background layer (CSS-only) scoped to glass-aurora theme in src/app/globals.css
- [X] T005 Validate theme persistence mechanism works correctly for glass-aurora in src/components/ui/ThemeToggle.tsx

## Phase 4: User Story 2 - Consistent Theme Application (P2)

**Goal**: Ensure all sections consistently reflect the theme so users have a cohesive visual experience without jarring transitions between sections.

**Independent Test**: Can be fully tested by navigating through all sections of the site with the glass-aurora theme active and verifying that no sections remain with old colors.

- [X] T006 Tokenize hard-coded section colors that block theme switching in src/components/sections/Projects.tsx
- [X] T007 Tokenize hard-coded section colors that block theme switching in src/components/sections/Experience.tsx
- [X] T008 Tokenize hard-coded section colors that block theme switching in src/components/sections/Testimonials.tsx
- [X] T009 Tokenize hard-coded section colors that block theme switching in src/components/sections/Contact.tsx

## Phase 5: User Story 3 - Readability Maintenance (P3)

**Goal**: Ensure all text, icons, and nodes remain readable so users can consume the content effectively without eye strain.

**Independent Test**: Can be fully tested by examining all text elements, icons, and nodes in the glass-aurora theme to verify adequate contrast ratios.

- [X] T010 Ensure node/icon contrast under glass-aurora theme in src/components/sections/Projects.tsx
- [X] T011 Update ThemeToggle UI to include glass-aurora option with appropriate styling in src/components/ui/ThemeToggle.tsx

## Phase 6: Polish & Cross-Cutting Concerns

- [X] T012 Validate all three themes for regressions and ensure existing themes remain unchanged
- [X] T013 Verify all sections consistently apply new theme across Hero, Services, AI Ecosystem, Learning Journey, Testimonials, and Footer
- [X] T014 Conduct final validation checklist to ensure glass-aurora theme meets all requirements
