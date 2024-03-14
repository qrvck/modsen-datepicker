import { createMonth } from '../create/createMonth';

function getMonthNames() {
  const monthCount = 12;
  const monthNames = [];

  for (let i = 0; i < monthCount; i++) {
    const date = new Date();
    date.setMonth(i);

    const { monthNumber, monthIndex, monthName, shortMonthName } = createMonth(date);
    monthNames[monthIndex] = { monthNumber, monthIndex, monthName, shortMonthName };
  }

  return monthNames;
}

export { getMonthNames };
