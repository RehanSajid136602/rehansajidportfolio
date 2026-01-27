# Manual Test: Theme Cycling

## Objective
Verify that users can click the theme toggle button and cycle through all available themes (Default → Cartoon → Neo-Brutal → Default), with the visual appearance changing immediately while maintaining all content and functionality.

## Pre-requisites
- Portfolio application is running locally or deployed
- Browser with JavaScript enabled

## Test Steps

1. Navigate to the portfolio website
2. Locate the theme toggle button (should be in top-right corner)
3. Note the initial theme (should be Default)
4. Click the theme toggle button once
5. Verify the theme changes to Cartoon
6. Click the theme toggle button again
7. Verify the theme changes to Neo-Brutal
8. Click the theme toggle button again
9. Verify the theme changes back to Default
10. Repeat steps 4-9 to ensure consistent cycling
11. Verify that all content remains visible and accessible in all themes
12. Verify that all functionality remains operational in all themes

## Expected Results
- Theme should cycle through Default → Cartoon → Neo-Brutal → Default
- Visual appearance should change immediately upon clicking
- All content should remain visible and readable
- All functionality should remain operational
- No broken elements or layout shifts

## Pass/Fail Criteria
- [ ] Theme cycles correctly through all three themes
- [ ] Visual changes occur immediately
- [ ] Content remains accessible in all themes
- [ ] Functionality remains operational in all themes
- [ ] No broken elements or layout issues

## Notes
- Pay attention to contrast ratios in each theme to ensure readability
- Check that interactive elements (buttons, links) remain functional
- Verify that animations and transitions work properly in each theme