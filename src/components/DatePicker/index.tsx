import React from 'react';

import { Context } from './Context';
import { ServiceClass } from './ServiceClass';

interface IDatePickerProps {
  firstDayOfWeek?: 'sunday' | 'monday';
  range?: boolean;
  todoList?: boolean;
  maxValue?: Date;
  minValue?: Date;
  withHolidays?: boolean;
}

function DatePicker({
  firstDayOfWeek = 'monday',
  range = false,
  todoList = false,
  maxValue,
  minValue,
  withHolidays = false,
}: IDatePickerProps) {
  return (
    <Context
      firstDayOfWeek={firstDayOfWeek}
      range={range}
      todoList={todoList}
      maxValue={maxValue}
      minValue={minValue}
      withHolidays={withHolidays}
    >
      <ServiceClass />
    </Context>
  );
}

export { DatePicker };
