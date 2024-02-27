import React, { Component } from 'react';

import { createFullMonth, IFullMonth } from '../../utils/createFullMonth';
import { Body } from './Body';
import { Header } from './Header';
import { Wrapper } from './styled';

type IDatePickerProps = {
  firstDayOfWeek?: 'sunday' | 'monday';
};

interface IDatePickerState {
  mode: 'days' | 'months' | 'years';
  currentMonth: IFullMonth;
}

class DatePicker extends Component<IDatePickerProps, IDatePickerState> {
  state: IDatePickerState = {
    mode: 'days',
    currentMonth: createFullMonth(new Date(), this.props.firstDayOfWeek),
  };

  selectedDayNumber = 0;
  selectedMonthIndex = new Date().getMonth();
  selectedYear = new Date().getFullYear();

  componentDidUpdate(prevProps: Readonly<IDatePickerProps>) {
    const { firstDayOfWeek } = this.props;
    const { selectedMonthIndex, selectedYear } = this;

    if (prevProps.firstDayOfWeek !== firstDayOfWeek) {
      this.setState({
        currentMonth: createFullMonth(new Date(selectedYear, selectedMonthIndex), firstDayOfWeek),
      });
    }
  }

  onClickMonth = () => {
    const { mode } = this.state;

    const newMode = mode === 'days' ? 'months' : 'days';
    this.setState({ mode: newMode });
  };

  onClickYear = () => {
    const { mode } = this.state;

    const newMode = mode === 'days' ? 'years' : 'days';
    this.setState({ mode: newMode });
  };

  onClickNextMonth = () => {
    const indexOfFirstMonth = 0;
    const indexOfLastMonth = 11;

    if (this.selectedMonthIndex === indexOfLastMonth) {
      this.selectedMonthIndex = indexOfFirstMonth;
      this.selectedYear += 1;
    } else {
      this.selectedMonthIndex += 1;
    }

    const { selectedMonthIndex, selectedYear } = this;
    const { firstDayOfWeek } = this.props;

    this.setState({
      currentMonth: createFullMonth(new Date(selectedYear, selectedMonthIndex), firstDayOfWeek),
    });
  };

  onClickPrevMonth = () => {
    const indexOfFirstMonth = 0;
    const indexOfLastMonth = 11;

    if (this.selectedMonthIndex === indexOfFirstMonth) {
      this.selectedMonthIndex = indexOfLastMonth;
      this.selectedYear -= 1;
    } else {
      this.selectedMonthIndex -= 1;
    }

    const { selectedMonthIndex, selectedYear } = this;
    const { firstDayOfWeek } = this.props;

    this.setState({
      currentMonth: createFullMonth(new Date(selectedYear, selectedMonthIndex), firstDayOfWeek),
    });
  };

  render() {
    const { currentMonth } = this.state;
    const { onClickMonth, onClickYear, onClickNextMonth, onClickPrevMonth } = this;
    const { firstDayOfWeek } = this.props;

    return (
      <Wrapper>
        <Header
          month={currentMonth.monthName}
          year={currentMonth.year}
          onClickMonth={onClickMonth}
          onClickYear={onClickYear}
          onClickNextMonth={onClickNextMonth}
          onClickPrevMonth={onClickPrevMonth}
        />
        <Body firstDayOfWeek={firstDayOfWeek} currentMonth={currentMonth} />
      </Wrapper>
    );
  }
}

export { DatePicker };
