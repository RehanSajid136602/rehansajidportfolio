# Track Plan: Phase 1 - Visual Polish

## Phase 1: Setup & Infrastructure
- [x] Task: Install necessary dependencies
    - [x] Install `canvas-confetti` and its types.
    - [x] Verify `framer-motion` and `lucide-react` versions.
- [x] Task: Create new directory structure
    - [x] Create `src/components/effects` for logic/visual-only components.
    - [x] Create `src/components/ui` if not fully populated.
- [x] Task: Conductor - User Manual Verification 'Setup & Infrastructure' (Protocol in workflow.md)

## Phase 2: Glitch Text Component
- [x] Task: Create `GlitchText` component
    - [x] Write the basic React component structure in `src/components/effects/GlitchText.tsx`.
    - [x] Define `glitchVariants` using Framer Motion (skew, x-offset, text-shadow).
    - [x] Implement the typewriter orchestration logic.
    - [x] Add `prefers-reduced-motion` check to disable glitching for accessibility.
- [x] Task: Integrate into Hero Section
    - [x] Import `GlitchText` into `src/components/sections/Hero.tsx`.
    - [x] Replace the static "Rehan" heading with the new component.
    - [x] Verify responsiveness on mobile.
- [x] Task: Conductor - User Manual Verification 'Glitch Text Component' (Protocol in workflow.md)

## Phase 3: Rocket Contact Button
- [x] Task: Create `RocketButton` component
    - [x] Scaffold `src/components/ui/RocketButton.tsx`.
    - [x] Implement the `handleSend` logic with `useAnimation` for the rocket launch trajectory.
    - [x] Integrate `canvas-confetti` to trigger on launch completion.
    - [x] Add state handling (Idle -> Launching -> Success -> Reset).
- [x] Task: Update Contact Section
    - [x] Import `RocketButton` into `src/components/sections/Contact.tsx`.
    - [x] Replace the existing "Copy Email" button or add this as a primary action for a form (or adapt the existing interaction).
- [x] Task: Conductor - User Manual Verification 'Rocket Contact Button' (Protocol in workflow.md)

## Phase 4: Cursor Stardust
- [x] Task: Create `CursorStardust` component
    - [x] Build `src/components/effects/CursorStardust.tsx`.
    - [x] Implement a custom hook `useMousePosition`.
    - [x] Create a particle system (using an array of motion divs or a small canvas) that spawns particles at mouse coordinates.
    - [x] Add logic to remove particles after their lifecycle (1s).
    - [x] Ensure it is disabled on touch devices.
- [x] Task: Global Integration
    - [x] Add `CursorStardust` to `src/app/layout.tsx` so it persists across the entire app.
    - [x] Ensure `z-index` places it behind interactive elements but visible.
- [x] Task: Conductor - User Manual Verification 'Cursor Stardust' (Protocol in workflow.md)

## Phase 5: Final Review & Optimization
- [x] Task: Accessibility Check
    - [x] Test with "Reduce Motion" enabled in OS settings.
    - [x] Ensure keyboard navigation still works for the Contact button.
- [x] Task: Performance Check
    - [x] Run a local build `npm run build` and `npm start`.
    - [x] Check console for hydration errors.
    - [x] Verify that the cursor effect doesn't cause frame drops.
- [x] Task: Conductor - User Manual Verification 'Final Review & Optimization' (Protocol in workflow.md)
