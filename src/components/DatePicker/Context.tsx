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
  holidays: boolean;
  weekends: boolean;
}

export interface IContextData {
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
    firstSelectedDay: IDay | null;
    secondSelectedDay: IDay | null;
    changeFirstSelectedDay: (day: IDay | null) => void;
    changeSecondSelectedDay: (day: IDay | null) => void;
  };

  todoList: {
    selectedDay: IDay | null;
    changeSelectedDay: (day: IDay | null) => void;
  };
}

const ContextData = createContext<IContextData>({
  config: {
    firstDayOfWeek: 'monday',
    range: false,
    todoList: false,
    holidays: false,
    weekends: false,
  },

  params: {
    isOpenCalendar: false,
    mode: 'days',
    displayedMonthIndex: new Date().getMonth(),
    displayedYear: new Date().getFullYear(),
    displayedMonthData: createFullMonth(new Date()),
    changeIsOpenCalendar: () => {},
    changeMode: () => {},
    changeDisplayedMonthIndex: () => {},
    changeDisplayedYear: () => {},
    changeDisplayedMonthData: () => {},
  },

  singleSelect: {
    selectedDay: null,
    changeSelectedDay: () => {},
  },

  rangleSelect: {
    firstSelectedDay: null,
    secondSelectedDay: null,
    changeFirstSelectedDay() {},
    changeSecondSelectedDay() {},
  },

  todoList: {
    selectedDay: null,
    changeSelectedDay: () => {},
  },
});

function Context({
  children,
  firstDayOfWeek,
  range,
  todoList,
  holidays,
  maxDate,
  minDate,
  weekends,
}: IContextProps) {
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);
  const [mode, setMode] = useState<'days' | 'months' | 'years'>('days');
  const [displayedMonthIndex, setDisplayedMonthIndex] = useState<number>(new Date().getMonth());
  const [displayedYear, setDisplayedYear] = useState<number>(new Date().getFullYear());
  const [displayedMonthData, setDisplayedMonthData] = useState<IFullMonth>(
    createFullMonth(new Date(), firstDayOfWeek)
  );

  const [selectedDayOfSingleSelect, setSelectedDayOfSingleSelect] = useState<IDay | null>(null);

  const [firstSelectedDayOfRangeSelect, setFirstSelectedDayOfRangeSelect] = useState<IDay | null>(
    null
  );
  const [secondSelectedDayOfRangeSelect, setSecondSelectedDayOfRangeSelect] = useState<IDay | null>(
    null
  );

  const [selectedDayOfTodoList, setSelectedDayOfTodoList] = useState<IDay | null>(null);

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
      holidays,
      maxDate,
      minDate,
      weekends,
    },

    params: {
      isOpenCalendar,
      mode,
      displayedMonthData,
      displayedMonthIndex,
      displayedYear,
      changeIsOpenCalendar: (open: boolean) => setIsOpenCalendar(open),
      changeMode: (mode: 'days' | 'months' | 'years') => setMode(mode),
      changeDisplayedMonthData: (date: Date) =>
        setDisplayedMonthData(createFullMonth(new Date(date), firstDayOfWeek)),
      changeDisplayedMonthIndex: (monthIndex: number) => setDisplayedMonthIndex(monthIndex),
      changeDisplayedYear: (year: number) => setDisplayedYear(year),
    },

    singleSelect: {
      selectedDay: selectedDayOfSingleSelect,
      changeSelectedDay: (day: IDay | null) => setSelectedDayOfSingleSelect(day),
    },

    rangleSelect: {
      firstSelectedDay: firstSelectedDayOfRangeSelect,
      secondSelectedDay: secondSelectedDayOfRangeSelect,
      changeFirstSelectedDay: (day: IDay | null) => setFirstSelectedDayOfRangeSelect(day),
      changeSecondSelectedDay: (day: IDay | null) => setSecondSelectedDayOfRangeSelect(day),
    },

    todoList: {
      selectedDay: selectedDayOfTodoList,
      changeSelectedDay: (day: IDay | null) => setSelectedDayOfTodoList(day),
    },
  };

  return <ContextData.Provider value={providerParams}>{children}</ContextData.Provider>;
}

export { Context, ContextData };
