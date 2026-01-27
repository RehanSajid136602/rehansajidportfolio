# Research: Cartoonic Theme Light/Dark Mode Implementation

## Current Theme Architecture Analysis

### Theme Storage and State Management
The current theme system stores the selected theme in localStorage under the key "portfolio-theme". The theme is applied by setting a data-theme attribute on the root HTML element. The system currently supports three themes: "default", "cartoon", and "glass-aurora".

### CSS Variable System
The theme system uses CSS variables defined in :root for default values and in [data-theme="theme-name"] selectors for theme-specific overrides. This token-driven approach is ideal for implementing theme variants as we can extend it with additional selectors like [data-theme="cartoon"][data-variant="light"].

### Existing Cartoon Theme Implementation
The cartoon theme currently uses a set of CSS variables that create a distinctive aesthetic with bright colors and cartoon-like styling. It includes custom fonts, border styles, and shadow effects that differentiate it from other themes.

## Technical Implementation Approach

### Dual Attribute Strategy
Using both `data-theme` and `data-variant` attributes allows for clean separation of base theme and variant. This approach ensures:
- Base themes remain isolated from variant changes
- Variants only apply when their base theme is active
- Easy extensibility for other themes to have variants in the future

### CSS Variable Token Strategy
Instead of hardcoding values, we'll define comprehensive token sets for both cartoon light and dark variants. This ensures:
- Consistent styling across all components
- Easy maintenance and updates
- Proper theme isolation

## Best Practices for Light/Dark Modes

### Accessibility Considerations
- Ensure WCAG AA contrast ratios are maintained in both variants
- Provide sufficient contrast between text and background
- Consider color blindness accessibility in both light and dark modes
- Respect system preferences for reduced motion

### Performance Considerations
- Use CSS variables for performance efficiency
- Leverage hardware acceleration for animations
- Minimize repaint/reflow triggers
- Keep bundle size minimal by using CSS-native features

### User Experience Patterns
- Smooth transitions between theme variants
- Clear visual indicators of current state
- Intuitive toggle placement and interaction
- Consistent behavior across all sections

## Decision Log

### Decision: Dual Attribute System (data-theme + data-variant)
- **Rationale**: Allows for theme-variant separation while maintaining compatibility with existing system
- **Implementation**: Use [data-theme="cartoon"][data-variant="light|dark"] selectors in CSS

### Decision: CSS Variable Token Approach
- **Rationale**: Follows existing architecture pattern and ensures consistency across components
- **Implementation**: Define comprehensive token sets for both light and dark cartoon variants

### Decision: Toggle Visibility Logic
- **Rationale**: Prevents confusion and maintains clean UI by only showing variant toggle when relevant
- **Implementation**: Conditionally render light/dark toggle only when cartoon theme is active

### Decision: Separate Persistence Keys
- **Rationale**: Keeps theme and variant storage logically separated and prevents conflicts
- **Implementation**: Store variant in "cartoonic-mode" key, separate from main "portfolio-theme" key

### Alternatives Considered
- **Single attribute with compound values**: Discarded because it would complicate selectors and reduce extensibility
- **Hard-coded color values**: Discarded because it would violate the token-driven constitution principle
- **Separate theme entries**: Discarded because it would increase complexity and not align with variant concept
- **JavaScript-based theming**: Discarded because CSS variables offer better performance and are more maintainable