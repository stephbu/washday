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
- Visualize windows where wash-sale rules apply or do not apply
- Define multiple vesting schedules per ticker with named schedule types

## User Journey
1. Starts with a blank calendar and "add grant symbol"
2. Investor picks symbol, and schedule, it fills in dividends.
3. View the calendar with highlighted risk windows and plain-language labels.
4. Adjust timing plans based on the visualized windows.

## Success Metrics
- Investor can quickly enter symbol, grant date(s) and vesting schedules.  See quickly see tax risk windows.
- Investor can visually identify upcoming wash-sale risk windows for the next 90 days within sixty.

## Definitions
- Stock grant: IRS language generally treats equity awards as “property transferred in connection with the performance of services” (IRC §83). For Washday, a stock grant is an employer equity award that results in shares becoming the employee’s property at a specific event date. These events are treated as acquisitions for wash-sale timing.
- Grant event types (MVP): RSU vest/settlement dates, ESPP purchase dates, and stock option exercise dates. Vesting schedules are captured as date series only (no quantities or prices for MVP).
- Vesting schedule: A named series of acquisition dates attached to a ticker (e.g., “1yr cliff + quarterly vest”).
  Example schedules: “1yr cliff + quarterly vest”, “4yr monthly vest”, “2yr cliff + annual vest”.

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
  - Alpha Vantage to source Dividend Events?

## Monetization
- Ad-funded model (TBD: ad placement and privacy constraints)

## Rules And Assumptions
- U.S. IRS wash-sale rules are the initial target unless otherwise specified
- Grants and dividends are modeled as user-entered events used to compute risk windows
- The product provides informational visualization only, not tax advice

## IRS References
- IRS Publication 550 (Investment Income and Expenses), wash-sale guidance
- Internal Revenue Code §83, property transferred in connection with performance of services

## External References
- IRS Publication 550 https://www.irs.gov/publications/p550
- IRS Code https://www.irs.gov/irb/2007-31_IRB
- Alpha Vantage API https://www.alphavantage.co/documentation/
