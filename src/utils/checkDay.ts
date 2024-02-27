import { IDay } from './createDay';

function checkIsCurrentDay(day: IDay) {
  const today = new Date();
  const currentDayNumber = today.getDate();
  const currentMonthIndex = today.getMonth();
  const currentYear = today.getFullYear();

  const { dayNumber, monthIndex, year } = day;

  return dayNumber === currentDayNumber && monthIndex === currentMonthIndex && year === currentYear;
}

function checkIsDayFromMonth(day: IDay, monthIndex: number) {
  return day.monthIndex === monthIndex;
}

export { checkIsCurrentDay, checkIsDayFromMonth };