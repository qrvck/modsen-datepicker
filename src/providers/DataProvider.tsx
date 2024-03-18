import React, { createContext, useLayoutEffect, useState } from 'react';

import { IContextData, IDataProviderProps } from '../@types/dataProvider';
import { createDay, IDay } from '../utils/create/createDay';
import { createFullMonth, IFullMonth } from '../utils/create/createFullMonth';

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
    mouseOverEndDay: null,
    startDay: null,
    endDay: null,
    changeMouseOverEndDay() {},
    changeStartDay() {},
    changeEndDay() {},
  },

  todoList: {
    selectedDay: null,
    changeSelectedDay: () => {},
  },
});

function DataProvider({
  children,
  firstDayOfWeek = 'monday',
  maxDate,
  minDate,
  range = false,
  todoList = false,
  holidays = false,
  weekends = false,
  singleValue = null,
  rangeValue = [null, null],
  onSingleChange = () => {},
  onRangeChange = () => {},
}: IDataProviderProps) {
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);
  const [mode, setMode] = useState<'days' | 'months' | 'years'>('days');
  const [displayedMonthIndex, setDisplayedMonthIndex] = useState<number>(new Date().getMonth());
  const [displayedYear, setDisplayedYear] = useState<number>(new Date().getFullYear());
  const [displayedMonthData, setDisplayedMonthData] = useState<IFullMonth>(
    createFullMonth(new Date(), firstDayOfWeek)
  );

  const [startDayOfRangeSelect, setStartDayOfRangeSelect] = useState<IDay | null>(
    rangeValue[0] && createDay(rangeValue[0])
  );
  const [endDayOfRangeSelect, setEndDayOfRangeSelect] = useState<IDay | null>(
    rangeValue[0] && rangeValue[1] && createDay(rangeValue[1])
  );
  const [mouseOverEndDayOfRangeSelect, setMouseOverEndDayOfRangeSelect] = useState<IDay | null>(
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
      selectedDay: singleValue && createDay(singleValue),
      changeSelectedDay: (day: IDay | null) => {
        if (day) {
          const { dayNumber, monthIndex, year } = day;
          onSingleChange(new Date(year, monthIndex, dayNumber));
        } else {
          onSingleChange(null);
        }
      },
    },

    rangleSelect: {
      mouseOverEndDay: mouseOverEndDayOfRangeSelect,
      startDay: startDayOfRangeSelect,
      endDay: endDayOfRangeSelect,
      changeMouseOverEndDay: (day: IDay | null) => setMouseOverEndDayOfRangeSelect(day),
      changeStartDay: (day: IDay | null) => {
        console.log(44444444);
        setStartDayOfRangeSelect(day);
      },
      changeEndDay: (day: IDay | null) => {
        if (startDayOfRangeSelect && endDayOfRangeSelect) {
          const {
            dayNumber: startDayNumber,
            monthIndex: startMonthIndex,
            year: startYear,
          } = startDayOfRangeSelect;

          const {
            dayNumber: endDayNumber,
            monthIndex: endMonthIndex,
            year: endYear,
          } = endDayOfRangeSelect;

          const startValue = new Date(startYear, startMonthIndex, startDayNumber);
          const endValue = new Date(endYear, endMonthIndex, endDayNumber);

          onRangeChange([startValue, endValue]);
        } else {
          onRangeChange([null, null]);
        }
        setEndDayOfRangeSelect(day);
      },
    },

    todoList: {
      selectedDay: selectedDayOfTodoList,
      changeSelectedDay: (day: IDay | null) => setSelectedDayOfTodoList(day),
    },
  };

  return <ContextData.Provider value={providerParams}>{children}</ContextData.Provider>;
}

export { ContextData, DataProvider };
