import React, { Component } from 'react';

import { getMonthNames } from '../../../../utils/getMonthNames';
import { MonthCell, Wrapper } from './styled';

interface ICalendarMonthsProps {
  onChangeMonth: (monthIndex: number) => void;
}

class CalendarMonths extends Component<ICalendarMonthsProps> {
  createMonthCells = () => {
    const { onChangeMonth } = this.props;

    return getMonthNames().map(({ monthName, monthIndex }) => (
      <MonthCell onClick={() => onChangeMonth(monthIndex)} key={monthName}>
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
