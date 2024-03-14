import React, { Component } from 'react';

import { ContextData } from '@/providers/DataProvider';

import { CalendarDays } from './CalendarDays';
import { CalendarMonths } from './CalendarMonths';
import { CalendarYears } from './CalendarYears';
import { DayNames } from './DayNames';

class Body extends Component {
  static contextType = ContextData;
  declare context: React.ContextType<typeof ContextData>;

  render() {
    const {
      params: { mode },
    } = this.context;

    return (
      <div>
        {mode === 'days' && (
          <>
            <DayNames />
            <CalendarDays />
          </>
        )}
        {mode === 'months' && <CalendarMonths />}
        {mode === 'years' && <CalendarYears />}
      </div>
    );
  }
}

export { Body };
