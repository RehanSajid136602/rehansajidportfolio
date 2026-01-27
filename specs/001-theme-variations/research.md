# Research: Theme Skins via Tokens (No Layout Changes)

## Overview
The theme system is already implemented with CSS variables, Tailwind v4 @theme tokens, and a ThemeToggle component that cycles through themes and persists selections in localStorage.

## Current Implementation Details

### Decision: CSS Variables + Tailwind v4 @theme
**Rationale**: The project already uses Tailwind CSS v4 with @theme tokens mapping CSS variables to Tailwind utilities. This approach follows the constitution's requirement for CSS variables priority and visual skin isolation.

**Alternatives considered**: 
- Styled components
- CSS Modules
- Emotion

### Decision: Theme Toggle Component
**Rationale**: A ThemeToggle component already exists that cycles through themes (default → cartoon → neo-brutal → default) and persists the selection in localStorage. This satisfies the UX requirements.

**Alternatives considered**:
- Dropdown selector
- Radio buttons
- Separate toggle for each theme

### Decision: Theme Definitions in globals.css
**Rationale**: All three themes (default, cartoon, neo-brutal) are already defined in globals.css using CSS variables with data-theme selectors. This centralizes the token system as required.

**Alternatives considered**:
- Separate CSS files for each theme
- Inline styles
- JavaScript-based theming

### Decision: Theme-Specific Patterns and Animations
**Rationale**: The current implementation includes theme-specific background patterns, animations, and button/card styles that enhance the visual distinction between themes while maintaining the same layout.

**Alternatives considered**:
- Generic patterns for all themes
- No theme-specific styling beyond colors

## Outstanding Requirements
All requirements from the feature specification are already met:
- ✓ Theme cycling functionality
- ✓ localStorage persistence
- ✓ CSS variable-based token system
- ✓ Responsive design compatibility
- ✓ Dark mode support maintained
- ✓ Zero layout changes (same components and structure)
- ✓ Performance preservation
- ✓ Accessibility compliance

## Conclusion
The implementation is already complete and meets all requirements specified in the feature description. The existing system follows the planned approach of using CSS variables, Tailwind v4 @theme tokens, and a centralized token system while preserving the layout and components.