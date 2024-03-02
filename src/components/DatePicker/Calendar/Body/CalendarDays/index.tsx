import React, { Component } from 'react';

import { checkIsCurrentDay, checkIsDayFromMonth } from '../../../../../utils/checkDay';
import { IFullMonth } from '../../../../../utils/createFullMonth';
import { DayCell, Wrapper } from './styled';

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
  createDayCells = () => {
    const { allDays, monthIndex } = this.props.currentMonth;

    return allDays.map((day) => {
      const isCurrentDay = checkIsCurrentDay(day);
      const isDayFromMonth = checkIsDayFromMonth(day, monthIndex);

      return (
        <DayCell
          className={getClassNameForDayCell(isCurrentDay, isDayFromMonth)}
          key={`${day.dayNumber} ${day.monthIndex}`}
        >
          {day.dayNumber}
        </DayCell>
      );
    });
  };

  render() {
    const { createDayCells } = this;

    return <Wrapper>{...createDayCells()}</Wrapper>;
  }
}

export { CalendarDays };
