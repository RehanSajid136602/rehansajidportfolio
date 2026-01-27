# Tasks: Cartoonic Pricing & Tech Nodes

**Input**: Design documents from `/specs/003-cartoonic-pricing-nodes/`
**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md

**Tests**: Manual visual verification and accessibility checks. No automated tests requested.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and locating assets

- [X] T001 [P] Locate component files for Pricing and Tech Nodes using `rg` in `src/`
- [X] T002 [P] Verify development server starts successfully with `npm run dev`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure and theme cleanup

**⚠️ CRITICAL**: Neo-brutal artifacts must be removed and semantic tokens established before styling begins.

- [X] T003 [P] Define semantic CSS variables for cards (`--card-bg`, `--card-border`) in `src/app/globals.css`
- [X] T004 [P] Remove `[data-theme="neo-brutal"]` CSS block from `src/app/globals.css`
- [X] T005 [P] Remove Neo-brutal entry from `THEMES` array in `src/components/ui/ThemeToggle.tsx`
- [X] T006 [P] Update `cycleTheme` logic to skip neo-brutal in `src/components/ui/ThemeToggle.tsx`

**Checkpoint**: Foundation ready - Neo-brutal is gone and semantic variables are available.

---

## Phase 3: User Story 1 - Readable Cartoonic Pricing Cards (Priority: P1) 🎯 MVP

**Goal**: Fix text contrast and apply cartoonic styling to pricing cards and buttons.

**Independent Test**: Switch to "Cartoon" theme and verify that all pricing text is legible and buttons have the cartoonish border/shadow style.

### Implementation for User Story 1

- [X] T007 [US1] Replace hardcoded `bg-black/40` and `border-white/10` with `bg-[var(--card-bg)]` and `border-[var(--card-border)]` in `src/components/sections/Services.tsx`
- [X] T008 [US1] Update card text classes (titles, prices, features) to use `text-foreground` or `text-secondary` in `src/components/sections/Services.tsx`
- [X] T009 [US1] Apply cartoon theme button styles (border, offset shadow) to Pricing action buttons in `src/components/sections/Services.tsx`
- [X] T010 [US1] Verify no layout shifts occur when switching themes in the Pricing section.

**Checkpoint**: User Story 1 (Pricing) is fully functional and visually consistent.

---

## Phase 4: User Story 2 - Playful Tech Stack Badges (Priority: P2)

**Goal**: Redesign Tech Nodes as rounded badges with soft shadows and playful hover effects.

**Independent Test**: Hover over nodes in the Skills section; they should scale/bounce and look like rounded "bubbles" with soft shadows.

### Implementation for User Story 2

- [X] T011 [US2] Update `NeuralNode` base circle style to remove harsh borders and use soft outlines in `src/components/sections/Skills.tsx`
- [X] T012 [US2] Apply CSS `filter: drop-shadow(...)` or Tailwind `drop-shadow-md` to nodes in `src/components/sections/Skills.tsx`
- [X] T013 [US2] Refine text centering and font weight for tech node labels in `src/components/sections/Skills.tsx`
- [X] T014 [US2] Implement/Update `whileHover` framer-motion props for a playful bounce/scale effect in `src/components/sections/Skills.tsx`

**Checkpoint**: User Story 2 (Tech Nodes) matches the cartoonic aesthetic.

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Final verification and cleanup

- [X] T015 [P] Search for any remaining `shadow-[...0px_#000]` or `border-black` hardcoded patterns in `src/` and replace with theme variables.
- [X] T016 [P] Run `quickstart.md` validation steps to confirm all success criteria are met.
- [X] T017 [P] Perform accessibility check on final colors using a contrast checker.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Immediate start.
- **Foundational (Phase 2)**: Depends on Setup. Blocks implementation.
- **User Stories (Phase 3+)**: Depend on Foundational (Phase 2).
  - US1 (Pricing) and US2 (Nodes) can be implemented in parallel as they touch different files (`Services.tsx` vs `Skills.tsx`).

### Parallel Opportunities

- T003, T004, T005 are all parallelizable within Phase 2.
- Phase 3 (US1) and Phase 4 (US2) can be worked on simultaneously.

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Setup + Foundational (Theme cleanup).
2. Complete US1 (Pricing).
3. Validate: Verify Pricing section looks great in both themes.

### Incremental Delivery

1. Foundation (Neo-brutal gone).
2. US1: Pricing cards fixed.
3. US2: Tech nodes cartoonified.
4. Final Polish.
