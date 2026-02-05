# Product Context

## One-Liner
Washday is a simple visual calculator to help employees who receive stock grants and dividends visualize upcoming wash-sale risk windows.

## Target Users
Employees who receive equity grants and dividends and want to understand potential wash-sale timing risks.

## User Goals
- Add and store stock tickers
- Add and label grant dates and dividend dates
- Visualize windows where wash-sale rules apply or do not apply

## Definitions
- Stock grant: IRS language generally treats equity awards as “property transferred in connection with the performance of services” (IRC §83). For Washday, a stock grant is an employer equity award that results in shares becoming the employee’s property at a specific event date. These events are treated as acquisitions for wash-sale timing.
- Grant event types (MVP): RSU vest/settlement dates, ESPP purchase dates, and stock option exercise dates. Vesting schedules are captured as date series only (no quantities or prices for MVP).

## MVP Scope
- Add labelled dividend and grant dates to a calendar
- Display wash-sale windows on the calendar

## Out of Scope (For MVP)
- External data integrations for grants or dividends
- Tax advice or automated tax filing
- Brokerage account connections
- Notifications
- Rule customization

## Constraints
- Privacy first
- Data sources to be determined

## Rules And Assumptions
- U.S. IRS wash-sale rules are the initial target unless otherwise specified
- Grants and dividends are modeled as user-entered events used to compute risk windows
- The product provides informational visualization only, not tax advice

## IRS References
- IRS Publication 550 (Investment Income and Expenses), wash-sale guidance
- Internal Revenue Code §83, property transferred in connection with performance of services

## External References
- https://www.irs.gov/publications/p550
- https://www.irs.gov/irb/2007-31_IRB
