import React, { Component } from 'react';

import { ContextData } from '../../../Context';
import { Root } from '.';
import { withCurrentDate } from './hoc/withCurrentDate';
import { withMinMaxDate } from './hoc/withMinMaxDate';
import { withSingleSelect } from './hoc/withSingleSelect';

type IComponentHOC =
  | typeof Root
  | ReturnType<typeof withCurrentDate>
  | ReturnType<typeof withMinMaxDate>
  | ReturnType<typeof withSingleSelect>;

class CalendarDays extends Component {
  static contextType = ContextData;
  declare context: React.ContextType<typeof ContextData>;

  render() {
    const {
      config: { range, minDate, maxDate },
      params: { displayedMonthData },
    } = this.context;

    let ComponentHOC: IComponentHOC = Root;
    ComponentHOC = withCurrentDate(ComponentHOC);

    if (minDate || maxDate) {
      ComponentHOC = withMinMaxDate(ComponentHOC);
    }

    if (!range) {
      ComponentHOC = withSingleSelect(ComponentHOC);
    }

    return <ComponentHOC displayedMonthData={displayedMonthData} />;
  }
}

export { CalendarDays };
