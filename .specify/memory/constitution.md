<!--
Sync Impact Report:
- Version change: 2.1.0 -> 2.2.0
- List of modified principles:
  - I. Structural Preservation: Updated to emphasize no layout/content/component structure changes.
  - II. Visual Skin Isolation: Updated to include animation variants and class-level tweaks.
  - III. Theme Consistency: Updated to include Glass Aurora theme specifics.
  - IV. Accessibility & Readability: Updated to include blue CTA guidance.
  - V. Performance & Bundle Management: Updated to include animation performance considerations.
- Added sections: VII. Glass Aurora Theme Specifics
- Removed sections: None
- Templates requiring updates:
  - .specify/templates/plan-template.md (Updated Constitution Check) ✅ updated
  - .specify/templates/spec-template.md (Updated Requirement placeholders) ✅ updated
  - .specify/templates/tasks-template.md (Updated Foundational tasks) ✅ updated
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

### VII. Glass Aurora Theme Specifics
The Glass Aurora theme must implement the following characteristics:
- Super deep glass effect: layered translucency with multiple levels of transparency
- Backdrop blur effects for glass-like appearance
- Specular highlights for realistic glass reflections
- Subtle aurora glow with soft radial gradients
- Blue color scheme for all primary CTAs and buttons (replacing any green accents)
- Tasteful animations that are performant and respect reduced-motion preferences

## Additional Constraints

- **Technology Stack**: Use existing Next.js 15.x framework, Tailwind CSS v4, and Framer Motion.
- **Dependency Management**: Use npm with a single `package-lock.json`. Prefer official Next.js and React solutions.
- **Compliance**: All changes must pass accessibility audits and maintain cross-browser compatibility.

## Development Workflow

- **Testing Gates**: Application must build successfully; development server must run without errors.
- **Review Process**: All pull requests must verify compliance with these principles.

## Governance

This constitution supersedes all other development practices for the Rehan Sajid Portfolio project. Amendments require documentation of impact, a version bump, and a clear rationale.

**Version**: 2.2.0 | **Ratified**: 2026-01-26 | **Last Amended**: 2026-01-27