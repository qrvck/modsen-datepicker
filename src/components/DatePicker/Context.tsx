import React, { createContext, ReactNode, useLayoutEffect, useState } from 'react';

import { IDay } from '../../utils/createDay';
import { createFullMonth, IFullMonth } from '../../utils/createFullMonth';

interface IContextProps {
  children: ReactNode;
  firstDayOfWeek: 'sunday' | 'monday';
  range: boolean;
  todoList: boolean;
  maxDate?: Date;
  minDate?: Date;
  withHolidays: boolean;
  weekends: boolean;
}

export interface IContextData {
  config: {
    firstDayOfWeek: 'sunday' | 'monday';
    range: boolean;
    todoList: boolean;
    maxDate?: Date;
    minDate?: Date;
    withHolidays: boolean;
    weekends: boolean;
  };

  params: {
    mode: 'days' | 'months' | 'years';
    displayedMonthData: IFullMonth;
    displayedMonthIndex: number;
    displayedYear: number;
    changeMode: (mode: 'days' | 'months' | 'years') => void;
    changeDisplayedMonthIndex: (monthIndex: number) => void;
    changeDisplayedYear: (year: number) => void;
    changeDisplayedMonthData: (date: Date) => void;
  };

  singleSelect: {
    selectedDay?: IDay;
    changeSelectedDay: (day: IDay) => void;
  };
}

const ContextData = createContext<IContextData>({
  config: {
    firstDayOfWeek: 'monday',
    range: false,
    todoList: false,
    withHolidays: false,
    weekends: false,
  },

  params: {
    mode: 'days',
    displayedMonthIndex: new Date().getMonth(),
    displayedYear: new Date().getFullYear(),
    displayedMonthData: createFullMonth(new Date()),
    changeMode: () => {},
    changeDisplayedMonthIndex: () => {},
    changeDisplayedYear: () => {},
    changeDisplayedMonthData: () => {},
  },

  singleSelect: {
    changeSelectedDay: () => {},
  },
});

function Context({
  children,
  firstDayOfWeek,
  range,
  todoList,
  withHolidays,
  maxDate,
  minDate,
  weekends,
}: IContextProps) {
  const [mode, setMode] = useState<'days' | 'months' | 'years'>('days');
  const [displayedMonthIndex, setDisplayedMonthIndex] = useState<number>(new Date().getMonth());
  const [displayedYear, setDisplayedYear] = useState<number>(new Date().getFullYear());
  const [displayedMonthData, setDisplayedMonthData] = useState<IFullMonth>(
    createFullMonth(new Date(), firstDayOfWeek)
  );

  const [selectedDay, setSelectedDay] = useState<IDay | undefined>(undefined);

  useLayoutEffect(() => {
    setDisplayedMonthData(
      createFullMonth(new Date(displayedYear, displayedMonthIndex), firstDayOfWeek)
    );
  }, [displayedMonthIndex, displayedYear, firstDayOfWeek]);

  const providerParams = {
    config: {
      firstDayOfWeek,
      range,
      todoList,
      withHolidays,
      maxDate,
      minDate,
      weekends,
    },

    params: {
      mode,
      displayedMonthData,
      displayedMonthIndex,
      displayedYear,
      changeMode: (mode: 'days' | 'months' | 'years') => setMode(mode),
      changeDisplayedMonthData: (date: Date) =>
        setDisplayedMonthData(createFullMonth(new Date(date), firstDayOfWeek)),
      changeDisplayedMonthIndex: (monthIndex: number) => setDisplayedMonthIndex(monthIndex),
      changeDisplayedYear: (year: number) => setDisplayedYear(year),
    },

    singleSelect: {
      selectedDay,
      changeSelectedDay: (day: IDay) => setSelectedDay(day),
    },
  };

  return <ContextData.Provider value={providerParams}>{children}</ContextData.Provider>;
}

export { Context, ContextData };
