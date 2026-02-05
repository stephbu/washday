# Code Guidelines

## Coding Goals
- Keep it simple, readable, and easy to extend
- Reduce duplication introduced by iterative changes
- Make behavior consistent across UI, data, and calculations

## General
- Keep all enums and labels in one config object and reuse it everywhere
- Prefer small, pure functions for calculations and formatting
- Avoid stringly-typed logic scattered across files
- Keep state updates and rendering separated

## JavaScript
- Use a single source of truth for event types, subtypes, and schedules
- Avoid duplicating option lists in both HTML and JS
- Avoid `innerHTML` when inserting user input; prefer `textContent` and DOM APIs
- Centralize validation for events and tickers in one function
- Keep date handling consistent and documented at the boundary
- Minimize re-render duplication by using a single render pipeline

## HTML
- Prefer templating via config-driven rendering for repeated lists
- Keep form fields in sync with JS config and validation rules
- Use data attributes only when needed for event wiring

## CSS
- Use CSS variables for repeated colors and states
- Keep visual tokens aligned with semantic classes
- Avoid duplicating similar styles for legend and calendar indicators

## Data And Dates
- Store dates as ISO `YYYY-MM-DD` strings
- Convert to `Date` objects only at calculation boundaries
- Document assumptions about time zones

