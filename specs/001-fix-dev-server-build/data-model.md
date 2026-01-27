# Data Model: Fix Dev Server Build Issues

## Entities

### Build Configuration
- **Name**: Build Configuration
- **Fields**: 
  - packageManager: string (npm/yarn/pnpm)
  - nodeVersion: string (e.g., "v24.12.0")
  - dependencies: object (list of project dependencies)
  - devDependencies: object (list of development dependencies)
- **Relationships**: Contains references to all project dependencies
- **Validation**: All dependencies must resolve to valid, downloadable packages

### Native Binary
- **Name**: Native Binary
- **Fields**:
  - name: string (e.g., "lightningcss.win32-x64-msvc.node")
  - architecture: string (e.g., "win32-x64")
  - platform: string (e.g., "msvc")
  - status: enum (valid, corrupted, missing, incompatible)
  - path: string (filesystem path)
- **Relationships**: Associated with a specific package and Node.js version
- **Validation**: Must be a valid executable binary compatible with current Node.js version

## State Transitions
- Native Binary: missing → corrupted → incompatible → valid
- Build Configuration: invalid → valid

## Notes
This feature primarily deals with build configuration and native binaries rather than traditional data models. The focus is on ensuring the development environment is properly configured rather than defining application data structures.