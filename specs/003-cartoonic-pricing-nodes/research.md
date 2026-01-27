# Research & Decisions: Cartoonic Pricing & Tech Nodes

## Context Scan
- Theme tokens live in `C:\Users\Admin\Documents\rehansajidportfolio\src\app\globals.css` with cartoon overrides.
- Dark section wrappers are hard-coded in `C:\Users\Admin\Documents\rehansajidportfolio\src\components\sections\Projects.tsx` and `C:\Users\Admin\Documents\rehansajidportfolio\src\components\sections\Experience.tsx`.
- Testimonial cards use dark surfaces in `C:\Users\Admin\Documents\rehansajidportfolio\src\components\sections\Testimonials.tsx`.
- No email input/placeholder found; the email “pill” is a mailto button in `C:\Users\Admin\Documents\rehansajidportfolio\src\components\sections\Contact.tsx`.

## Decisions

### 1) Introduce semantic theme tokens for section/surface/card/background
- **Decision**: Add CSS variables for `--section-bg`, `--surface-bg`, `--card-bg`, `--border`, `--text` in `globals.css`, with cartoon theme values that are light and friendly. Map these via `@theme inline` so Tailwind utilities like `bg-section-bg`, `bg-surface-bg`, `bg-card`, `border-border`, `text-text` can be used.
- **Rationale**: Replaces hard-coded dark colors with theme-aware tokens and keeps section backgrounds consistent across themes.
- **Alternatives considered**: Continue using hard-coded `bg-[#030303]` and `bg-black/…` in sections; reuse only `--background` and `--card-bg` without new semantics.

### 2) Replace dark section wrappers with semantic tokens
- **Decision**: Update Projects (“AI Ecosystem”), Experience (“Learning Journey”), and other affected section wrappers to use `bg-section-bg` and `text-text`/`text-foreground` instead of hard-coded dark colors.
- **Rationale**: Eliminates dark blocks when the cartoon theme is active while keeping layout/spacing unchanged.
- **Alternatives considered**: Add conditional class logic per section; overlay light gradients on dark wrappers.

### 3) Improve footer email pill contrast
- **Decision**: Adjust the email mailto button (and any icon) to use `text-text`/`text-foreground`, `border-border`, and `bg-surface-bg` or `bg-card` for readability under the cartoon theme.
- **Rationale**: Ensures the pill is legible with consistent theme tokens even though no input/placeholder exists.
- **Alternatives considered**: Keep `text-white` and `bg-white/5`; add a new input element (not requested).

### 4) Testimonial card styling update
- **Decision**: Switch testimonial cards to `bg-card`, `border-border`, and stronger text colors, with a soft playful shadow (non neo-brutal) using existing shadow tokens or a light custom shadow.
- **Rationale**: Keeps cards readable and aligned with the cartoon theme while avoiding heavy black offset shadows.
- **Alternatives considered**: Keep current dark translucent cards; use bold neo-brutal outlines.
