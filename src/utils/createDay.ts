import { createDate } from './createDate';

function createDay(date: Date, firstDayOfWeek: 'sunday' | 'monday' = 'monday') {
  const {
    dayNumber,
    dayName,
    shortDayName,
    dayNumberInWeek,
    monthNumber,
    monthIndex,
    monthName,
    year,
  } = createDate(date, firstDayOfWeek);

  return {
    dayNumber,
    dayName,
    shortDayName,
    dayNumberInWeek,
    monthNumber,
    monthIndex,
    monthName,
    year,
    props: {},
  };
}

export type IDay = ReturnType<typeof createDay>;

export { createDay };
