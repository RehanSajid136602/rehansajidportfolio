# Data Model: Cartoonic Pricing & Tech Nodes

## Entities

### PricingCard
- **Source**: `SERVICES` entries in `C:\Users\Admin\Documents\rehansajidportfolio\src\lib\constants.ts`
- **Fields**:
  - `title` (string, required)
  - `price` (string, required)
  - `features` (string[], required)
  - `iconType` ("Palette" | "Check", required)
  - `ctaLabel` (string, derived: "Get Started")
  - `ctaHref` (string, derived from WhatsApp number + title)
- **Validation**:
  - `title` and `price` must be non-empty.
  - `features` must contain at least 1 item.
- **State**: None (static render).

### TechNode
- **Source**: Tech stack/skills data in `C:\Users\Admin\Documents\rehansajidportfolio\src\components\sections\Skills.tsx`
- **Fields** (visual presentation):
  - `label` (string, required)
  - `icon` (ReactNode, optional)
  - `color` (string, optional)
  - `proficiency` (number, optional)
- **Validation**:
  - `label` must be non-empty.
  - If `proficiency` exists, must be 0–100.
- **State**:
  - Hover state for playful animation (scale/bounce) without layout shift.

## Relationships
- PricingCards are rendered in a grid within Services (Pricing) section.
- TechNodes are rendered within the Tech/Skills section and are theme-aware.

## Notes
- No persistence layer or API involved; these are presentational entities.
