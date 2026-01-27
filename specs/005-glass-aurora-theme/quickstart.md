# Quickstart: Cartoonic Light/Dark Verification

## Setup
1. Run `npm run dev`.
2. Open the site and use the main Theme Toggle to select **Cartoon**.

## Verification Steps

### 1. Toggle Visibility
- **Given**: Theme is `default` or `glass-aurora`.
- **Verify**: The Light/Dark variant toggle is **NOT visible**.

- **Given**: Theme is `cartoon`.
- **Verify**: The Light/Dark variant toggle **appears**.

### 2. Cartoon Dark Mode
- **Given**: Theme is `cartoon`.
- **Action**: Toggle to **Dark**.
- **Verify**:
  - Background turns dark (e.g. navy/deep purple).
  - Cartoon borders remain (black, thick).
  - Text contrast is maintained.
  - Buttons maintain cartoon shadows but adapt colors.

### 3. Persistence
- **Action**: Set Cartoon to **Dark**. Refresh page.
- **Verify**: Site loads in **Cartoon Dark**.
- **Action**: Switch to **Dark Pro**. Refresh page.
- **Verify**: Site loads in **Dark Pro**.
- **Action**: Switch back to **Cartoon**.
- **Verify**: Site loads in **Cartoon Dark** (remembered preference).

### 4. Regression Check
- **Verify**: `Dark Pro` and `Glass Aurora` themes are visually identical to previous state.