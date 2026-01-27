# Quickstart Guide: Fix Dev Server Build Issues

## Overview
This guide addresses development server startup issues related to the lightningcss.win32-x64-msvc.node binary and ensures Tailwind CSS processes globals.css correctly. The solution involves cleaning and reinstalling dependencies to regenerate the native binary.

## Prerequisites
- Node.js v20+ (currently using v24.12.0)
- npm v8+ (currently using v11.7.0)
- Administrative access (if needed for global package management)

## Steps to Resolve the Issue

### 1. Clean Current Installation
```bash
# Remove node_modules
rm -rf node_modules

# If on Windows, use:
# rmdir /s /q node_modules
```

### 2. Clean npm Cache
```bash
npm cache clean --force
```

### 3. Reinstall Dependencies
```bash
npm install
```

### 4. Verify Installation
```bash
# Check that lightningcss binary exists and is valid
npm list lightningcss
```

### 5. Test Development Server
```bash
npm run dev
```

## Expected Outcome
- Development server starts without errors
- No errors mentioning `lightningcss.win32-x64-msvc.node`
- Tailwind CSS processes `globals.css` correctly
- All existing UI and functionality preserved

## Troubleshooting
If the issue persists after the clean reinstall:
1. Try rebuilding the native modules:
   ```bash
   npm rebuild
   ```
2. If still failing, check for Node.js version compatibility issues
3. Consider temporarily switching to a different CSS processing approach if needed

## Verification
- [ ] Dev server starts successfully with `npm run dev`
- [ ] No errors related to lightningcss binaries
- [ ] Site loads correctly in browser
- [ ] All existing functionality preserved