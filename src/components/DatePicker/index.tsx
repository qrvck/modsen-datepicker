import React, { Component } from 'react';

import { createFullMonth } from '../../utils/createFullMonth';
// import { createDate } from '../../utils2/createDate';
// import { createDay } from '../../utils2/createDay';
// import { createYear } from '../../utils2/createYear';
// import { getDayNames } from '../../utils2/getDayNames';
// import { getMonthNames } from '../../utils2/getMonthNames';

type IDatePickerProps = Record<string, never>;

interface IDatePickerState {
  mode: 'days' | 'monthes' | 'years';

  selectedDayNumber: number;
  selectedMonthIndex: number;
  selectedYear: number;
}

class DatePicker extends Component<IDatePickerProps, IDatePickerState> {
  state: IDatePickerState = {
    mode: 'days',

    selectedDayNumber: 0,
    selectedMonthIndex: new Date().getMonth(),
    selectedYear: new Date().getFullYear(),
  };

  currentDayNumber = new Date().getDate();
  currentMonthIndex = new Date().getMonth();
  currentYear = new Date().getFullYear();

  render() {
    // const { selectedYearDate, selectedMonthIndex, selectedYear } = this.state;
    const d = new Date();

    console.log(createFullMonth(d));

    return (
      <div>
        <p>{/* {selectedYearDate.monthes[selectedMonthIndex].monthName} - {selectedYear} */}</p>
        <p></p>
        <p></p>
      </div>
    );
  }
}

export { DatePicker };
