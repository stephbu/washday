# UX Decisions

## Goals
- Make wash-sale windows understandable at a glance
- Keep data entry lightweight for MVP
- Prioritize clarity over tax complexity

## Key Decisions
- Single-page layout with form panel + calendar panel
- Neutral labels: “Acquisition event” with subtype tags
- Vesting schedules are selected from a small, named list
- Inline edit/delete for event management
- Calendar is the primary visualization, with risk windows highlighted
- Overlapping risk windows use a filled highlight
- Events are labeled with ticker symbols in the calendar
- Local storage is used for persistence (no login)
- Simple disclaimer in the footer

## Visual Language
- High-contrast dark theme with clear risk outlines
- Risk window outlines are thicker for visibility
- Overlap windows use filled color to signal higher density

## Open UX Questions
- Whether to show separate colors for dividend vs acquisition events
- Whether to show a secondary list view for risk windows
- Whether to allow user-defined vesting schedule templates
