# Feature Specification: Cartoonic Pricing & Tech Nodes

**Feature Branch**: `003-cartoonic-pricing-nodes`  
**Created**: 2026-01-27  
**Status**: Draft  
**Input**: User description: "Packages/Pricing: Readable text, cartoonic buttons, no layout shifts. Tech Nodes: Cartoonic badges (rounded, soft shadow, centered text), playful hover. Global: No neo-brutal styling."

## User Scenarios & Testing

### User Story 1 - Readable Cartoonic Pricing Cards (Priority: P1)

As a potential client, I want to clearly read the package details and pricing on cards that fit the cartoonic theme, so that I can evaluate services without visual strain or distraction.

**Why this priority**: Pricing is critical for conversion; readability and visual consistency builds trust.

**Independent Test**: View the Packages/Pricing section. Text should be legible against backgrounds. Buttons should be visible. Layout should be stable.

**Acceptance Scenarios**:

1. **Given** the Pricing section is visible, **When** I view the cards, **Then** all text (titles, prices, bullets, descriptions) has sufficient contrast against the card background.
2. **Given** a Pricing card, **When** I look at the action button, **Then** it follows the global cartoonic theme (e.g., specific border radius, colors) and is clearly distinct from the card background.
3. **Given** the page loads, **When** the Pricing section renders, **Then** the grid layout matches the previous structure with no visible layout shift (CLS).

---

### User Story 2 - Playful Tech Stack Badges (Priority: P2)

As a visitor, I want to see the technologies used presented as friendly, cartoonic badges, so that the "Tech Nodes" section feels modern and aligned with the site's personality.

**Why this priority**: The Tech Nodes section is a key portfolio element; transforming it reinforces the "Cartoonic" brand identity.

**Independent Test**: Inspect the Tech Nodes section. Nodes should look like "bubbles" or badges, not harsh boxes. Text should be centered. Hovering should trigger a playful effect.

**Acceptance Scenarios**:

1. **Given** the Tech Nodes section, **When** I view the individual nodes, **Then** they appear as rounded badges/bubbles with soft outlines and drop shadows (no harsh neo-brutal borders).
2. **Given** a Tech Node, **When** I read the text, **Then** it is perfectly centered within the shape and clearly readable.
3. **Given** a Tech Node, **When** I hover over it, **Then** it executes a "playful" animation (e.g., small bounce or scale) without breaking layout.

---

### Edge Cases

- **Long Text in Nodes**: How do badges handle longer technology names?
  - *Expectation*: Text should wrap or container should grow/shrink to fit, maintaining centered alignment and "bubble" shape.
- **Dark Mode**: How do soft shadows and badge colors appear in dark mode?
  - *Expectation*: Shadows and background colors must adjust to remain visible and maintain the "soft/cartoonic" feel (e.g., lighter opacity shadows or glow effects if appropriate, though "soft drop shadow" implies a light source).

## Requirements

### Functional Requirements

- **FR-001**: System MUST update Pricing Card visuals to ensure text (titles, prices, bullets, muted text) meets WCAG AA contrast ratios against the background.
- **FR-002**: System MUST style Pricing Card buttons to match the defined Cartoonic theme (rounded corners, specific colors) while ensuring visibility.
- **FR-003**: System MUST maintain the existing grid system and spacing for the Pricing section (Zero Layout Shift).
- **FR-004**: System MUST transform Tech Nodes into "cartoonic badges":
    - Shape: Fully rounded or highly rounded corners (bubble feel).
    - Border: Thin/Soft outline (removing thick neo-brutal borders).
    - Shadow: Soft drop shadow (removing harsh, solid offsets).
    - Optional: Glossy highlight effect (if supported by theme).
- **FR-005**: System MUST center text horizontally and vertically within Tech Node badges.
- **FR-006**: System MUST implement a "playful" hover state for Tech Nodes (e.g., `scale(1.05)` or a small bounce keyframe) consistent with existing motion settings.
- **FR-007**: System MUST scan for and remove any remaining "Neo-brutal" specific CSS classes or tokens (e.g., hard shadows, 4px black borders) in the modified sections.

### Key Entities

- **Pricing Card**: Component displaying service tiers.
- **Tech Node**: Component displaying a specific skill or technology.

## Success Criteria

### Measurable Outcomes

- **SC-001**: 100% of text elements in Pricing Cards pass WCAG AA contrast checks.
- **SC-002**: Tech Nodes have a border-radius > 12px (or `full`) and do not use `box-shadow: Xpx Ypx 0px Black` (hard shadow).
- **SC-003**: Cumulative Layout Shift (CLS) on the Pricing page/section is < 0.1 during loading.
- **SC-004**: Hovering any Tech Node triggers a transformation (scale/bounce) visible to the eye.