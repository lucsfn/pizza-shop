import { http, HttpResponse } from 'msw'

import type { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '19/08/2025', receipt: 2000 },
    { date: '20/08/2025', receipt: 800 },
    { date: '21/08/2025', receipt: 8000 },
    { date: '22/08/2025', receipt: 540 },
    { date: '23/08/2025', receipt: 400 },
    { date: '24/08/2025', receipt: 700 },
    { date: '25/08/2025', receipt: 1000 },
  ])
})