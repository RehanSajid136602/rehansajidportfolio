# Tasks: Cartoonic Theme Styling Improvements

**Feature**: Cartoonic Theme Styling Improvements
**Branch**: 004-cartoonic-theme-styling
**Date**: 2026-01-27

## Overview

This document outlines the tasks required to implement cartoonic theme styling improvements to address:
1. Unintended dark blocks between sections
2. Footer email pill visibility issues
3. Client testimonials styling inconsistencies
4. Ensuring no layout changes while updating only styling tokens/classes

## Dependencies

- User Story 1 (Consistent Theme Experience) must be completed before User Stories 2 and 3
- Understanding of existing theme system in globals.css is required

## Parallel Execution Opportunities

- Tasks T007-T009 (Testimonials improvements) can be executed in parallel with Tasks T010-T012 (Footer improvements)
- Individual component styling tasks can be worked on separately

## Implementation Strategy

Start with foundational theme tokenization (User Story 1), then proceed to specific component improvements (User Stories 2-3). Each user story should result in a independently testable increment.

---

## Phase 1: Setup

- [X] T001 Create feature branch 004-cartoonic-theme-styling from main

## Phase 2: Foundational Tasks

- [X] T002 Analyze current theme system in src/app/globals.css to understand existing theme tokens
- [X] T003 Document current background classes used in Projects, Experience, and Testimonials sections

## Phase 3: User Story 1 - Consistent Theme Experience (P1)

**Goal**: Ensure the background between Projects/AI Ecosystem and Learning Journey sections matches the cartoon theme with consistent section transitions.

**Independent Test**: Navigate through the page and verify that all sections between Projects/AI Ecosystem and Learning Journey match the cartoon theme, delivering a unified visual experience.

- [X] T004 [US1] Update Projects section background to use theme tokens instead of hardcoded bg-[#030303] in src/components/sections/Projects.tsx
- [X] T005 [US1] Update Experience section background to use theme tokens instead of hardcoded bg-[#030303] in src/components/sections/Experience.tsx
- [X] T006 [US1] Verify that theme switching still works properly for both dark and cartoon themes

## Phase 4: User Story 2 - Client Testimonial Readability (P3)

**Goal**: Style Client Testimonial cards with backgrounds that fit the cartoon palette without appearing muddy, ensuring readable quote text and name/role information.

**Independent Test**: Examine testimonial cards and verify that all visual elements support easy reading.

- [X] T007 [US2] Update testimonial card background to use theme tokens instead of hardcoded bg-black/40 in src/components/sections/Testimonials.tsx
- [X] T008 [US2] Ensure testimonial quote text uses appropriate theme token for readability in src/components/sections/Testimonials.tsx
- [X] T009 [US2] Verify star ratings have sufficient contrast against card background in src/components/sections/Testimonials.tsx

## Phase 5: User Story 3 - Footer Email Pill Visibility (P2)

**Goal**: Style the footer email pill with clearly readable text that includes both placeholder and actual email values.

**Independent Test**: Examine the footer email pill and verify text readability, icon visibility, and clean design elements.

- [X] T010 [US3] Update email pill styling in src/components/sections/Contact.tsx to improve text contrast
- [X] T011 [US3] Ensure email text uses high-contrast token in src/components/sections/Contact.tsx
- [X] T012 [US3] Adjust email pill background and border to enhance visibility in src/components/sections/Contact.tsx

## Phase 6: Polish & Cross-Cutting Concerns

- [X] T013 Test all changes in both cartoon and dark themes to ensure no regression
- [X] T014 Validate that no layout changes occurred during styling updates
- [X] T015 Document which theme tokens were used for the styling updates