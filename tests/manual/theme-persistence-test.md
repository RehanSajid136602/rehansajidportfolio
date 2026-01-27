# Manual Test: Theme Persistence Across Page Reloads

## Objective
Verify that the selected theme persists across page reloads and visits.

## Pre-requisites
- Portfolio application is running locally or deployed
- Browser with JavaScript and localStorage enabled

## Test Steps

1. Navigate to the portfolio website
2. Select a non-default theme (e.g., Cartoon or Neo-Brutal)
3. Refresh the page (F5 or Ctrl+R)
4. Verify that the same theme is applied after refresh
5. Navigate to a different page within the portfolio
6. Refresh that page
7. Verify that the same theme is still applied
8. Close the browser tab/window
9. Reopen the portfolio website in a new tab/window
10. Verify that the same theme is still applied

## Expected Results
- Selected theme should persist after page refresh
- Selected theme should persist when navigating between pages
- Selected theme should persist when reopening the browser

## Pass/Fail Criteria
- [ ] Theme persists after page refresh
- [ ] Theme persists when navigating between pages
- [ ] Theme persists when reopening the browser
- [ ] No flickering between themes during page load

## Notes
- Check that the theme is applied before the page fully loads to prevent flickering
- Verify that localStorage is being used to store the theme selection
- Test with browser dev tools open to inspect localStorage values