# Quickstart Guide: Theme Skins via Tokens (No Layout Changes)

## Overview
This feature implements two additional visual themes (Cartoon and Neo-Brutal) for the portfolio while preserving the same layout and components. The theme system uses CSS variables and Tailwind v4 @theme tokens for centralized token management.

## How to Use

### Switching Themes
1. Look for the theme toggle button in the top-right corner of the page
2. Click the button to cycle through themes: Default → Cartoon → Neo-Brutal → Default
3. The selected theme will persist across page reloads and browser sessions

### Theme Characteristics

#### Default (Dark Pro)
- Dark background (#050505) with light text (#fafafa)
- Subtle shadows and rounded corners
- Professional color scheme

#### Cartoon Theme
- Light background with playful styling
- Increased border radii for rounded elements
- Strong outlines and "sticker" shadows
- Subtle polka dot background pattern
- Playful font styling

#### Neo-Brutal Theme
- High-contrast, angular design
- Sharp corners (no border radius)
- Heavy shadows and thick borders
- Checkerboard grid background pattern
- Bold, direct styling

## Technical Implementation

### CSS Variables
All themes are defined using CSS variables in `src/app/globals.css`:
- Default theme uses `:root` selector
- Cartoon theme uses `[data-theme="cartoon"]` selector
- Neo-Brutal theme uses `[data-theme="neo-brutal"]` selector

### Tailwind Integration
Tailwind v4 @theme tokens map CSS variables to Tailwind utilities:
```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  /* ... other mappings */
}
```

### Theme Persistence
Themes are persisted using localStorage:
- Key: `portfolio-theme`
- Values: `"default"`, `"cartoon"`, or `"neo-brutal"`

### Theme Toggle Component
Located at `src/components/ui/ThemeToggle.tsx`:
- Cycles through themes on click
- Updates `data-theme` attribute on the `<html>` element
- Persists selection to localStorage
- Includes accessibility attributes

## Validation
- All themes maintain the same layout and component structure
- Responsive design works across all themes
- Accessibility features (focus rings) are preserved
- Performance is maintained across all themes