function getWeekNumberInYear(date: Date) {
  const millisecondsInDay = 86400000;
  const daysInWeek = 7;

  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const passedDaysSinceStartOfYear = (date.getTime() - startOfYear.getTime()) / millisecondsInDay;

  return Math.ceil(passedDaysSinceStartOfYear / daysInWeek);
}

function createDate(date: Date, firstDayOfWeek: 'sunday' | 'monday' = 'monday') {
  const dayNumber = date.getDate(); // текущее число месяца (25 число)
  const fullDayNumber = dayNumber < 10 ? `0${dayNumber}` : `${dayNumber}`;
  const dayName = date.toLocaleDateString('default', { weekday: 'long' }); // название дня недели (воскресенье)
  const shortDayName = date.toLocaleDateString('default', { weekday: 'short' }); // название дня недели (вс)
  let dayNumberInWeek = date.getDay() === 0 ? 7 : date.getDay(); // номер дня в неделе (понедельник = 1; воскресенье = 7 день)
  if (firstDayOfWeek === 'sunday') dayNumberInWeek = date.getDay() + 1; // если первый день sunday - воскресенье = 1; понедельник = 2

  const monthNumber = date.getMonth() + 1; // число месяца (2)
  const fullMonthNumber = monthNumber < 10 ? `0${monthNumber}` : `${monthNumber}`;
  const monthIndex = date.getMonth(); // индекс месяца
  const monthName = date.toLocaleDateString('default', { month: 'long' }); // февраль
  const shortMonthName = date.toLocaleDateString('default', { month: 'short' }); // февр.

  const year = date.getFullYear(); // год 2024
  const shortYear = date.toLocaleDateString('default', { year: '2-digit' }); // год 24

  const timestamp = date.getTime(); // 234324324324134134
  const weekNumberInYear = getWeekNumberInYear(date); // номер недели в году (8)

  return {
    dayNumber,
    fullDayNumber,
    dayName,
    shortDayName,
    dayNumberInWeek,
    monthNumber,
    fullMonthNumber,
    monthName,
    shortMonthName,
    monthIndex,
    year,
    shortYear,
    timestamp,
    weekNumberInYear,
  };
}

export { createDate };
