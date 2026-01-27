# Implementation Plan: Fix Yellow Background Replacing Black

**Branch**: `008-fix-yellow-background-override` | **Date**: 2026-01-27 | **Spec**: [link to theme bug spec]
**Input**: Feature specification from `/specs/[###-feature-name]/spec.md`

**Note**: This template is filled in by the `/sp.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Address the issue where the Cartoon/Cartoonic theme yellow background overrides the entire site, preventing other themes from displaying their intended backgrounds. The fix involves proper CSS variable scoping to ensure each theme's variables are only applied when that theme is active.

## Technical Context

**Language/Version**: TypeScript/JavaScript, Next.js 15.x, Tailwind CSS v4
**Primary Dependencies**: Tailwind CSS, Framer Motion
**Storage**: Local storage for theme persistence
**Testing**: Manual testing across all themes
**Target Platform**: Web browser
**Project Type**: Single web application
**Performance Goals**: Maintain current performance characteristics
**Constraints**: No layout changes, preserve existing functionality
**Scale/Scope**: Single portfolio website with 3 themes

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] Structural Preservation: No changes to layout, structure, spacing, or content.
- [x] Visual Skin Isolation: Only style/theme changes (colors, tokens, shadows, borders, typography).
- [x] Token Discipline: No hard-coded colors or hex values that bypass theme tokens.
- [x] Theme Consistency: Existing 2 themes preserved; new 3rd theme applies across ALL sections.
- [x] Glass Aurora Specifics: Deep glass layering, blur, specular highlights, subtle aurora glow, blue CTAs.
- [x] Accessibility & Readability: WCAG contrast for text/icons/buttons across all themes.
- [x] Performance & Bundle Management: No heavy libs or perf regressions; reduced-motion friendly.
- [x] Theme Switcher Consistency: Theme switcher UX remains simple and unchanged.
- [x] Clear Justification: Any exceptions are documented and justified.

## Project Structure

### Documentation (this feature)

```text
specs/008-fix-yellow-background-override/
|-- plan.md              # This file (/sp.plan command output)
|-- research.md          # Phase 0 output (/sp.plan command)
|-- data-model.md        # Phase 1 output (/sp.plan command)
|-- quickstart.md        # Phase 1 output (/sp.plan command)
|-- contracts/           # Phase 1 output (/sp.plan command)
`-- tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)

```text
src/
|-- app/
|   `-- globals.css      # Theme CSS variables and selectors
|-- components/
    `-- ui/
        `-- ThemeToggle.tsx  # Theme switching logic
```

## Phase A — Diagnose (find the source of yellow override)

### A.1 Locate where CSS variables are defined
- **File**: `src/app/globals.css`
- **Issue Found**: The `[data-theme="cartoon"]` block defines `--background: #fef3c7` (yellow) which may be overriding other themes
- **Selector Analysis**: Need to ensure each theme's CSS variables are properly scoped

### A.2 Identify selectors for theme tokens
- **Current Issue**: Cartoon theme tokens defined in `[data-theme="cartoon"]` block but may have incorrect specificity or cascade order
- **Check for**: Unscoped cartoonic tokens in `:root`, `body`, `html`, or unscoped selectors

### A.3 Inspect the theme application mechanism
- **File**: `src/components/ui/ThemeToggle.tsx`
- **Mechanism**: Sets `data-theme` attribute on `document.documentElement`
- **Verification**: Confirm it changes correctly when switching themes

### A.4 Search for --bg/--background usage
- **Components**: Using `bg-[var(--background)]`, `bg-[var(--section-bg)]`, etc.
- **Issue**: If cartoon theme sets global variables incorrectly, they persist across themes

### A.5 Confirm CSS cascade order
- **Current Order**: `:root` (default) → `[data-theme="cartoon"]` → `[data-theme="cartoon"][data-variant="light"]` → `[data-theme="cartoon"][data-variant="dark"]` → `[data-theme="glass-aurora"]`
- **Potential Issue**: Later stylesheets may override earlier ones incorrectly

### A.6 Check for inline styles or Tailwind classes forcing yellow
- **Analysis**: Components use token-driven backgrounds like `bg-[var(--section-bg)]`

## Phase B — Fix (root-cause)

### B.1 Move cartoon-specific tokens into proper scoped block
- **Action**: Ensure all cartoon theme variables are properly contained within `[data-theme="cartoon"]` block
- **Location**: `src/app/globals.css`

### B.2 Ensure glass-aurora and default themes have their own --bg tokens
- **Action**: Verify that each theme defines its own background variables within its selector
- **Location**: `src/app/globals.css`

### B.3 Add safe neutral defaults in :root only if required
- **Action**: Only true neutral defaults should be in `:root`, not theme-specific values
- **Location**: `src/app/globals.css`

### B.4 Ensure theme toggle sets the correct attribute
- **Action**: Verify ThemeToggle component correctly applies `data-theme` attribute to the right element
- **Location**: `src/components/ui/ThemeToggle.tsx`

## Phase C — Verify

### C.1 Toggle all themes and confirm backgrounds
- **Test**: Cartoon theme shows yellow background when active
- **Test**: Default theme shows dark/black background when active
- **Test**: Glass-aurora theme shows glass effect when active

### C.2 No layout change, no section regressions
- **Test**: All sections maintain their structure and functionality
- **Test**: Theme switching works smoothly without flickering or incorrect states

## Files to Touch

1. `src/app/globals.css` - Fix CSS variable scoping
2. `src/components/ui/ThemeToggle.tsx` - Verify theme application logic

## Rollback Plan

- **Step 1**: Git stash current changes or switch to backup branch
- **Step 2**: Restore previous version of globals.css
- **Step 3**: Verify all themes work as before the change
- **Step 4**: If needed, deploy previous stable version

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [N/A] | [No violations identified] | [All constitution principles maintained] |