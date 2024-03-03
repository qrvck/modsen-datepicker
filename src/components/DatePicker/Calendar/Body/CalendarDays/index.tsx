import React, { Component } from 'react';

import { ContextData } from '../../../Context';
import { withCurrentDate } from './hoc/withCurrentDate';
// import { withSingleSelect } from './hoc/withSingleSelect';
import { Root } from './Root';

type IComponentHOC = typeof Root | ReturnType<typeof withCurrentDate>;
// | ReturnType<typeof withSingleSelect>;

class CalendarDays extends Component {
  static contextType = ContextData;
  declare context: React.ContextType<typeof ContextData>;

  render() {
    const {
      // config: { range },
      params: { displayedMonthData },
    } = this.context;

    let ComponentHOC: IComponentHOC = Root;

    // if (!range) {
    //   ComponentHOC = withSingleSelect(ComponentHOC);
    // }

    ComponentHOC = withCurrentDate(ComponentHOC);

    return <ComponentHOC displayedMonthData={displayedMonthData} />;
  }
}

export { CalendarDays };
