import { createDate } from './createDate';
import { createMonth } from './createMonth';

function createYear(date: Date, firstDayOfWeek: 'sunday' | 'monday' = 'monday') {
  const monthCount = 12;
  const { year, shortYear } = createDate(date, firstDayOfWeek);

  const createYearMonths = (monthCount: number) => {
    const months = [];

    for (let i = 0; i <= monthCount - 1; i += 1) {
      const yearMonth = new Date(date.getTime());

      yearMonth.setMonth(i);
      months[i] = createMonth(yearMonth, firstDayOfWeek);
    }

    return months;
  };

  const yearMonths = createYearMonths(monthCount);

  return { months: yearMonths, year, shortYear };
}

export { createYear };
