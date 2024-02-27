import React, { Component } from 'react';

import { IFullMonth } from '../../../utils/createFullMonth';
import { CalendarDays } from './CalendarDays';
import { DayNames } from './DayNames';

interface IBodyProps {
  firstDayOfWeek?: 'sunday' | 'monday';
  currentMonth: IFullMonth;
}

class Body extends Component<IBodyProps> {
  render() {
    const { firstDayOfWeek, currentMonth } = this.props;

    return (
      <div>
        <DayNames firstDayOfWeek={firstDayOfWeek}></DayNames>
        <CalendarDays currentMonth={currentMonth} />
      </div>
    );
  }
}

export { Body };
