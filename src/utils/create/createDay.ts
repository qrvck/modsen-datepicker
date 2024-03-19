import { createDate } from './createDate';

function createDay(date: Date, firstDayOfWeek: 'sunday' | 'monday' = 'monday') {
  const {
    dayNumber,
    fullDayNumber,
    dayName,
    shortDayName,
    dayNumberInWeek,
    monthNumber,
    fullMonthNumber,
    monthIndex,
    monthName,
    year,
    timestamp,
  } = createDate(date, firstDayOfWeek);

  return {
    dayNumber,
    fullDayNumber,
    dayName,
    shortDayName,
    dayNumberInWeek,
    monthNumber,
    fullMonthNumber,
    monthIndex,
    monthName,
    year,
    timestamp,
  };
}

export type IDay = ReturnType<typeof createDay>;

export { createDay };
