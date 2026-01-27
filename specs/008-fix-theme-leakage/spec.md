# Feature Specification: Fix Theme Background Leakage

**Feature Branch**: `008-fix-theme-leakage`
**Created**: 2026-01-27
**Status**: Active

## Problem Description
Users have reported that the "Cartoonic" theme's yellow background color (`#fef3c7` or similar) is leaking into other themes like "Glass Aurora" and "Dark Pro". This suggests that the theme tokens are either defined globally or the selectors used to scope them are not sufficiently specific or are incorrectly applied.

## Success Criteria
- [ ] When theme is NOT `cartoon`, the page background is NOT yellow.
- [ ] The `cartoon` theme correctly displays its yellow background.
- [ ] No sections (Hero, AI Ecosystem, Testimonials, etc.) show unintended yellow highlights in non-cartoon themes.
- [ ] Theme switching remains functional and persistent.
- [ ] No hardcoded colors are reintroduced; the system continues to use semantic tokens.

## User Stories

### User Story 1 - Clean Theme Isolation (Priority: P1)
As a user, I want to switch between themes and see only the colors associated with my selected theme, so that the visual experience is consistent and professional.

**Independent Test**:
1. Select "Dark Pro" theme. Verify background is dark (#050505).
2. Select "Glass Aurora" theme. Verify background is glass-morphic/blueish.
3. Select "Cartoon" theme. Verify background is yellow.

## Requirements

### Functional Requirements
- **FR-001**: Ensure `:root` only contains neutral or "Dark Pro" defaults.
- **FR-002**: Scope all cartoon-specific tokens strictly to `[data-theme="cartoon"]`.
- **FR-003**: Ensure theme application logic (data attributes) is robust across SSR and hydration.
