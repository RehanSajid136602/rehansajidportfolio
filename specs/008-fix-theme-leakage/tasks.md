# Tasks: Fix Theme Background Leakage

Feature: Fix Theme Background Leakage
Status: Ready

## Phase 1: Setup & Identification
Goal: Pinpoint exactly why and where the yellow background is leaking.

- [ ] T001 Identify theme token files and selectors in src/app/globals.css and other CSS/component files. List each selector used for tokens (e.g., :root, body, [data-theme="..."]).
- [ ] T002 Find the root cause of yellow override. Confirm if cartoonic tokens are defined globally or if theme attribute is missing/stuck. Check for duplicate --background definitions.

## Phase 2: Implementation (User Story 1)
Goal: Correct the token scoping and application logic.

- [ ] T003 [US1] Fix token scoping. Ensure cartoonic vars exist only in [data-theme="cartoon"] (or variant blocks). Ensure :root only holds neutral defaults. Update src/app/globals.css.
- [ ] T004 [US1] Fix theme application mechanism. Ensure html/body has the expected attribute on initial load. Check src/components/ui/ThemeToggle.tsx and src/app/layout.tsx.

## Phase 3: Validation & Regression
Goal: Verify the fix across all themes and sections.

- [ ] T005 [US1] Regression verification. Background looks correct per theme across hero to footer. Learning Journey and testimonials do not show yellow in non-cartoon themes.

## Acceptance Criteria
- When theme != cartoonic, page background is not yellow.
- Cartoonic theme remains yellow.
- No hardcoded color reintroduced.
- All themes (Dark Pro, Glass Aurora, Cartoon) are visually distinct and correct.
- No flash of incorrect theme on page reload.

## Dependencies
- T001 -> T002 -> T003 -> T004 -> T005
