# Data Model: Cartoonic Theme Light/Dark Mode

## Overview
This document defines the data structures and entities for the cartoonic theme light/dark mode implementation. It describes the theme state management and token system.

## Entities

### Theme State
- **Name**: ThemeState
- **Attributes**:
  - `currentTheme`: Theme type (default | cartoon | glass-aurora)
  - `cartoonVariant`: Cartoon variant type (light | dark | null)
  - `themeStorageKey`: String ("portfolio-theme")
  - `variantStorageKey`: String ("cartoonic-mode")
  - `themeAttributeName`: String ("data-theme")
  - `variantAttributeName`: String ("data-variant")

### Cartoon Theme Variant
- **Name**: CartoonVariant
- **Attributes**:
  - `id`: Variant identifier (light | dark)
  - `displayName`: User-facing name ("Light Mode" | "Dark Mode")
  - `icon`: Associated icon component (SunMedium | MoonStar)
  - `cssVariables`: Map of CSS variable definitions for this variant
  - `appliesToTheme`: Theme this variant belongs to ("cartoon")

### Theme Token Set
- **Name**: ThemeTokenSet
- **Attributes**:
  - `name`: Token set identifier (e.g., "cartoon-light-tokens", "cartoon-dark-tokens")
  - `background`: CSS variable value for background color
  - `foreground`: CSS variable value for foreground/text color
  - `primary`: CSS variable value for primary accent
  - `secondary`: CSS variable value for secondary elements
  - `accent`: CSS variable value for accent colors
  - `cardBg`: CSS variable value for card backgrounds
  - `cardBorder`: CSS variable value for card borders
  - `sectionBg`: CSS variable value for section backgrounds
  - `borderColor`: CSS variable value for border colors
  - `borderHover`: CSS variable value for hover border states
  - `shadowValues`: Map of different shadow definitions
  - `radiusValues`: Map of different radius definitions

### Theme Toggle Configuration
- **Name**: ThemeToggleConfig
- **Attributes**:
  - `isVisible`: Boolean indicating if toggle should be visible
  - `isEnabled`: Boolean indicating if toggle should be interactive
  - `currentTheme`: Reference to active theme
  - `availableVariants`: Array of available variants for current theme
  - `selectedVariant`: Currently selected variant (if applicable)
  - `toggleAction`: Function to cycle through variants

## Relationships

- ThemeState manages the relationship between currentTheme and cartoonVariant
- ThemeState references CartoonVariant entities when currentTheme is "cartoon"
- ThemeTokenSet entities are applied based on the combination of currentTheme and cartoonVariant
- ThemeToggleConfig determines UI behavior based on ThemeState

## States and Transitions

### Theme State Transitions
- Initial State: currentTheme = "default", cartoonVariant = null
- When user selects "cartoon": currentTheme = "cartoon", cartoonVariant = null (defaults to light)
- When user toggles cartoon variant: cartoonVariant cycles between "light" and "dark"
- When user switches away from "cartoon": cartoonVariant resets to null
- On page load: State restored from localStorage values

### Variant Application
- When currentTheme is "cartoon" and cartoonVariant is "light":
  - Apply [data-theme="cartoon"][data-variant="light"] CSS rules
- When currentTheme is "cartoon" and cartoonVariant is "dark":
  - Apply [data-theme="cartoon"][data-variant="dark"] CSS rules
- When currentTheme is not "cartoon":
  - Ignore cartoonVariant value completely
  - Only apply [data-theme="{currentTheme}"] CSS rules

## Constraints

- cartoonVariant is only meaningful when currentTheme is "cartoon"
- Other themes (default, glass-aurora) completely ignore data-variant attribute
- Theme persistence uses separate storage keys for theme and variant
- Theme tokens must maintain accessibility contrast ratios
- All theme transitions must be smooth and not cause layout shifts