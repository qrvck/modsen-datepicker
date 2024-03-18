import React, { Component } from 'react';

import { ContextData } from '../../../../providers/DataProvider';
import { getMonthNames } from '../../../../utils/get/getMonthNames';
import { MonthCell, Wrapper } from './styled';

class CalendarMonths extends Component {
  static contextType = ContextData;
  declare context: React.ContextType<typeof ContextData>;

  handleClickOnMonth = (monthIndex: number) => {
    const {
      params: { displayedYear, changeMode, changeDisplayedMonthIndex, changeDisplayedMonthData },
    } = this.context;

    changeMode('days');
    changeDisplayedMonthIndex(monthIndex);
    changeDisplayedMonthData(new Date(displayedYear, monthIndex));
  };

  createMonthCells = () => {
    const {
      params: { displayedYear },
    } = this.context;

    const { handleClickOnMonth } = this;
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonthIndex = now.getMonth();

    return getMonthNames().map(({ monthName, monthIndex }) => (
      <MonthCell
        className={
          currentYear === displayedYear && currentMonthIndex === monthIndex ? 'current' : ''
        }
        onClick={() => handleClickOnMonth(monthIndex)}
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
