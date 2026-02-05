# UX Decisions

## Goals
- Make loss-sale warning windows understandable at a glance
- Keep data entry lightweight for MVP
- Prioritize clarity over tax complexity

## Key Decisions
- Single-page layout with form panel + calendar panel
- Neutral labels: “Acquisition event” with subtype tags
- Schedules are selected from a small, named list (including one-time)
- Inline edit/delete for event management
- Calendar is the primary visualization, with pre/post warning windows highlighted
- Overlapping windows use a filled highlight
- Events are labeled with ticker symbols in the calendar
- Today is highlighted distinctly for quick orientation
- Local storage is used for persistence (no login)
- Simple disclaimer in the footer
- Legend tooltips explain pre/post/overlap ramifications

## Visual Language
- High-contrast dark theme with clear warning outlines
- Pre/post windows use distinct colors
- Overlap windows use filled color to signal higher density
- Today uses a bright outline and subtle glow

## Open UX Questions
- Whether to show separate colors for dividend vs acquisition events
- Whether to show a secondary list view for risk windows
- Whether to allow user-defined vesting schedule templates
