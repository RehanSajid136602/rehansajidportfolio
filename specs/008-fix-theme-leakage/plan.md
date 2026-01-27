# Implementation Plan: Fix Theme Background Leakage

**Feature**: Fix Theme Background Leakage
**Branch**: 008-fix-theme-leakage
**Date**: 2026-01-27

## Technical Context

### Current Situation
- Themes are applied using `data-theme` attribute on `document.documentElement`.
- `globals.css` defines variables in `:root` and `[data-theme="..."]` selectors.
- The `cartoon` theme has multiple variants (`light`, `dark`).
- Possible cause of leakage:
  - Variables defined in `:root` that are intended for specific themes.
  - Selector overlap or broad selectors (e.g., `body` styles defined outside theme blocks).
  - Specificity issues where cartoon styles override others.

### Proposed Solution
1. **Audit**: Use browser DevTools (if available) or code search to find where yellow (`#fef3c7`) is defined and used.
2. **Re-scoping**: Move all cartoon-specific variables out of `:root` (if any) and ensure they are exclusively under `[data-theme="cartoon"]`.
3. **Selector Refinement**: Ensure that pattern backgrounds (like the cartoon polka dots) are strictly scoped.
4. **Hydration Check**: Ensure the theme is applied early enough to prevent a flash of unstyled/incorrectly styled content.

## Strategy

- **Constraint**: Do not remove the cartoon theme features; only fix the leakage.
- **Approach**: Incremental fix. First isolate the tokens, then verify the application.

## Risk Analysis
- **Risk**: Fixing leakage might break the cartoon theme itself if dependencies are hidden.
- **Mitigation**: Verify the cartoon theme after every change to the tokens.
