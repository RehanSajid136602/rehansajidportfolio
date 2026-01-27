# Research: Glass Aurora Theme Enhancements

## Current Green Token Usage in Glass Aurora Theme

### Identified Green Elements to Replace with Blue
- Primary action buttons that use green accents
- CTAs that currently have green color schemes
- Any other green-themed elements in Glass Aurora theme

### Component Classes Analysis
- Primary action buttons typically use classes like `bg-green-500`, `hover:bg-green-600`
- Need to replace with blue variants like `bg-blue-500`, `hover:bg-blue-600` in Glass Aurora context

## Best Practices for Layered Translucency and Frosted Glass Effects

### CSS Implementation Patterns
- Use multiple layered backgrounds with varying opacity for true glass effect
- Combine `backdrop-filter: blur()` with semi-transparent backgrounds
- Apply subtle gradients for inner lighting effects
- Use `box-shadow` for outer glow and depth perception
- Implement `inset-box-shadow` for inner depth effects

### Recommended Token Structure for Deep Glass
- `--glass-base`: Main semi-transparent background
- `--glass-highlight`: Top layer for specular highlights
- `--glass-border`: Subtle border for depth
- `--glass-shadow`: Soft outer shadow
- `--glass-inner-shadow`: Faint inner shadow for depth

## Reduced-Motion Accessibility Patterns

### CSS Media Query Implementation
- Use `@media (prefers-reduced-motion: reduce)` to disable or limit animations
- Alternative static states should maintain visual hierarchy
- Ensure interactive elements remain clearly distinguishable without animations

### Animation Best Practices
- Use `will-change` property judiciously for performance
- Implement CSS transforms instead of animating layout properties
- Use `animation-timeline` for scroll-linked animations when appropriate
- Limit animation duration and easing for smooth performance

## Reusable Glass Component Recipe

### Class Structure for Glass Effects
- `glass-panel`: For main content containers
- `glass-card`: For card-based components
- `glass-button`: For interactive elements with glass effect
- Each class should incorporate layered translucency, blur, and subtle animations

## Decision Log

### Decision: Token-Driven Glass Effects
- **Rationale**: Following existing theme architecture which uses CSS variables for consistency
- **Implementation**: Define comprehensive token set for glass effects that can be reused across components

### Decision: Blue Accent Replacement
- **Rationale**: Per user requirements, all primary actions in Glass Aurora theme must use blue instead of green
- **Implementation**: Create blue-specific tokens that apply only when `data-theme="glass-aurora"`

### Decision: Animation Gating
- **Rationale**: Critical for accessibility compliance with users who have motion sensitivity
- **Implementation**: Use `prefers-reduced-motion` media queries to disable or limit animations

### Alternatives Considered
- **Inline Styles vs CSS Variables**: Chose CSS variables for consistency with existing theme system
- **Animation Libraries vs CSS Native**: Chose CSS native animations for performance and reduced bundle size
- **Hardcoded Colors vs Semantic Tokens**: Chose semantic tokens for maintainability and theme consistency