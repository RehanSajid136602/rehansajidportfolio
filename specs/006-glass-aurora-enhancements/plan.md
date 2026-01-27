# Implementation Plan: Glass Aurora Theme Enhancements

**Feature**: Glass Aurora Theme Enhancements
**Branch**: 006-glass-aurora-enhancements
**Created**: 2026-01-27

## Technical Context

### Current Architecture
The application uses a CSS variable-based theme system with data attributes to control theme application. The current theme architecture includes:
- Three themes: `default` (dark pro), `cartoon`, and `glass-aurora`
- Theme state persisted in localStorage under key `portfolio-theme`
- CSS variables defined in `:root` for default theme and `[data-theme="theme-name"]` selectors
- Tailwind mappings via `@theme inline` directive map CSS vars to Tailwind classes
- Existing glass-aurora theme already has basic token set but needs enhancement for deep glass effects

### Technology Stack
- Next.js 15.x
- Tailwind CSS v4
- Framer Motion for animations
- React with TypeScript

### Known Limitations
- Need to identify all green token usage that needs to be replaced with blue in Glass Aurora theme
- Existing glass-aurora theme needs deeper glass effects (layered translucency, frosted blur, specular highlights)
- Animations need to be added that respect reduced-motion preferences
- Component recipes need to be standardized for reusable glass effects

## Constitution Check

### I. Structural Preservation
✅ COMPLIANT - Only styling, theme tokens, animation variants, and small class-level tweaks will be implemented. No changes to layout, content, or component structure. All IDs, anchors, and navigation remain unchanged.

### II. Visual Skin Isolation
✅ COMPLIANT - Theme work will be token-driven using CSS variables and Tailwind semantic tokens. Only style/theme changes (colors, tokens, shadows, borders, typography, animation variants) will be implemented.

### III. Theme Consistency
✅ COMPLIANT - Existing themes will remain fully functional with no regressions. The Glass Aurora theme will have enhanced "super deep glass" effects: layered translucency + blur + specular highlights + subtle aurora glow applied consistently across all sections.

### IV. Accessibility & Readability
✅ COMPLIANT - All visual implementations will maintain good contrast ratios and follow WCAG guidelines. Primary CTAs/buttons in Glass Aurora will be BLUE (replacing any green accents). Animations will respect reduced-motion preferences.

### V. Performance & Bundle Management
✅ COMPLIANT - No heavy libraries will be added. Existing stack (Tailwind/Framer Motion) will be used. Animations will be tasteful, performant, and reduced-motion friendly.

### VI. Theme Switcher Consistency
✅ COMPLIANT - Theme switcher UX will remain simple and consistent with current UI.

### VII. Glass Aurora Theme Specifics
✅ COMPLIANT - The Glass Aurora theme will implement:
- Super deep glass effect: layered translucency with multiple levels of transparency
- Backdrop blur effects for glass-like appearance
- Specular highlights for realistic glass reflections
- Subtle aurora glow with soft radial gradients
- Blue color scheme for all primary CTAs and buttons (replacing any green accents)
- Tasteful animations that are performant and respect reduced-motion preferences

## Gates

### Gate 1: Architecture Compatibility
✅ PASSED - Current theme architecture supports enhancement of glass-aurora theme with deep glass effects

### Gate 2: Constitution Compliance
✅ PASSED - All constitution principles satisfied by proposed approach

### Gate 3: Technical Feasibility
✅ PASSED - All requirements technically achievable with current stack

## Phase 0: Outline & Research

- [ ] Research current green token usage in Glass Aurora theme across all components
- [ ] Identify all CTA classes and primary action buttons that need blue accent replacement
- [ ] Document existing glass-aurora token set and identify gaps for deep glass effects
- [ ] Research best practices for layered translucency and frosted glass effects in CSS
- [ ] Investigate reduced-motion accessibility patterns for animations

## Phase 1: Design & Setup

- [ ] Define enhanced Glass Aurora token set with deep glass tokens (surface/bg/border/highlight/shadows)
- [ ] Define blue accent token set for primary/hover/active/ring states in Glass Aurora
- [ ] Design reusable "deep glass" component recipes (classes like `glass-panel`, `glass-card`, `glass-button`)
- [ ] Create data-model.md with theme token entities
- [ ] Generate contracts for any new theme APIs or interfaces
- [ ] Update agent context with new glass-effect patterns and tokens

## Phase 2: Implementation

- [ ] Implement enhanced glass-aurora theme token set in globals.css
- [ ] Replace green tokens with blue accent tokens in Glass Aurora theme
- [ ] Apply deep glass component recipes to Hero CTAs
- [ ] Apply deep glass component recipes to Services cards
- [ ] Apply deep glass component recipes to Testimonials cards
- [ ] Apply deep glass component recipes to AI Ecosystem components
- [ ] Apply deep glass component recipes to Learning Journey components
- [ ] Apply deep glass component recipes to Footer pill input
- [ ] Add motion effects: hover specular sweep, shimmer gradient, subtle float
- [ ] Gate animations by `prefers-reduced-motion`
- [ ] Validate across pages and themes for regressions

## Phase 3: Validation & Testing

- [ ] Comprehensive testing across all pages with Glass Aurora theme
- [ ] Verify no regressions in other themes (default, cartoon)
- [ ] Accessibility testing with reduced-motion enabled
- [ ] Cross-browser compatibility testing
- [ ] Performance impact assessment
- [ ] Theme switching functionality validation
- [ ] Contrast validation for accessibility compliance

## Implementation Steps

### Step 1: Audit Current State
- Identify all green token usage in Glass Aurora theme
- Document current CTA classes and primary action buttons

### Step 2: Define Enhanced Token Set
- Create deep glass tokens for surface, background, border, highlight, and shadows
- Define blue accent tokens for primary, hover, active, and focus ring states

### Step 3: Create Reusable Component Recipes
- Develop standardized classes for glass-panel, glass-card, glass-button
- Ensure recipes are flexible and reusable across components

### Step 4: Apply Enhancements Across Sections
- Update Hero CTAs with deep glass effects and blue accents
- Update Services cards with deep glass effects
- Update Testimonials cards with deep glass effects
- Update AI Ecosystem components with deep glass effects
- Update Learning Journey components with deep glass effects
- Update Footer pill input with deep glass effects

### Step 5: Add Motion Effects
- Implement hover specular sweep animations
- Add shimmer gradient effects
- Include subtle float animations for orbit/nodes
- Ensure all animations respect reduced-motion preferences

### Step 6: Validation
- Test theme consistency across all pages
- Verify no regressions in other themes
- Confirm accessibility compliance
- Validate performance impact