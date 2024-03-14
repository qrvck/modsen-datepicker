import React from 'react';

import { IDatePickerProps } from '@/@types/datePicker';
import { DateInput } from '@/components/DateInput';
import { Context } from '@/providers/DataProvider';

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
    </Context>
  );
}

export { DatePicker };
