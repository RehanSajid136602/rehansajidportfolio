# Visual Regression Test: Theme Changes

## Objective
Verify that theme changes produce consistent and expected visual differences without unintended side effects or layout issues.

## Pre-requisites
- Portfolio application is running locally or deployed
- Screenshot comparison tool (e.g., Puppeteer, Playwright, or similar)
- Baseline screenshots for all themes

## Test Steps

1. Capture baseline screenshots of key pages/components in Default theme
2. Switch to Cartoon theme
3. Capture screenshots of the same pages/components in Cartoon theme
4. Compare with baseline to verify expected visual changes
5. Switch to Neo-Brutal theme
6. Capture screenshots of the same pages/components in Neo-Brutal theme
7. Compare with baseline to verify expected visual changes
8. Verify that layout elements remain properly positioned
9. Verify that typography scales appropriately
10. Verify that spacing and alignment remain consistent
11. Check that no visual elements overflow or break

## Expected Results
- Each theme should have distinct visual characteristics
- Layout should remain intact across all themes
- Typography should be readable in all themes
- Spacing and alignment should be consistent
- No visual overflow or broken elements

## Pass/Fail Criteria
- [ ] Each theme has visually distinct characteristics
- [ ] Layout remains intact across all themes
- [ ] Typography remains readable in all themes
- [ ] Spacing and alignment are consistent
- [ ] No visual overflow or broken elements
- [ ] Color contrast ratios meet accessibility standards
- [ ] Background patterns render correctly in each theme

## Notes
- Pay special attention to edge cases like long text, images, and form elements
- Verify that custom animations work properly in each theme
- Check that focus states remain visible in all themes