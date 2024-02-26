import { createMonth } from './createMonth';

function createFullMonth(date: Date, firstDayOfWeek: 'sunday' | 'monday' = 'monday') {
  const daysInWeek = 7;

  const currentMonth = createMonth(date, firstDayOfWeek);
  const prevMonth = createMonth(new Date(date.getFullYear(), date.getMonth() - 1), firstDayOfWeek);
  const nextMonth = createMonth(new Date(date.getFullYear(), date.getMonth() + 1), firstDayOfWeek);

  const firstDayOfCurrentMonth = currentMonth.days[0];
  const numberOfDaysFromPrevMonth = firstDayOfCurrentMonth.dayNumberInWeek - 1;

  const lastDayOfCurrentMonth = currentMonth.days[currentMonth.days.length - 1];
  const numberOfDaysFromNextMonth = daysInWeek - lastDayOfCurrentMonth.dayNumberInWeek;

  const getAllDaysOfMonth = () => {
    const allDaysOfMonth = [];

    for (let i = numberOfDaysFromPrevMonth; i >= 1; i--) {
      const dayOfPrevMonth = prevMonth.days.at(i * -1);
      allDaysOfMonth.push(dayOfPrevMonth);
    }

    allDaysOfMonth.push(...currentMonth.days);

    for (let i = 0; i < numberOfDaysFromNextMonth; i++) {
      const dayOfNextMonth = nextMonth.days[i];
      allDaysOfMonth.push(dayOfNextMonth);
    }

    return allDaysOfMonth;
  };

  const allDaysOfMonth = getAllDaysOfMonth();

  return {
    monthNumber: currentMonth.monthNumber,
    monthIndex: currentMonth.monthIndex,
    monthName: currentMonth.monthName,
    shortMonthName: currentMonth.shortMonthName,
    year: currentMonth.year,
    shortYear: currentMonth.shortYear,
    allDays: allDaysOfMonth,
  };
}

export { createFullMonth };
