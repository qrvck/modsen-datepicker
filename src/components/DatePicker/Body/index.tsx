import React, { Component } from 'react';

import { IDay } from '../../../utils/createDay';
import { CalendarDays } from './CalendarDays';
import { DayNames } from './DayNames';

interface IBodyProps {
  firstDayOfWeek?: 'sunday' | 'monday';
  days: IDay[];
}

class Body extends Component<IBodyProps> {
  render() {
    const { firstDayOfWeek, days } = this.props;

    return (
      <div>
        <DayNames firstDayOfWeek={firstDayOfWeek}></DayNames>
        <CalendarDays days={days} />
      </div>
    );
  }
}

export { Body };
