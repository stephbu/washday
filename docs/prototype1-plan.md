# Prototype 1 Plan (Web MVP)

## Goal
Deliver a working web prototype that lets a user add tickers, enter acquisition/dividend events, and see loss-sale warning windows on a calendar using local storage only.

## Fastest Path (Recommended)
Use a static HTML/CSS/JS app with a lightweight calendar grid and localStorage. No build step, no framework.

## Scope
- Add ticker(s)
- Add acquisition events (RSU vest/settle, ESPP purchase, option exercise) and dividend events
- Visualize loss-sale warning windows (pre/post) on a calendar
- Persist all data in localStorage
- Neutral labels ("acquisition event") with type tags

## Milestones
1. UI Skeleton
- Single-page layout: form panel + calendar panel
- Month navigation (prev/next)

2. Data Model
- Local storage schema for tickers and events
- Event fields: `id`, `ticker`, `kind`, `subtype`, `schedule`, `date`, `label`

3. Event Input
- Add ticker
- Add acquisition event
- Add dividend event
- List of events with inline edit/delete
- Include schedule selection (one-time, quarterly, 1yr cliff + quarterly, 4yr monthly, 2yr cliff + annual)

4. Calendar Rendering
- Render month grid
- Show event markers
- Highlight pre/post warning windows with distinct colors
- Handle overlapping windows and same-day events

5. Calculation
- For each event occurrence, compute a 30-day pre window and 30-day post window
- Schedules expand forward based on the visible calendar range

6. Polish
- Lightweight disclaimer
- Basic empty-state copy
- Inline validation for required fields
- Basic accessibility (labels, focus, keyboard navigation)
- Event markers display ticker labels
- Legend tooltips explain pre/post/overlap ramifications
- Data reset/export for quick iteration

## Definition of Done
- User can add and persist events
- Calendar shows events and windows
- Reloading the page preserves data

## Open Questions
- Whether to distinguish dividend vs acquisition event colors
