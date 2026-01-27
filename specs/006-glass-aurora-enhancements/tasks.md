# Tasks: Glass Aurora Theme Enhancement Fixes

**Feature**: Glass Aurora Theme Enhancement Fixes
**Branch**: 006-glass-aurora-enhancements
**Date**: 2026-01-27

## Overview

This document outlines the tasks required to fix two issues in the Glass Aurora theme:
1. Learning Journey section showing black background block
2. WhatsApp FAB still using green instead of blue accent

## Dependencies

- Task T002 (Learning Journey background fix) must be completed before final validation
- Task T003 (WhatsApp FAB color fix) can be completed independently

## Parallel Execution Opportunities

- Tasks T002 and T003 can be executed in parallel as they affect different components

## Implementation Strategy

Address both issues following token-driven approach to ensure proper theme integration while maintaining accessibility and performance standards.

---

## Phase 1: Setup

- [X] T001 Locate Learning Journey section (Experience.tsx) and WhatsApp FAB (Contact.tsx) components

## Phase 2: Foundational Tasks

- [X] T002 Fix Learning Journey background (replaced hard-coded bg-[#030303] with token-driven background in src/components/sections/Experience.tsx)
- [X] T003 Update WhatsApp FAB to use blue accent (verified using var(--accent) token in src/components/sections/Contact.tsx)

## Phase 3: Validation & Cross-Cutting Concerns

- [X] T004 Validate Learning Journey no longer shows black block in glass-aurora theme
- [X] T005 Confirm WhatsApp FAB appears blue in glass-aurora theme and maintains accessibility
- [X] T006 Test all themes for regressions (ensure no layout changes or broken functionality)
- [X] T007 Verify reduced-motion preferences still respected with new changes