# Data Model: Glass Aurora Theme Tokens

## Theme Token Entities

### Glass Aurora Theme Token Set
- **Name**: glass-aurora-theme
- **Fields**:
  - `--glass-base`: Main semi-transparent background color for glass panels
  - `--glass-highlight`: Highlight color for top-layer glass effects
  - `--glass-border`: Subtle border color for glass depth
  - `--glass-shadow`: Soft shadow for glass depth perception
  - `--glass-inner-shadow`: Inner shadow for glass depth
  - `--glass-frosted-blur`: Blur amount for frosted glass effect
  - `--glass-surface`: Surface layer for glass effect
  - `--blue-accent-primary`: Primary blue accent color for CTAs
  - `--blue-accent-hover`: Hover state blue accent color
  - `--blue-accent-active`: Active state blue accent color
  - `--blue-accent-focus`: Focus state blue accent/ring color
  - `--glass-specular-highlight`: Color for specular highlights
  - `--glass-sheen`: Color for subtle sheen effect on hover
- **Relationships**: Extends base theme tokens defined in `:root`

### Glass Component Recipe
- **Name**: glass-component-recipe
- **Fields**:
  - `glass-panel`: CSS class for glass effect panels
  - `glass-card`: CSS class for glass effect cards
  - `glass-button`: CSS class for glass effect buttons
  - `glass-animation-hover`: Animation class for hover effects
  - `glass-animation-float`: Animation class for subtle float effect
  - `glass-animation-shimmer`: Animation class for shimmer effect
- **Relationships**: Uses theme tokens from glass-aurora-theme

### Theme State Entity
- **Name**: theme-state
- **Fields**:
  - `current-theme`: Current active theme ('default', 'cartoon', 'glass-aurora')
  - `theme-storage-key`: LocalStorage key for theme persistence ('portfolio-theme')
  - `theme-data-attribute`: HTML data attribute for theme application ('data-theme')
- **Relationships**: Links to theme token sets to apply appropriate styling

## Validation Rules
- All glass effect components must respect `prefers-reduced-motion` setting
- Blue accent tokens must only apply in Glass Aurora theme context
- Glass effects must maintain WCAG AA contrast ratios
- Theme tokens must follow existing CSS variable naming conventions
- Component recipes must be reusable across different sections

## State Transitions
- Theme can transition from any state to any other theme state
- Glass effects activate only when theme state is 'glass-aurora'
- Animation effects disable when user prefers reduced motion