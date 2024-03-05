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

function checkIsDayGreaterDate(day: IDay, date: Date) {
  const { dayNumber, monthIndex, year } = day;

  return new Date(year, monthIndex, dayNumber) > date;
}

function checkIsDayLessDate(day: IDay, date: Date) {
  const { dayNumber, monthIndex, year } = day;

  return new Date(year, monthIndex, dayNumber) < date;
}

function checkAreDaysEqual(day1: IDay, day2: IDay) {
  return (
    day1.dayNumber === day2.dayNumber &&
    day1.monthIndex === day2.monthIndex &&
    day1.year === day2.year
  );
}

export {
  checkAreDaysEqual,
  checkIsCurrentDay,
  checkIsDayFromMonth,
  checkIsDayGreaterDate,
  checkIsDayLessDate,
};
