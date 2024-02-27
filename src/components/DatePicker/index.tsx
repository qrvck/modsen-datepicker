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

  displayedMonthIndex = new Date().getMonth();
  displayedYear = new Date().getFullYear();

  componentDidUpdate(prevProps: Readonly<IDatePickerProps>) {
    const { firstDayOfWeek } = this.props;
    const { displayedMonthIndex, displayedYear } = this;

    if (prevProps.firstDayOfWeek !== firstDayOfWeek) {
      this.setState({
        currentMonth: createFullMonth(new Date(displayedYear, displayedMonthIndex), firstDayOfWeek),
      });
    }
  }

  onClickMonth = () => {
    const { mode } = this.state;

    const newMode = mode !== 'months' ? 'months' : 'days';
    this.setState({ mode: newMode });
  };

  onClickYear = () => {
    const { mode } = this.state;

    const newMode = mode !== 'years' ? 'years' : 'days';
    this.setState({ mode: newMode });
  };

  onClickNextMonth = () => {
    const indexOfFirstMonth = 0;
    const indexOfLastMonth = 11;

    if (this.displayedMonthIndex === indexOfLastMonth) {
      this.displayedMonthIndex = indexOfFirstMonth;
      this.displayedYear += 1;
    } else {
      this.displayedMonthIndex += 1;
    }

    const { displayedMonthIndex, displayedYear } = this;
    const { firstDayOfWeek } = this.props;

    this.setState({
      currentMonth: createFullMonth(new Date(displayedYear, displayedMonthIndex), firstDayOfWeek),
    });
  };

  onClickPrevMonth = () => {
    const indexOfFirstMonth = 0;
    const indexOfLastMonth = 11;

    if (this.displayedMonthIndex === indexOfFirstMonth) {
      this.displayedMonthIndex = indexOfLastMonth;
      this.displayedYear -= 1;
    } else {
      this.displayedMonthIndex -= 1;
    }

    const { displayedMonthIndex, displayedYear } = this;
    const { firstDayOfWeek } = this.props;

    this.setState({
      currentMonth: createFullMonth(new Date(displayedYear, displayedMonthIndex), firstDayOfWeek),
    });
  };

  onChangeMonth = (monthIndex: number) => {
    const { firstDayOfWeek } = this.props;
    const { displayedYear } = this;

    this.displayedMonthIndex = monthIndex;

    this.setState({
      mode: 'days',
      currentMonth: createFullMonth(new Date(displayedYear, monthIndex), firstDayOfWeek),
    });
  };

  onChangeYear = (year: number) => {
    const { firstDayOfWeek } = this.props;
    const { displayedMonthIndex } = this;

    this.displayedYear = year;

    this.setState({
      mode: 'days',
      currentMonth: createFullMonth(new Date(year, displayedMonthIndex), firstDayOfWeek),
    });
  };

  render() {
    const { currentMonth, mode } = this.state;
    const {
      onClickMonth,
      onClickYear,
      onClickNextMonth,
      onClickPrevMonth,
      onChangeMonth,
      onChangeYear,
    } = this;
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
        <Body
          mode={mode}
          firstDayOfWeek={firstDayOfWeek}
          currentMonth={currentMonth}
          onChangeMonth={onChangeMonth}
          onChangeYear={onChangeYear}
        />
      </Wrapper>
    );
  }
}

export { DatePicker };
