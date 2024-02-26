import { createDate } from './createDate';
import { createDay } from './createDay';

function getNumberOfDaysInMonth(date: Date) {
  const copiedDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
  copiedDate.setDate(copiedDate.getDate() - 1);

  return copiedDate.getDate();
}

function createMonth(date: Date, firstDayOfWeek: 'sunday' | 'monday' = 'monday') {
  const numberOfDaysInMonth = getNumberOfDaysInMonth(date); // количество дней в месяце
  const { monthNumber, monthIndex, monthName, shortMonthName, year, shortYear } = createDate(
    date,
    firstDayOfWeek
  );

  const createMonthDays = (numberOfDaysInMonth: number) => {
    const days = [];

    for (let i = 0; i < numberOfDaysInMonth; i++) {
      const monthDay = new Date(date.getTime());

      monthDay.setDate(i + 1);
      days[i] = createDay(monthDay, firstDayOfWeek);
    }

    return days;
  };

  const monthDays = createMonthDays(numberOfDaysInMonth);

  return {
    monthNumber,
    monthIndex,
    monthName,
    shortMonthName,
    numberOfDaysInMonth,
    days: monthDays,
    year,
    shortYear,
  };
}

export { createMonth };
