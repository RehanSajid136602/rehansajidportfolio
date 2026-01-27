# Implementation Plan: Glass Aurora Theme Refinement

**Branch**: `005-glass-aurora-theme` | **Date**: 2026-01-27 | **Spec**: [specs/005-glass-aurora-theme/spec.md](./spec.md)
**Input**: Refine Learning Journey background and WhatsApp FAB styling for Glass Aurora theme.

## Summary
Audit and update Learning Journey section to inherit aurora backgrounds and tokenize the WhatsApp FAB to use blue accents in the new theme.

## Technical Context
**Language/Version**: TypeScript / Next.js 15.x
**Primary Dependencies**: Tailwind CSS v4, Framer Motion
**Target Platform**: Web
**Performance Goals**: 60fps animations, zero layout shift
**Constraints**: No component structure changes (Constitution Principle I)

## Constitution Check
- [x] Structural Preservation: No changes to layout/content.
- [x] Visual Skin Isolation: Token-driven CSS variable updates.
- [x] Theme Consistency: Applied to Learning Journey and WhatsApp FAB.
- [x] Accessibility & Readability: Blue CTAs mandated for Glass Aurora.
- [x] Performance: Using existing Tailwind classes.

## Project StructureRefinement
### Documentation
```text
specs/005-glass-aurora-theme/
├── plan.md              # This file
├── research.md          # Audit and decision log
├── data-model.md        # UI state transitions
└── quickstart.md        # Verification guide
```

### Source Code
```text
src/
├── components/
│   ├── sections/
│   │   └── Experience.tsx # Learning Journey
│   └── ui/
│       └── StickyWhatsApp.tsx # WhatsApp FAB
└── app/
    └── globals.css      # Theme token definitions
```

## Execution Phases

### Phase 0: Audit & Variable Definition
- **Goal**: Establish the CSS variable mapping for FAB and Section backgrounds.
- **Touched Files**: `src/app/globals.css`
- **Rollback**: Revert `globals.css` changes.

### Phase 1: Section Background Refinement
- **Goal**: Update Learning Journey to use transparent background in Glass Aurora.
- **Touched Files**: `src/components/sections/Experience.tsx`
- **Rollback**: Reset `className` to original `bg-[var(--section-bg)]`.

### Phase 2: WhatsApp FAB Tokenization
- **Goal**: Replace hard-coded green with blue theme tokens.
- **Touched Files**: `src/components/ui/StickyWhatsApp.tsx`
- **Rollback**: Revert classes to `bg-green-500`.

## Validation Steps
1. Toggle to `glass-aurora`.
2. Verify Learning Journey background is transparent.
3. Verify WhatsApp FAB is blue.
4. Toggle back to `default` and `cartoon` to ensure no regressions.