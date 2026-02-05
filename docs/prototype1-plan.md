# Prototype 1 Plan (Web MVP)

## Goal
Deliver a working web prototype that lets a user add tickers, enter acquisition events and dividends, and see wash-sale risk windows on a calendar using local storage only.

## Fastest Path (Recommended)
Use a static HTML/CSS/JS app with a lightweight calendar grid and localStorage. No build step, no framework.

## Scope
- Add ticker(s)
- Add acquisition events (RSU vest/settle, ESPP purchase, option exercise) and dividend events
- Visualize wash-sale risk windows on a calendar
- Persist all data in localStorage
- Neutral labels ("acquisition event") with type tags

## Milestones
1. UI Skeleton
- Single-page layout: form panel + calendar panel
- Month navigation (prev/next)

2. Data Model
- Local storage schema for tickers and events
- Event fields: `id`, `ticker`, `type`, `date`, `label`

3. Event Input
- Add ticker
- Add acquisition event
- Add dividend event
- List of events with edit/delete

4. Calendar Rendering
- Render month grid
- Show event markers
- Highlight wash-sale risk windows

5. Calculation
- For each acquisition event, compute wash-sale window (30 days before and after)
- For dividends, mark a reference date only (no window logic unless later specified)

6. Polish
- Lightweight disclaimer
- Basic empty-state copy

## Definition of Done
- User can add and persist events
- Calendar shows events and windows
- Reloading the page preserves data

## Open Questions
- Exact rules for dividends and acquisition types
- Specific risk window styling
