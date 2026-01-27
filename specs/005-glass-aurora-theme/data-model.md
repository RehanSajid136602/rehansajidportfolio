# Data Model: Cartoonic Variants

## UI Entities

### Theme Configuration
- **Type**: `Theme`
- **Values**: `"default" | "cartoon" | "glass-aurora"`
- **Storage Key**: `"portfolio-theme"`

### Cartoon Variant
- **Type**: `"light" | "dark"`
- **Values**:
  - `"light"`: Current amber/yellow cartoon theme.
  - `"dark"`: New navy/blue/purple cartoon theme with high contrast.
- **Trigger**: Only active when `Theme == "cartoon"`.
- **Storage Key**: `"cartoon-variant"`

## State Transitions

### Theme Switching
- Cycle: `Dark Pro` -> `Cartoon` -> `Glass Aurora` -> `Dark Pro`.
- Persistence: Saved globally.

### Cartoon Variant Toggling
- User clicks "Mode" button (only visible in Cartoon mode).
- State toggles between `light` and `dark`.
- persistence: Saved specifically for cartoon mode.

## Data Schema (Local Storage)
```json
{
  "portfolio-theme": "cartoon",
  "cartoon-variant": "dark"
}
```