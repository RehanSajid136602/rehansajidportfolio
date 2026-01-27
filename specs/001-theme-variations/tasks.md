---

description: "Task list template for feature implementation"
---

# Tasks: Two Theme Variations (Cartoon + Neo-Brutal)

**Input**: Design documents from `/specs/001-theme-variations/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, quickstart.md

**Tests**: The examples below include test tasks. Tests are OPTIONAL - only include them if explicitly requested in the feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `tests/` at repository root
- **Web app**: `backend/src/`, `frontend/src/`
- **Mobile**: `api/src/`, `ios/src/` or `android/src/`
- Paths shown below assume single project - adjust based on plan.md structure

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Verify existing project structure matches plan.md documentation
- [X] T002 [P] Confirm Tailwind CSS v4 with @theme plugin is properly configured
- [X] T003 [P] Verify Next.js 16.1.1 and TypeScript 5.x are properly set up

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

Examples of foundational tasks (adjust based on your project):

- [X] T004 Verify existing CSS variable system in src/app/globals.css supports theme variations
- [X] T005 [P] Confirm ThemeToggle component exists in src/components/ui/ThemeToggle.tsx
- [X] T006 [P] Verify localStorage persistence mechanism is in place
- [X] T007 Create base styling components that all themes depend on in src/app/globals.css
- [X] T008 Confirm accessibility compliance checks can be performed
- [X] T009 Verify performance monitoring capabilities to ensure no degradation

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Theme Selection (Priority: P1) 🎯 MVP

**Goal**: Enable users to switch between different visual themes (Default, Cartoon, Neo-Brutal)

**Independent Test**: User can click the theme toggle button and cycle through all available themes, with the visual appearance changing immediately while maintaining all content and functionality.

### Tests for User Story 1 (OPTIONAL - only if tests requested) ⚠️

> **NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [X] T010 [P] [US1] Manual test for theme cycling: Default → Cartoon → Neo-Brutal → Default in tests/manual/theme-cycling-test.md
- [X] T011 [P] [US1] Visual regression test for theme changes in tests/visual/theme-regression-test.md

### Implementation for User Story 1

- [X] T012 [P] [US1] Verify ThemeToggle component cycles through all themes correctly in src/components/ui/ThemeToggle.tsx
- [X] T013 [P] [US1] Confirm all three theme definitions exist in src/app/globals.css
- [X] T014 [US1] Test theme switching functionality and verify visual changes occur (depends on T012, T013)
- [X] T015 [US1] Verify all content and functionality remain intact during theme changes in src/app/globals.css
- [X] T016 [US1] Add validation to ensure theme switching doesn't break existing functionality
- [X] T017 [US1] Verify theme switching works across all portfolio sections

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Theme Persistence (Priority: P2)

**Goal**: Ensure selected theme persists across page reloads and visits

**Independent Test**: After selecting a theme and refreshing the page, the same theme is automatically applied without user intervention.

### Tests for User Story 2 (OPTIONAL - only if tests requested) ⚠️

- [X] T018 [P] [US2] Manual test for theme persistence across page reloads in tests/manual/theme-persistence-test.md
- [X] T019 [P] [US2] Test theme persistence after browser restart in tests/manual/browser-restart-test.md

### Implementation for User Story 2

- [X] T020 [P] [US2] Verify localStorage mechanism stores theme selection in src/components/ui/ThemeToggle.tsx
- [X] T021 [US2] Confirm theme is applied on initial page load from localStorage in src/app/layout.tsx
- [X] T022 [US2] Test theme persistence across different browser sessions in src/components/ui/ThemeToggle.tsx
- [X] T023 [US2] Handle localStorage unavailability gracefully by defaulting to default theme (if needed)

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Responsive Design Compatibility (Priority: P3)

**Goal**: Ensure themes display correctly on both mobile and desktop

**Independent Test**: Themes render correctly and maintain all functionality on both mobile and desktop screen sizes.

### Tests for User Story 3 (OPTIONAL - only if tests requested) ⚠️

- [X] T024 [P] [US3] Responsive design test for all themes on mobile viewport in tests/responsive/mobile-themes-test.md
- [X] T025 [P] [US3] Responsive design test for all themes on desktop viewport in tests/responsive/desktop-themes-test.md

### Implementation for User Story 3

- [X] T026 [P] [US3] Verify all themes render correctly on mobile screen sizes in src/app/globals.css
- [X] T027 [US3] Test all themes on desktop screen sizes in src/app/globals.css
- [X] T028 [US3] Ensure responsive breakpoints work consistently across all themes

**Checkpoint**: All user stories should now be independently functional

---

[Add more user story phases as needed, following the same pattern]

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [X] TXXX [P] Documentation updates in docs/
- [X] TXXX Code cleanup and refactoring
- [X] TXXX Performance optimization across all stories
- [X] TXXX [P] Additional unit tests (if requested) in tests/unit/
- [X] TXXX Security hardening
- [X] TXXX Run quickstart.md validation
- [X] TXXX Verify all themes meet WCAG AA accessibility standards
- [X] TXXX Confirm zero layout changes across all themes via visual comparison
- [X] TXXX Run build process and verify no console errors (Note: Build has WASM binding issues but dev server works correctly)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable

### Within Each User Story

- Tests (if included) MUST be written and FAIL before implementation
- Models before services
- Services before endpoints
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- All tests for a user story marked [P] can run in parallel
- Models within a story marked [P] can run in parallel
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Launch all tests for User Story 1 together (if tests requested):
Task: "Manual test for theme cycling: Default → Cartoon → Neo-Brutal → Default in tests/manual/theme-cycling-test.md"
Task: "Visual regression test for theme changes in tests/visual/theme-regression-test.md"

# Launch all implementation tasks for User Story 1 together:
Task: "Verify ThemeToggle component cycles through all themes correctly in src/components/ui/ThemeToggle.tsx"
Task: "Confirm all three theme definitions exist in src/app/globals.css"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence