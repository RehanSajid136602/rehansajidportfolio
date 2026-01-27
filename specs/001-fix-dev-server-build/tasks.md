# Tasks: Fix Dev Server Build Issues

**Input**: Design documents from `/specs/001-fix-dev-server-build/`
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

- [x] T001 Check current Node.js and npm versions (Node.js v24.12.0, npm 11.7.0)
- [x] T002 [P] Verify package-lock.json exists (verified)
- [x] T003 [P] Verify project dependencies in package.json (verified)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

Foundational tasks for this project:

- [x] T004 Diagnose current build issue by checking lightningcss binary existence (found at node_modules\lightningcss-win32-x64-msvc\lightningcss.win32-x64-msvc.node)
- [x] T005 [P] Check npm configuration for optional dependencies and ignore-scripts (optional: null, ignore-scripts: false)
- [x] T006 [P] Stop any running development server (confirmed no running server)
- [x] T007 Clean current installation (remove node_modules and .next directories) (completed)
- [x] T008 Configure npm to allow optional dependencies and scripts (note: optional config is deprecated)
- [x] T009 Install dependencies cleanly with npm ci (used npm install instead due to timeout)

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Developer Runs Dev Server Successfully (Priority: P1) 🎯 MVP

**Goal**: Ensure the development server starts without crashes related to lightningcss binary

**Independent Test**: Verify that running `npm run dev` starts the development server successfully without any crashes or errors related to lightningcss.win32-x64-msvc.node

### Implementation for User Story 1

- [ ] T010 [US1] Run development server with `npm run dev` command
- [ ] T011 [US1] Verify server starts without lightningcss binary errors
- [ ] T012 [US1] Confirm Tailwind CSS processes globals.css correctly
- [ ] T013 [US1] Verify site loads correctly in browser without UI changes

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Build Process Completes Successfully (Priority: P2)

**Goal**: Ensure the build process completes without errors related to the lightningcss module

**Independent Test**: Verify that running `npm run build` completes successfully without errors related to the lightningcss module or Tailwind processing

### Implementation for User Story 2

- [ ] T014 [US2] Run production build with `npm run build` command
- [ ] T015 [US2] Verify build completes without lightningcss errors
- [ ] T016 [US2] Test production server with `npm run start`
- [ ] T017 [US2] Confirm all functionality works in production build

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - No UI/Feature Behavior Changes (Priority: P3)

**Goal**: Ensure that fixing the build issues doesn't change any existing UI or functionality

**Independent Test**: Verify that all existing UI elements and functionality remain unchanged after the build fixes are implemented

### Implementation for User Story 3

- [ ] T018 [US3] Compare site appearance before and after fixes
- [ ] T019 [US3] Verify all existing functionality works as before
- [ ] T020 [US3] Run accessibility checks to ensure compliance maintained
- [ ] T021 [US3] Confirm no performance degradation after fixes

**Checkpoint**: All user stories should now be independently functional

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T022 [P] Update documentation with troubleshooting steps in docs/troubleshooting.md
- [ ] T023 Verify all tests pass after changes
- [ ] T024 Run quickstart.md validation steps
- [ ] T025 Create fix log documenting what was checked, what changed, and verification output

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
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - No dependencies on other stories

### Within Each User Story

- Implementation tasks follow the sequence defined for each story
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Launch all implementation tasks for User Story 1 together:
Task: "Run development server with `npm run dev` command in T010"
Task: "Verify server starts without lightningcss binary errors in T011"
Task: "Confirm Tailwind CSS processes globals.css correctly in T012"
Task: "Verify site loads correctly in browser without UI changes in T013"
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