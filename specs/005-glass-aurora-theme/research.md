# Research: Cartoonic Light/Dark Mode Implementation

## Audit Findings

### Theme Registry & UI
- **Location**: `src/components/ui/ThemeToggle.tsx`
- **Registry**: `THEMES` array containing `default`, `cartoon`, `glass-aurora`.
- **Mechanism**: `useState` + `useEffect` applying `data-theme` to `document.documentElement`.
- **Persistence**: `localStorage.getItem("portfolio-theme")`.

### Application Method
- Themes are applied via the `data-theme` attribute on the `<html>` element.
- CSS selectors in `globals.css` use `[data-theme="..."]`.

### Token Definitions
- **Location**: `src/app/globals.css`.
- **Current Cartoon tokens**: Defined under `[data-theme="cartoon"]`. It is currently a Light theme (orange/amber/yellow hues).

## Unknowns & Resolutions

### 1. Naming Convention for Variants
- **Question**: Should we use `data-variant` or just different `data-theme` values?
- **Decision**: Use **Option A: `data-theme="cartoon"` + `data-variant="light|dark"`**.
- **Rationale**: The user specifically requested a toggle that *only appears* when the theme is cartoonic. This implies "Cartoonic" is the primary selection, and light/dark is a sub-preference. It also prevents bloating the main theme cycle.

### 2. Secondary Persistence
- **Question**: Where to store the cartoon-specific variant?
- **Decision**: `localStorage.setItem("cartoon-variant", "light" | "dark")`.
- **Rationale**: Keeps it separate from the global theme preference.

### 3. Transition Logic
- **Question**: How to handle the transition between themes?
- **Decision**: When switching *to* cartoon, the variant toggle appears. When switching *away*, the global theme takes over, but the variant toggle is hidden.

## Best Practices
- Use CSS variables for all tokens to ensure smooth transitions.
- Ensure the variant attribute is removed or ignored when not in cartoon mode to prevent accidental styling leaks.