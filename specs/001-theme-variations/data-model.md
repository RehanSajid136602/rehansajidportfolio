# Data Model: Theme Skins via Tokens (No Layout Changes)

## Entities

### Theme State
- **Type**: String enum
- **Values**: "default" | "cartoon" | "neo-brutal"
- **Storage**: localStorage key "portfolio-theme"
- **Validation**: Must be one of the three valid theme values
- **State Transitions**: Cycles through themes in order: default → cartoon → neo-brutal → default

### CSS Variables (Design Tokens)
- **Background Colors**: --background, --foreground, --primary, --secondary, --accent
- **Typography**: --font-sans, --font-mono
- **Border Radius**: --radius-sm, --radius-md, --radius-lg, --radius-xl, --radius-2xl, --radius-full
- **Shadows**: --shadow-sm, --shadow-md, --shadow-lg, --shadow-xl
- **Borders**: --border-color, --border-hover
- **Focus Ring**: --focus-ring
- **Validation**: All CSS variables must have valid CSS values for their respective properties

### Theme Toggle Component
- **Props**: None required
- **State**: Current theme selection
- **Methods**: cycleTheme()
- **Side Effects**: Updates data-theme attribute on documentElement, updates localStorage
- **Validation**: Must maintain accessibility attributes (aria-label)

## Relationships
- Theme State affects all CSS Variables through data-theme attribute selectors
- CSS Variables are mapped to Tailwind utilities via @theme declarations
- Theme Toggle Component manages Theme State lifecycle