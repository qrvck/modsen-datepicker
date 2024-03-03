import React from 'react';

import { Calendar } from './Calendar';
import { Context } from './Context';
import { Input } from './Input';

interface IDatePickerProps {
  firstDayOfWeek?: 'sunday' | 'monday';
  range?: boolean;
  todoList?: boolean;
  withHolidays?: boolean;
  maxDate?: Date;
  minDate?: Date;
}

function DatePicker({
  firstDayOfWeek = 'monday',
  range = false,
  todoList = false,
  withHolidays = false,
  maxDate,
  minDate,
}: IDatePickerProps) {
  return (
    <Context
      firstDayOfWeek={firstDayOfWeek}
      range={range}
      todoList={todoList}
      maxDate={maxDate}
      minDate={minDate}
      withHolidays={withHolidays}
    >
      <Input />
      <Calendar />
    </Context>
  );
}

export { DatePicker };
