import React, { Component } from 'react';

import { IDay } from '../../../../utils/createDay';
import { DayCell, WeekRow } from './styled';

interface ICalendarDays {
  days: IDay[];
}

class CalendarDays extends Component<ICalendarDays> {
  currentDayNumber = new Date().getDate();
  currentMonthIndex = new Date().getMonth();
  currentYear = new Date().getFullYear();

  createWeekRows = () => {
    const dayInWeek = 7;
    const { days } = this.props;
    const { currentDayNumber, currentMonthIndex, currentYear } = this;
    const weekRows = [];

    for (let i = 0; i < days.length / dayInWeek; i++) {
      const daysOfWeek = days.slice(i * dayInWeek, dayInWeek * (i + 1));

      const weekRow = (
        <WeekRow>
          {daysOfWeek.map(({ dayNumber, monthIndex, year }) => {
            const isCurrentDay =
              dayNumber === currentDayNumber &&
              monthIndex === currentMonthIndex &&
              year === currentYear;

            return (
              <DayCell className={isCurrentDay ? 'current' : ''} key={dayNumber + monthIndex}>
                {dayNumber}
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
