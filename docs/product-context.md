# Product Context

## One-Liner
Washday is a simple visual calculator to help employees who receive stock grants and dividends visualize upcoming wash-sale risk windows.

## Problem
Employees with equity grants and dividends struggle to see how grant, purchase, and dividend dates interact with wash-sale timing rules, which increases the risk of unintended tax consequences.

## Target Users
Employees who receive equity grants and dividends and want to understand potential wash-sale timing risks.

## Primary Persona
An employee with recurring RSU vests and periodic dividends who wants to plan trades without accidentally triggering wash-sale restrictions.

## User Goals
- Add and store stock tickers
- Add and label grant dates and dividend dates
- Visualize loss-sale warning windows around acquisition/dividend events
- Define multiple named schedules per ticker

## User Journey
1. Add a ticker and acquisition/dividend events (with an optional schedule).
2. View the calendar with highlighted warning windows and plain-language labels.
3. Adjust timing plans based on the visualized windows.

## Success Metrics
- A user can enter a ticker, events, and schedules in under two minutes.
- A user can visually identify upcoming warning windows for the next 90 days.

## Definitions
- Stock grant: IRS language generally treats equity awards as “property transferred in connection with the performance of services” (IRC §83). For Washday, a stock grant is an employer equity award that results in shares becoming the employee’s property at a specific event date. These events are treated as acquisitions for wash-sale timing.
- Grant event types (MVP): RSU vest/settlement dates, ESPP purchase dates, and stock option exercise dates. Schedules are captured as date series only (no quantities or prices for MVP).
- Schedule: A named series of acquisition dates attached to a ticker.
  Examples: “one-time event”, “1yr cliff + quarterly vest”, “quarterly vest”, “4yr monthly vest”, “2yr cliff + annual vest”.

## MVP Scope
- Add labelled dividend and grant dates to a calendar
- Display loss-sale warning windows on the calendar

## Out of Scope (For MVP)
- External data integrations for grants or dividends
- Tax advice or automated tax filing
- Brokerage account connections
- Notifications
- Rule customization

## Constraints
- Privacy first
- Data sources to be determined

## Monetization
- Ad-funded model (TBD: ad placement and privacy constraints)

## Rules And Assumptions
- U.S. IRS wash-sale rules are the initial target unless otherwise specified
- Grants and dividends are modeled as user-entered events used to compute risk windows
- The product provides informational visualization only, not tax advice
- Warning windows are shown as pre-event and post-event days

## IRS References
- IRS Publication 550 (Investment Income and Expenses), wash-sale guidance
- Internal Revenue Code §83, property transferred in connection with performance of services

## External References
- IRS Publication 550 https://www.irs.gov/publications/p550
- IRS Code https://www.irs.gov/irb/2007-31_IRB
