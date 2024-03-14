import { createDay } from '../create/createDay';

function getDayNames(firstDayOfWeek: 'sunday' | 'monday' = 'monday') {
  const dayCountInWeek = 7;
  const dayNames = [];

  for (let i = 0; i < dayCountInWeek; i++) {
    const date = new Date();
    date.setDate(i + 1);

    const { dayName, shortDayName, dayNumberInWeek } = createDay(date, firstDayOfWeek);
    dayNames[dayNumberInWeek - 1] = { dayName, shortDayName, dayNumberInWeek };
  }

  return dayNames;
}

export { getDayNames };
