import React, { Component } from 'react';

import { IDay } from '../../../../../../utils/createDay';
import { ContextData } from '../../../../Context';
import { withCurrentDate } from './hoc/withCurrentDate';
import { withMinMaxDate } from './hoc/withMinMaxDate';
import { withSingleSelect } from './hoc/withSingleSelect';
import { withWeekends } from './hoc/withWeekends';
import { Root } from './Root';

interface IDayCellProps {
  day: IDay;
}

type IComponentHOC =
  | typeof Root
  | ReturnType<typeof withCurrentDate>
  | ReturnType<typeof withMinMaxDate>;

class DayCell extends Component<IDayCellProps> {
  static contextType = ContextData;
  declare context: React.ContextType<typeof ContextData>;

  render() {
    const { day } = this.props;
    const { minDate, maxDate, range, weekends } = this.context.config;

    let ComponentHOC: IComponentHOC = Root;
    ComponentHOC = withCurrentDate(ComponentHOC);

    if (minDate || maxDate) {
      ComponentHOC = withMinMaxDate(ComponentHOC);
    }

    if (weekends) ComponentHOC = withWeekends(ComponentHOC);

    if (!range) {
      ComponentHOC = withSingleSelect(ComponentHOC);
    }

    return <ComponentHOC day={day} />;
  }
}

export { DayCell };
