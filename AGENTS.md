# AGENTS.md

This repository uses agentic workflows. Keep the repository clean, predictable, and easy for humans and agents to collaborate on.

## Operating Principles
- Prefer small, reviewable changes.
- Keep context tight; only open files you need.
- Explain assumptions and confirm when unclear.
- Avoid destructive commands unless explicitly asked.
- When editing, preserve existing patterns and formatting.

## Project Layout
- `README.md`: Project overview and developer guidance.
- `docs/`: Longer-form documentation and design notes.

## Workflow Expectations
- Before making changes, scan for relevant files (`docs/`, `AGENTS.md`).
- When you add or change behavior, update documentation if needed.
- If you add scripts or tooling, document usage in `README.md` or `docs/`.

## Documentation Rules
- All documents are in Markdown, and where necessary Mermaid
- Documents are stored in the /docs folder unless otherwise indicated
- Keep docs concise and task-oriented.
- Use examples and commands in code fences.

## Testing
- If tests exist, run the smallest relevant subset.
- If no tests exist, call that out.

## Release/Deployment
- None defined yet. Add instructions here once established.
