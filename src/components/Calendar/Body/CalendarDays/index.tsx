import React, { Component } from 'react';

import { ContextData } from '../../../../providers/DataProvider';
import { DayCell } from './DayCell';
import { Wrapper } from './styled';

class CalendarDays extends Component {
  static contextType = ContextData;
  declare context: React.ContextType<typeof ContextData>;

  createDayCells = () => {
    const { allDays } = this.context.params.displayedMonthData;

    return allDays.map((day) => {
      return <DayCell day={day} key={`${day.dayNumber} ${day.monthIndex}`} />;
    });
  };

  render() {
    const { createDayCells } = this;

    return <Wrapper>{...createDayCells()}</Wrapper>;
  }
}

export { CalendarDays };
