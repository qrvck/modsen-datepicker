import React, { Component } from 'react';

import { IDay } from '../../../../../../utils/createDay';
import { ContextData } from '../../../../Context';
import {
  withCurrentDate,
  withHolidays,
  withMinMaxDate,
  withRangeSelect,
  withSingleSelect,
  withTodoList,
  withWeekends,
} from './hoc';
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
    const { minDate, maxDate, range, weekends, holidays, todoList } = this.context.config;

    let ComponentHOC: IComponentHOC = Root;
    ComponentHOC = withCurrentDate(ComponentHOC);

    if (minDate || maxDate) {
      ComponentHOC = withMinMaxDate(ComponentHOC);
    }

    if (weekends) ComponentHOC = withWeekends(ComponentHOC);
    if (holidays) ComponentHOC = withHolidays(ComponentHOC);
    if (todoList) ComponentHOC = withTodoList(ComponentHOC);

    if (!range) {
      ComponentHOC = withSingleSelect(ComponentHOC);
    } else {
      ComponentHOC = withRangeSelect(ComponentHOC);
    }

    return <ComponentHOC day={day} />;
  }
}

export { DayCell };
