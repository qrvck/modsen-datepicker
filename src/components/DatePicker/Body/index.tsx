import React, { Component } from 'react';

import { IFullMonth } from '../../../utils/createFullMonth';
import { CalendarDays } from './CalendarDays';
import { CalendarMonths } from './CalendarMonths';
import { DayNames } from './DayNames';

interface IBodyProps {
  firstDayOfWeek?: 'sunday' | 'monday';
  mode: 'days' | 'months' | 'years';
  currentMonth: IFullMonth;
  onChangeMonth: (monthIndex: number) => void;
}

class Body extends Component<IBodyProps> {
  render() {
    const { firstDayOfWeek, currentMonth, mode, onChangeMonth } = this.props;

    return (
      <div>
        {mode === 'days' && (
          <>
            <DayNames firstDayOfWeek={firstDayOfWeek}></DayNames>
            <CalendarDays currentMonth={currentMonth} />
          </>
        )}
        {mode === 'months' && <CalendarMonths onChangeMonth={onChangeMonth} />}
      </div>
    );
  }
}

export { Body };
