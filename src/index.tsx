import React from 'react';

import { IDatePickerProps } from '@/@types/datePicker';
import { DateInput } from '@/components/DateInput';
import { DataProvider } from '@/providers/DataProvider';

import { ThemeProvider } from './providers/ThemeProvider';

function DatePicker(props: IDatePickerProps) {
  return (
    <DataProvider {...props}>
      <ThemeProvider>
        <DateInput />
      </ThemeProvider>
    </DataProvider>
  );
}

export { DatePicker };
