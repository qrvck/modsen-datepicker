import React from 'react';

import { Calendar } from './Calendar';
import { Context } from './Context';
import { Input } from './Input';

interface IDatePickerProps {
  firstDayOfWeek?: 'sunday' | 'monday';
  range?: boolean;
  todoList?: boolean;
  withHolidays?: boolean;
  maxValue?: Date;
  minValue?: Date;
}

function DatePicker({
  firstDayOfWeek = 'monday',
  range = false,
  todoList = false,
  withHolidays = false,
  maxValue,
  minValue,
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
      <Input />
      <Calendar />
    </Context>
  );
}

export { DatePicker };
