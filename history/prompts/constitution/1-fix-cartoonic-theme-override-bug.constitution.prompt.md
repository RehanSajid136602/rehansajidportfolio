---
id: 1
title: "Fix Cartoonic Theme Override Bug"
stage: constitution
date_iso: "2026-01-27"
surface: "agent"
model: "Claude Sonnet 4.5"
feature: "theme-bug-fix"
branch: "main"
user: "Admin"
command: "sp.constitution Write /sp.constitution.md for fixing a theme bug where the Cartoonic yellow background overrides the entire site"
labels: ["theme", "css", "bug-fix", "scoping"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files_yaml: |
  - .specify/memory/constitution.md
  - sp.constitution.md
tests_yaml: |
  -
prompt_text: |
  Write /sp.constitution.md for fixing a theme bug where the Cartoonic yellow background overrides the entire site.

  Musts:
  - Theme tokens must be scoped: each theme defines its CSS vars only under its selector (e.g., [data-theme="cartoonic"]).
  - No CSS vars for a theme should be placed in :root unless they are true neutral defaults.
  - The active theme must be applied via a single, consistent mechanism (data-theme on html/body or a single class).
  - Non-cartoonic themes must not inherit cartoonic --bg/--surface values.
  - No layout changes.
  - Accessibility: contrast remains readable.

  Must-nots:
  - Do not patch by hardcoding section backgrounds.
  - Do not duplicate tokens across multiple conflicting selectors.
  - Do not change component structure.
response_text: |
  Created a new constitution file that addresses the theme scoping issue. The key principles established are:
  - VII. Theme Scoping and Isolation: Ensures each theme's CSS variables are properly scoped to prevent cross-contamination
  - VIII. CSS Variable Governance: Establishes rules for theme-specific variables to be defined only under their respective selectors
  - IX. Theme Application Mechanism: Defines consistent mechanism using data-theme attribute
outcome: "Constitution file created with specific theme scoping rules to prevent Cartoonic theme from overriding the entire site"
evaluation: "Successfully addressed the theme override issue with clear scoping principles"
---

# Fix Cartoonic Theme Override Bug Constitution

## Context
The Cartoonic theme yellow background was overriding the entire site due to improper CSS variable scoping. This constitution establishes rules to ensure proper theme isolation.

## Requirements
- Theme tokens must be scoped to prevent cross-contamination
- CSS variables should only be defined under specific theme selectors
- Maintain accessibility and contrast requirements
- No layout changes allowed

## Solution Approach
Created specific principles for theme scoping and CSS variable governance to ensure each theme operates independently without affecting others.