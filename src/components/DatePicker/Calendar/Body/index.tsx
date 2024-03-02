import React, { Component } from 'react';

import { IFullMonth } from '../../../../utils/createFullMonth';
import { ContextData } from '../../Context';
import { CalendarDays } from './CalendarDays';
import { CalendarMonths } from './CalendarMonths';
import { CalendarYears } from './CalendarYears';
import { DayNames } from './DayNames';

interface IBodyProps {
  monthData: IFullMonth;
}

class Body extends Component<IBodyProps> {
  static contextType = ContextData;
  declare context: React.ContextType<typeof ContextData>;

  onChangeMonth = (monthIndex: number) => {
    const {
      params: { displayedYear, changeMode, changeDisplayedMonthIndex, changeDisplayedMonthData },
    } = this.context;

    changeMode('days');
    changeDisplayedMonthIndex(monthIndex);
    changeDisplayedMonthData(new Date(displayedYear, monthIndex));
  };

  onChangeYear = (year: number) => {
    const {
      params: { displayedMonthIndex, changeMode, changeDisplayedYear, changeDisplayedMonthData },
    } = this.context;

    changeMode('days');
    changeDisplayedYear(year);
    changeDisplayedMonthData(new Date(year, displayedMonthIndex));
  };

  render() {
    const {
      config: { firstDayOfWeek },
      params: { mode, displayedYear },
    } = this.context;

    const { monthData } = this.props;
    const { onChangeMonth, onChangeYear } = this;

    return (
      <div>
        {mode === 'days' && (
          <>
            <DayNames firstDayOfWeek={firstDayOfWeek}></DayNames>
            <CalendarDays currentMonth={monthData} />
          </>
        )}
        {mode === 'months' && (
          <CalendarMonths displayedYear={displayedYear} onChangeMonth={onChangeMonth} />
        )}
        {mode === 'years' && <CalendarYears onChangeYear={onChangeYear} />}
      </div>
    );
  }
}

export { Body };
