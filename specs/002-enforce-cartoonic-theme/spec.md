# Feature Specification: Enforce Cartoonic Theme

**Feature Branch**: `002-enforce-cartoonic-theme`  
**Created**: 2026-01-27  
**Status**: Draft  
**Input**: User description: "1) Neo-brutal theme is removed... 2) Cartoonic theme applies consistently... 3) No layout changes... 4) Quick validation..."

## User Scenarios & Testing

### User Story 1 - Consistent Experience Section Styling (Priority: P1)

As a site visitor, I want the Experience section to visually match the rest of the Cartoonic theme (colors, borders, shadows) so that the browsing experience feels cohesive and professional.

**Why this priority**: The current Experience section has inconsistent styling (hard-coded backgrounds, potential Neo-brutal leftovers) which breaks the visual immersion.

**Independent Test**: Can be tested by navigating to the Experience section and verifying that cards, chips, and backgrounds use the correct Cartoonic theme tokens (e.g., rounded borders, specific shadow styles) and not Neo-brutal ones.

**Acceptance Scenarios**:

1. **Given** the user is on the landing page, **When** they scroll to the Experience section, **Then** the background color matches the active Cartoonic theme variable (not a hard-coded hex).
2. **Given** the user views experience cards, **When** observing borders and shadows, **Then** they see Cartoonic style (e.g., soft shadows, specific border radius) instead of thick Neo-brutal borders.

---

### User Story 2 - Removal of Neo-Brutal Theme Option (Priority: P2)

As a user, I want the Neo-brutal theme option to be removed from any theme toggles so that I cannot accidentally select a broken or deprecated style.

**Why this priority**: Cleaning up deprecated features prevents user confusion and codebase bloat.

**Independent Test**: Open the theme picker (if available) and verify "Neo-brutal" is not an option.

**Acceptance Scenarios**:

1. **Given** the application is loaded, **When** I interact with the Theme Toggle, **Then** I only see supported themes (e.g., Light, Dark) and no Neo-brutal option.
2. **Given** the application code, **When** searched for "neo-brutal" tokens, **Then** no active token sets or overrides remain.

---

### Edge Cases

- **Theme Persistence**: What happens if a user previously selected Neo-brutal and it was saved in local storage?
  - *Expectation*: System should fallback to default (Cartoonic) theme.
- **High Contrast**: How does the Cartoonic theme handle high contrast requirements?
  - *Expectation*: Ensure standard contrast ratios are met.

## Requirements

### Functional Requirements

- **FR-001**: System MUST remove all Neo-brutal token definitions, including thick borders, specific shadow offsets, and typography overrides associated with that theme.
- **FR-002**: System MUST remove the "Neo-brutal" option from the Theme Toggle component.
- **FR-003**: System MUST update the Experience section to use CSS variables for background colors instead of hard-coded hex values (e.g., remove `bg-[#030303]` if present).
- **FR-004**: System MUST apply Cartoonic styling (border-radius, box-shadow, color palette) to all elements in the Experience section: Cards, Chips, Buttons, Borders.
- **FR-005**: System MUST preserve the exact layout structure, spacing, and component hierarchy of the Experience section; only visual properties (CSS) shall change.
- **FR-006**: System MUST ensure text contrast in the Experience section meets WCAG AA standards under the Cartoonic theme.
- **FR-007**: System MUST handle legacy local storage values gracefully (e.g., if `theme='neobrutal'` is stored, default to `cartoonic`).

### Key Entities

- **Theme Configuration**: The central definition of design tokens (colors, radius, shadows).
- **Experience Section**: The specific UI component area requiring visual standardization.

## Success Criteria

### Measurable Outcomes

- **SC-001**: "Neo-brutal" keyword count in active theme configuration files is 0.
- **SC-002**: 100% of Experience section colors (backgrounds, text, borders) use defined CSS variables/theme tokens.
- **SC-003**: Theme toggle contains exactly the supported set of themes (e.g., Light, Dark) and excludes Neo-brutal.
- **SC-004**: Visual inspection confirms Experience section matches the "Cartoonic" reference style (rounded corners, soft shadows) indistinguishably from other sections.
- **SC-005**: Layout shift score (CLS) for Experience section remains 0 during theme application.