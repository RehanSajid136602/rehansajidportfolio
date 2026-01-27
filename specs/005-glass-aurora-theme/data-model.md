# Data Model: Glass Aurora Styling

## UI Entities

### Learning Journey Container
- **Source**: `src/components/sections/Experience.tsx`
- **State**: `theme` (affects background opacity and connection line colors)
- **Constraint**: Must remain `bg-transparent` in Glass Aurora theme.

### WhatsApp FAB
- **Source**: `src/components/ui/StickyWhatsApp.tsx`
- **State**: `theme` (determines background color and shadow color)
- **Properties**:
  - `bg`: `--accent` (or blue token)
  - `shadow`: `--accent-hover` / opacity

## State Transitions
- **Theme Switch**:
  - `default` -> `glass-aurora`: FAB turns blue, section bg becomes transparent.
  - `cartoon` -> `glass-aurora`: FAB turns blue, section bg becomes transparent.
