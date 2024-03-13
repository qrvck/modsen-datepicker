import React, { Component } from 'react';

import { ContextData } from '../../../../../providers/DataProvider';
import { IDay } from '../../../../../utils/createDay';
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

interface IDayCellState {
  minDate?: Date;
  maxDate?: Date;
  range: boolean;
  weekends: boolean;
  holidays: boolean;
  todoList: boolean;
}

type IComponentHOC =
  | typeof Root
  | ReturnType<typeof withCurrentDate>
  | ReturnType<typeof withMinMaxDate>;

class DayCell extends Component<IDayCellProps, IDayCellState> {
  static contextType = ContextData;
  declare context: React.ContextType<typeof ContextData>;

  state = {
    minDate: this.context.config.minDate,
    maxDate: this.context.config.maxDate,
    range: this.context.config.range,
    weekends: this.context.config.weekends,
    holidays: this.context.config.holidays,
    todoList: this.context.config.todoList,
  };

  ComponentHOC = this.configureComponent();

  configureComponent() {
    const { minDate, maxDate, range, weekends, holidays, todoList } = this.context.config;

    let ComponentHOC: IComponentHOC = Root;
    ComponentHOC = withCurrentDate(ComponentHOC);

    if (minDate || maxDate) ComponentHOC = withMinMaxDate(ComponentHOC);
    if (weekends) ComponentHOC = withWeekends(ComponentHOC);
    if (holidays) ComponentHOC = withHolidays(ComponentHOC);
    if (todoList) ComponentHOC = withTodoList(ComponentHOC);

    if (!range) {
      ComponentHOC = withSingleSelect(ComponentHOC);
    } else {
      ComponentHOC = withRangeSelect(ComponentHOC);
    }

    return ComponentHOC;
  }

  componentDidUpdate() {
    const { state } = this;
    const { minDate, maxDate, range, weekends, holidays, todoList } = this.context.config;

    if (
      minDate !== state.minDate ||
      maxDate !== state.maxDate ||
      range !== state.range ||
      weekends !== state.weekends ||
      holidays !== state.holidays ||
      todoList !== state.todoList
    ) {
      this.ComponentHOC = this.configureComponent();

      this.setState({
        minDate,
        maxDate,
        range,
        weekends,
        holidays,
        todoList,
      });
    }
  }

  render() {
    const { day } = this.props;
    const { ComponentHOC } = this;

    return <ComponentHOC day={day} />;
  }
}

export { DayCell };
