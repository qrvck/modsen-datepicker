import React, { Component } from 'react';

import { checkIsCurrentDay, checkIsDayFromMonth } from '../../../../utils/checkDay';
import { IFullMonth } from '../../../../utils/createFullMonth';
import { DayCell, WeekRow } from './styled';

interface ICalendarDays {
  currentMonth: IFullMonth;
}

function getClassNameForDayCell(isCurrentDay: boolean, isDayFromMonth: boolean) {
  let className = '';

  className = isCurrentDay ? 'current' : '';
  className = !isDayFromMonth ? `${className} outside` : className;

  return className;
}

class CalendarDays extends Component<ICalendarDays> {
  createWeekRows = () => {
    const dayInWeek = 7;
    const { allDays: days, monthIndex } = this.props.currentMonth;
    const weekRows = [];

    for (let i = 0; i < days.length / dayInWeek; i++) {
      const daysOfWeek = days.slice(i * dayInWeek, dayInWeek * (i + 1));

      const weekRow = (
        <WeekRow>
          {daysOfWeek.map((day) => {
            const isCurrentDay = checkIsCurrentDay(day);
            const isDayFromMonth = checkIsDayFromMonth(day, monthIndex);

            return (
              <DayCell
                className={getClassNameForDayCell(isCurrentDay, isDayFromMonth)}
                key={day.dayNumber + day.monthIndex}
              >
                {day.dayNumber}
              </DayCell>
            );
          })}
        </WeekRow>
      );
      weekRows.push(weekRow);
    }

    return weekRows;
  };

  render() {
    const { createWeekRows } = this;

    return <div>{...createWeekRows()}</div>;
  }
}

export { CalendarDays };
