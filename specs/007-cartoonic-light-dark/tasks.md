# Implementation Tasks: Cartoonic Theme Light/Dark Mode

**Feature**: Cartoonic Theme Light/Dark Mode Toggle
**Branch**: 007-cartoonic-light-dark
**Date**: 2026-01-27

## Overview

This document outlines the implementation tasks for adding a light/dark mode toggle specifically for the cartoonic theme. The toggle will only be visible and functional when the cartoonic theme is active, and will persist separately from the main theme system.

## Implementation Strategy

Use a dual-attribute approach: `data-theme="cartoonic"` and `data-variant="light|dark"` to allow for theme-variant separation while maintaining compatibility with the existing theme system. This approach is minimally invasive and allows for easy extension of other themes with variants in the future.

---

## Phase 1: Setup & Research

- [X] T001 Research current theme architecture to understand implementation patterns in src/app/globals.css and src/components/ui/ThemeToggle.tsx
- [X] T002 Identify all cartoonic theme token definitions and current implementation in src/app/globals.css
- [X] T003 Document existing theme persistence mechanism and storage approach in localStorage

## Phase 2: Token Definitions

- [X] T004 Define cartoonic-light token set with appropriate light theme values in src/app/globals.css
- [X] T005 Define cartoonic-dark token set with appropriate dark theme values in src/app/globals.css
- [X] T006 Ensure both token sets maintain cartoonic aesthetic while providing light/dark contrast in src/app/globals.css

## Phase 3: Core Implementation

- [X] T007 Update ThemeToggle component to include light/dark mode toggle for cartoonic theme only in src/components/ui/ThemeToggle.tsx
- [X] T008 Implement theme variant persistence using cartoonic-scoped key in src/components/ui/ThemeToggle.tsx
- [X] T009 Update CSS selectors to handle theme + variant combinations in src/app/globals.css
- [X] T010 Ensure non-cartoonic themes ignore the variant toggle completely in src/app/globals.css

## Phase 4: UI Integration

- [X] T011 Add light/dark mode toggle UI element that only appears when cartoonic theme is active in src/components/ui/ThemeToggle.tsx
- [X] T012 Style the light/dark toggle to match cartoonic aesthetic in src/components/ui/ThemeToggle.tsx
- [X] T013 Ensure toggle is properly positioned with existing theme controls in src/components/ui/ThemeToggle.tsx

## Phase 5: Coverage Validation

- [X] T014 Validate cartoonic-light mode applies consistently across all sections in src/app/globals.css
- [X] T015 Validate cartoonic-dark mode applies consistently across all sections in src/app/globals.css
- [X] T016 Test that glass-aurora and default themes remain unchanged when variant changes in src/app/globals.css
- [X] T017 Verify all components (orbit nodes, testimonials, footer) respond to cartoonic variants correctly

## Phase 6: Quality Assurance

- [X] T018 Test theme persistence across page refreshes for all theme+variant combinations
- [X] T019 Validate accessibility compliance in both cartoonic variants
- [X] T020 Verify no layout changes occur during theme/variant switching
- [X] T021 Confirm existing functionality remains intact and no regressions exist