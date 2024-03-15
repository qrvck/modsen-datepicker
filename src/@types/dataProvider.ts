import { ReactNode } from 'react';

import { IDay } from '@/utils/create/createDay';
import { IFullMonth } from '@/utils/create/createFullMonth';

import { IDatePickerProps } from './datePicker';

interface IDataProviderProps extends IDatePickerProps {
  children: ReactNode;
}

interface IContextData {
  config: {
    firstDayOfWeek: 'sunday' | 'monday';
    range: boolean;
    todoList: boolean;
    maxDate?: Date;
    minDate?: Date;
    holidays: boolean;
    weekends: boolean;
  };

  params: {
    isOpenCalendar: boolean;
    mode: 'days' | 'months' | 'years';
    displayedMonthData: IFullMonth;
    displayedMonthIndex: number;
    displayedYear: number;
    changeIsOpenCalendar: (open: boolean) => void;
    changeMode: (mode: 'days' | 'months' | 'years') => void;
    changeDisplayedMonthIndex: (monthIndex: number) => void;
    changeDisplayedYear: (year: number) => void;
    changeDisplayedMonthData: (date: Date) => void;
  };

  singleSelect: {
    selectedDay: IDay | null;
    changeSelectedDay: (day: IDay | null) => void;
  };

  rangleSelect: {
    mouseOverEndDay: IDay | null;
    startDay: IDay | null;
    endDay: IDay | null;
    changeMouseOverEndDay: (day: IDay | null) => void;
    changeStartDay: (day: IDay | null) => void;
    changeEndDay: (day: IDay | null) => void;
  };

  todoList: {
    selectedDay: IDay | null;
    changeSelectedDay: (day: IDay | null) => void;
  };
}

export type { IContextData, IDataProviderProps };
