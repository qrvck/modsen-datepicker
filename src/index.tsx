import React from 'react';

import { IDatePickerProps } from '@/@types/datePicker';
import { DateInput } from '@/components/DateInput';
import { DataContext } from '@/providers/DataProvider';

import { ThemeProvider } from './providers/ThemeProvider';

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
    <DataContext
      firstDayOfWeek={firstDayOfWeek}
      range={range}
      todoList={todoList}
      maxDate={maxDate}
      minDate={minDate}
      holidays={holidays}
      weekends={weekends}
    >
      <ThemeProvider>
        <DateInput />
      </ThemeProvider>
    </DataContext>
  );
}

export { DatePicker };
