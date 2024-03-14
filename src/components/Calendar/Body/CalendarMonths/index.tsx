import React, { Component } from 'react';

import { getMonthNames } from '@/utils/get/getMonthNames';

import { MonthCell, Wrapper } from './styled';

interface ICalendarMonthsProps {
  displayedYear: number;
  onChangeMonth: (monthIndex: number) => void;
}

class CalendarMonths extends Component<ICalendarMonthsProps> {
  createMonthCells = () => {
    const { displayedYear, onChangeMonth } = this.props;
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonthIndex = now.getMonth();

    return getMonthNames().map(({ monthName, monthIndex }) => (
      <MonthCell
        className={
          currentYear === displayedYear && currentMonthIndex === monthIndex ? 'current' : ''
        }
        onClick={() => onChangeMonth(monthIndex)}
        key={monthName}
      >
        {monthName}
      </MonthCell>
    ));
  };

  render() {
    const { createMonthCells } = this;

    return <Wrapper>{...createMonthCells()}</Wrapper>;
  }
}

export { CalendarMonths };
