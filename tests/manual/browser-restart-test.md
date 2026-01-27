# Test: Theme Persistence After Browser Restart

## Objective
Verify that the selected theme persists after closing and restarting the browser.

## Pre-requisites
- Portfolio application is running locally or deployed
- Browser with JavaScript and localStorage enabled

## Test Steps

1. Navigate to the portfolio website
2. Select a non-default theme (e.g., Cartoon or Neo-Brutal)
3. Close the entire browser application (all windows/tabs)
4. Restart the browser
5. Navigate back to the portfolio website
6. Verify that the same theme is applied
7. Check localStorage in browser dev tools to confirm theme value is stored

## Expected Results
- Selected theme should persist after browser restart
- Theme selection should be retrieved from localStorage

## Pass/Fail Criteria
- [ ] Theme persists after browser restart
- [ ] Theme value is correctly stored in localStorage
- [ ] Theme is correctly retrieved from localStorage on page load

## Notes
- This test verifies that the localStorage mechanism is working properly
- Check that the theme key is "portfolio-theme" as specified in the data model
- Verify that the theme value is one of "default", "cartoon", or "neo-brutal"