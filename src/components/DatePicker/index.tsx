import React from 'react';

import { Calendar } from './Calendar';
import { Context } from './Context';
import { DateInput } from './DateInput';

interface IDatePickerProps {
  firstDayOfWeek?: 'sunday' | 'monday';
  range?: boolean;
  todoList?: boolean;
  holidays?: boolean;
  maxDate?: Date;
  minDate?: Date;
  weekends?: boolean;
}

function DatePicker({
  firstDayOfWeek = 'monday',
  range = false,
  todoList = false,
  holidays = false,
  weekends = false,
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
      holidays={holidays}
      weekends={weekends}
    >
      <DateInput />
      <Calendar />
    </Context>
  );
}

export { DatePicker };
