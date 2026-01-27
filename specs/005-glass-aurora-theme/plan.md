# Implementation Plan: Cartoonic Light/Dark Mode

**Branch**: `005-glass-aurora-theme` | **Date**: 2026-01-27 | **Spec**: [specs/005-glass-aurora-theme/spec.md](./spec.md)
**Input**: Implement Light/Dark mode specific to the Cartoon theme.

## Summary
Introduce a variant system for the Cartoon theme using `data-variant="light|dark"`. Add a secondary toggle UI that only appears when the Cartoon theme is active. Define new dark-mode tokens for Cartoonic navy/blue style while preserving thick borders and shadows.

## Technical Context
**Language/Version**: TypeScript / Next.js 15.x
**Primary Dependencies**: Tailwind CSS v4, Framer Motion, Lucide React
**Project Type**: Web Application
**Performance Goals**: Zero layout shift on variant switch.
**Constraints**: Variant toggle MUST only show when theme is `cartoon`.

## Constitution Check
- [x] Structural Preservation: No changes to layout or component structure.
- [x] Visual Skin Isolation: Token-driven switch using `data-variant`.
- [x] Theme Consistency: Existing themes (Default, Glass Aurora) remain untouched.
- [x] Accessibility & Readability: Dark mode for cartoon will be tested for contrast.
- [x] Performance: Uses CSS variables for low-overhead switching.

## Project Structure
### Documentation
```text
specs/005-glass-aurora-theme/
├── plan.md              # This file
├── research.md          # Audit and decision log
├── data-model.md        # State and variant definitions
└── quickstart.md        # Verification guide
```

### Source Code
```text
src/
├── components/
│   └── ui/
│       └── ThemeToggle.tsx # Add sub-toggle logic
└── app/
    └── globals.css      # Add [data-variant="dark"] tokens
```

## Phase 2: Implementation Strategy

### 1. Token Expansion (Phase 2.1)
- **Goal**: Add dark variant tokens for the Cartoon theme.
- **Touched Files**: `src/app/globals.css`
- **Method**: Add `[data-theme="cartoon"][data-variant="dark"]` selector.
- **Tokens to Add**:
  - `--background`: Navy/Deep Purple (e.g. `#1e1b4b`)
  - `--foreground`: Off-white (e.g. `#f8fafc`)
  - `--primary`: Bright Blue or Indigo
  - `--secondary`: Muted Lavender
  - `--border-color`: Black (remains thick)
  - `--shadow-*`: Black (remains offset)

### 2. Logic & Toggle UI (Phase 2.2)
- **Goal**: Implement variant state and UI toggle.
- **Touched Files**: `src/components/ui/ThemeToggle.tsx`
- **Logic**:
  - Add `cartoonVariant` state (`"light" | "dark"`).
  - Load/Save to `localStorage` key `cartoon-variant`.
  - Effect: Apply `data-variant` to `documentElement` only if `theme === "cartoon"`.
- **UI**:
  - Add a small Sun/Moon button next to the main toggle.
  - Animate visibility with Framer Motion (only show when `theme === "cartoon"`).

### 3. Persistence & Clean-up (Phase 2.3)
- **Goal**: Ensure clean switching.
- **Logic**: When theme cycles to `default` or `glass-aurora`, remove `data-variant` attribute.

## Rollback Plan
- Revert `globals.css` selectors.
- Revert `ThemeToggle.tsx` to original `cycleTheme` logic and single-button UI.