AGENTS.md

Overview
- This file provides centralized guidance for agentic coding tasks within this repository. It covers build, lint, test workflows, code style conventions, error handling, and naming. It also documents any repository-specific Cursor/Copilot rules and the expected approval/workflow patterns.

**Table of contents**
- Build, Lint, Test
- Code Style Guidelines
- Cursor Rules
- Copilot Rules
- Quality Gates
- Quick Start for Agents
- Conventions by Language (summary)
- Contact and Updates

**Build, Lint, Test**
- Build commands
  - Node/JS/TS (if package.json present): `npm run build` or `yarn build` or `pnpm build`.
  - TypeScript-only projects: `npm run build` should imply `tsc -p tsconfig.json` if not otherwise specified.
  - Python projects: `python -m build` or `python setup.py build` when configured; otherwise rely on project tooling.
  - Go projects: `go build ./...`.
  - Rust: `cargo build`.
  - Java: `mvn -B -DskipTests package` or `gradle build` depending on project.
  - C/C++: consult `Makefile`/CMake; typically `make` or `cmake --build`.
- Lint commands
  - Node/TS: `npm run lint` or `yarn lint` or `pnpm lint`.
  - Python: `pytest --maxfail=1 -q` with lints via `flake8`/`ruff` or `pylint` via `rg`-style rules.
  - Go: `golangci-lint run` if configured; otherwise use `go vet` + `staticcheck`.
  - Java: `mvn -DskipTests -Dformat.dryRun=true spotless:apply` if using Spotless; otherwise project-specific linters.
- Tests
  - Node/JS/TS: `npm test` / `yarn test` / `pnpm test`.
  - Python: `pytest` with optional `-k <name>` to run a single test.
  - Go: `go test ./...` with `-run <Regex>` to run a single test.
  - Rust: `cargo test` with filter for a single test like `cargo test TestName`.
  - Java: `mvn test -Dtest=TestName` or `gradle test --tests TestName`.
- Running a single test (practical examples)
  - Node/Jest: `npm test -- -t "should do something"` or `yarn test -u --testNamePattern="should do something"`.
  - PyTest: `pytest -k test_name` or `pytest path/to/test_file.py::test_name`.
  - Go: `go test -run ^TestName$`.
  - Rust: `cargo test TestName`.
  - Java: `mvn -Dtest=TestName test` or `gradle test --tests TestName`.
- Notes
  - Prefer running a narrow test to confirm behavior changes; avoid long-running suites in quick iterations.
  - Use environment isolation (nvm/vnvm, virtualenv, or container) when tests depend on external state.

**Code Style Guidelines**
- Imports and modules
  - Import order: Standard library, third-party, local modules. Group and sort alphabetically within each group.
  - Avoid wildcard imports. Prefer explicit symbols (e.g., import { Foo, Bar } from 'module').
  - Side-effect imports (if any) should be clearly documented and minimized.
- Formatting
  - Enforce a single formatter. For JS/TS: Prettier with a shared config; for Python: Black; for Go: gofmt; for Java: project-specific formatting tool.
  - Line length: Prefer 80-120 characters; wrap when exceeding 120 where clarity is affected.
  - Semicolons: Follow language norms; semicolons in JS/TS are standard; in Python/Go, se quit.
  - Trailing commas: Use trailing commas in multi-line object/array literals where supported to simplify diffs.
- Types and typing (when applicable)
  - Use strict typing where possible. Avoid `any` in TypeScript; prefer `unknown` if the exact type is not known at call-site.
  - Document shapes with interfaces/types for clarity; favor discriminated unions for complex state.
- Naming conventions
  - Variables: camelCase; Constants: UPPER_SNAKE_CASE; Types/Classes: PascalCase; Functions: camelCase.
  - Boolean flags: use is/has/should prefixing.
- Error handling
  - Do not swallow errors; propagate with context using error wrappers.
  - Use meaningful error messages; include function/module names and relevant inputs when possible.
  - Centralize error types for libraries and API layers.
- Documentation and comments
  - Write doc comments for public API: short description, params, return values.
  - Use inline comments sparingly; prefer self-describing code; comments explain "why" not "what".
- Testing style
  - Tests should be fast, deterministic, and isolated.
  - Use descriptive test names; group related tests with `describe`/`context` blocks.
  - Mock external dependencies with explicit scaffolding; avoid flaky tests.
- Security and privacy
  - Do not commit secrets or credentials; use environment managers and config files ignored by VCS.
  - Validate inputs and sanitize outputs to prevent injection vulnerabilities.
- Versioning and releases
  - Align with semantic versioning: MAJOR.MINOR.PATCH.
  - Update changelogs/docs when making public API changes.
- Documentation across repo
  - README.md and inline docs should reflect current behavior; deprecations are clearly communicated.
- Accessibility and inclusivity
  - If UI, ensure semantics (ARIA, alt text) for accessibility.
- Performance
  - Prioritize clear, readable code; optimize only after profiling.

**Cursor Rules**
- Cursor rules location: `.cursor/rules/` or `.cursorrules` at repo root or relevant subdirectories.
- Rule format: JSON/YAML-like declarations or DSL as defined by the repo tooling.
- When present, apply rules to code generation, edits, and automated fixes before review.
- If there are conflicts between Cursor rules and existing lint/test, prefer Cursor rules for code generation steps.
- If no Cursor rules are detected, note that this repository currently has no explicit Cursor rules; consider adding a minimal policy in this file.

**Copilot Rules**
- Copilot instructions file: `.github/copilot-instructions.md`.
- If present, use the guidance to constrain auto-generated code (e.g., prefer explicit code blocks, limit scaffolding, enforce naming conventions).
- If not present, note absence and suggest establishing a Copilot usage policy to maintain consistency.

**Quality Gates**
- All changes should pass lint and tests locally before adding changes to any PR.
- If a test fails or lint reports errors, fix there or create a minimal, well-scoped follow-up task.
- Prefer minimal, well-justified changes; avoid broad, sweeping edits.

**Quick Start for Agents**
- Before editing code, review existing AGENTS.md and repository AGENTS references.
- Use `glob`, `read`, and `edit` tools for surgical changes only; avoid large rewrites without plan.
- When in doubt, ask for scope clarification and propose a targeted patch.

**Conventions by Language (summary)**
- JavaScript/TypeScript: ESLint + Prettier, strict types where used; explicit imports; no implicit any.
- Python: Black + Flake8 or Ruff; type hints with mypy where possible.
- Go: gofmt, golangci-lint; explicit error handling; idiomatic error chaining.
- Rust: Clippy + cargo fmt; explicit Result usage; avoid unwrap in library code.
- Java: Spotless for formatting; lint checks; unit tests with JUnit.
- C/C++: clang-format; cppcheck; avoid undefined behavior.

**Updates and Contact**
- This file is a living document; update with changes to tooling or repo policies.
- For questions or updates, ping the maintainer or add a PR to discuss.
