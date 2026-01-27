# Research: Learning Journey & WhatsApp FAB Styling

## Audit Findings

### Learning Journey Section (`src/components/sections/Experience.tsx`)
- **Wrapper**: `<section id="experience" ... className="... bg-[var(--section-bg)]">`
- **Current Token**: In `globals.css`, `glass-aurora` defines `--section-bg: rgba(15, 23, 42, 0.5)`.
- **Requirement**: Remove "black-block" override. The aurora background is on `body::before`. If `--section-bg` has opacity, it might obscure the aurora.
- **Decision**: Update `glass-aurora`'s `--section-bg` to `transparent` to let the aurora glow through. Ensure `glass-panel` or `glass-card` classes are used for content blocks within the section to provide the "glass veil" effect.

### WhatsApp FAB (`src/components/ui/StickyWhatsApp.tsx`)
- **Classes**: `bg-green-500 text-white shadow-lg shadow-green-500/25 hover:shadow-green-500/40`
- **Requirement**: Convert to token/blue.
- **Decision**: Define a new semantic token `--whatsapp-bg` and `--whatsapp-shadow`.
  - Default/Cartoon: Keep green (optional) or move to blue if mandated by constitution.
  - Glass Aurora: MUST be blue per Constitution Principle IV.
- **Alternative**: Use Tailwind semantic classes if already mapped (e.g., `bg-accent`).

## Decision Consolidations

- **Decision**: Set `glass-aurora` `--section-bg` to `transparent`.
- **Rationale**: Best way to ensure the section inherits the global aurora background without layout shifts.
- **Decision**: Use `bg-accent` or a new `--fab-bg` token for StickyWhatsApp.
- **Rationale**: Aligns with "token-driven" requirement and avoids hard-coded hexes.

## Best Practices
- Use `backdrop-filter: blur(...)` for glass sections to maintain readability over the aurora background.
- Ensure transition duration is consistent with other interactive elements (300ms).
