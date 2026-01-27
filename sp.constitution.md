<!--
Sync Impact Report:
- Version change: 2.3.0 -> 2.4.0
- List of modified principles:
  - VII. Theme Scoping and Isolation: Completely rewritten to address Cartoonic theme override issue
  - VIII. CSS Variable Governance: Added new principle for scoped theme variables
- Added sections: VIII. CSS Variable Governance, IX. Theme Application Mechanism
- Removed sections: VIII. Cartoonic Theme Light/Dark Mode Toggle (replaced with more specific scoping rules)
- Templates requiring updates:
  - .specify/templates/plan-template.md ⚠ pending
  - .specify/templates/spec-template.md ⚠ pending
  - .specify/templates/tasks-template.md ⚠ pending
- Follow-up TODOs: None
-->

# Rehan Sajid Portfolio Constitution

## Core Principles

### I. Structural Preservation
Do NOT change layout, content, or component structure. Only update styling, theme tokens, animation variants, and small class-level tweaks. All IDs, anchors, and navigation must remain unchanged. No alterations to existing functionality or interactions. This ensures backward compatibility and preserves the existing user experience while allowing visual iteration.

### II. Visual Skin Isolation
Theme work must be token-driven (CSS variables or Tailwind semantic tokens), not hard-coded per-section. Only style/theme changes are permitted: colors, tokens, shadows, borders, typography, animation variants, and small class-level tweaks. All theme variations must be implemented through CSS variables and global styles only. This allows for easy theme switching and maintenance without affecting the underlying component structure.

### III. Theme Consistency
Existing 2 themes must keep working exactly (no regressions). A new 3rd theme must apply across ALL sections (hero → footer), including: Services/Packages, Neural Network nodes, AI Ecosystem, Learning Journey, Testimonials, Footer. This ensures consistent user experience across all sections regardless of theme selection. The Glass Aurora theme must feel "super deep glass": layered translucency + blur + specular highlights + subtle aurora glow.

### IV. Accessibility & Readability
All visual implementations must maintain good contrast ratios and follow WCAG guidelines. Specifically, fix readability issues (contrast) for readable text contrast, visible buttons, and readable icons. Ensure clear visibility of all text elements, icons, and buttons across all themes. This includes ensuring icons are readable in the AI Ecosystem orbit nodes. All primary CTAs/buttons in Glass Aurora must be BLUE (replace any green accents).

### V. Performance & Bundle Management
Keep bundle small: no heavy libs, no images required, no large new components. Use existing stack (Tailwind/Framer Motion if already present). Maintain or improve existing performance characteristics. No performance degradation should occur without explicit justification. All changes must consider impact on loading times, responsiveness, and resource usage. Animations must be tasteful, performant, and reduced-motion friendly. This ensures fast loading and optimal user experience.

### VI. Theme Switcher Consistency
Keep the theme switcher UX simple and consistent with current UI. The theme switching functionality should remain intuitive and maintain the same interaction patterns. This ensures users can seamlessly switch between themes without confusion.

### VII. Theme Scoping and Isolation
Each theme's CSS variables must be properly scoped to prevent cross-contamination. The Cartoonic theme must NOT override global background/surface values that affect other themes. Theme-specific CSS variables must be defined only under their respective theme selectors (e.g., [data-theme="cartoonic"], [data-theme="glass-aurora"], [data-theme="default"]). No theme should define CSS variables in :root that could override another theme's values. This ensures each theme operates independently without affecting others.

### VIII. CSS Variable Governance
CSS variables for themes must follow strict scoping rules: each theme defines its variables only under its specific selector (e.g., [data-theme="cartoonic"]), not in :root unless they are true neutral defaults. Non-cartoonic themes must not inherit cartoonic --bg/--surface values. All theme-specific variables must be prefixed appropriately to indicate their theme scope. This prevents the Cartoonic yellow background (or any theme) from overriding the entire site when not active.

### IX. Theme Application Mechanism
The active theme must be applied via a single, consistent mechanism using data-theme attribute on the html or body element. Only one theme should be active at a time, with CSS variables scoped to that specific theme's selector. The theme switching mechanism must ensure that when a theme becomes inactive, its CSS variables are no longer applied globally. This provides a clean, predictable way to switch between themes without conflicts.

## Additional Constraints

- **Technology Stack**: Use existing Next.js 15.x framework, Tailwind CSS v4, and Framer Motion.
- **Dependency Management**: Use npm with a single `package-lock.json`. Prefer official Next.js and React solutions.
- **Compliance**: All changes must pass accessibility audits and maintain cross-browser compatibility.

## Development Workflow

- **Testing Gates**: Application must build successfully; development server must run without errors.
- **Review Process**: All pull requests must verify compliance with these principles.

## Governance

This constitution supersedes all other development practices for the Rehan Sajid Portfolio project. Amendments require documentation of impact, a version bump, and a clear rationale.

**Version**: 2.4.0 | **Ratified**: 2026-01-27 | **Last Amended**: 2026-01-27