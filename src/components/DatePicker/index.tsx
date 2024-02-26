import React, { Component } from 'react';

import { createFullMonth } from '../../utils/createFullMonth';
import { Body } from './Body';
import { Header } from './Header';
import { Wrapper } from './styled';

type IDatePickerProps = {
  firstDayOfWeek?: 'sunday' | 'monday';
};

interface IDatePickerState {
  mode: 'days' | 'months' | 'years';
  currentMonthData: ReturnType<typeof createFullMonth>;
}

class DatePicker extends Component<IDatePickerProps, IDatePickerState> {
  state: IDatePickerState = {
    mode: 'days',
    currentMonthData: createFullMonth(new Date(), this.props.firstDayOfWeek),
  };

  selectedDayNumber = 0;
  selectedMonthIndex = new Date().getMonth();
  selectedYear = new Date().getFullYear();

  componentDidUpdate(prevProps: Readonly<IDatePickerProps>) {
    const { firstDayOfWeek } = this.props;
    const { selectedMonthIndex, selectedYear } = this;

    if (prevProps.firstDayOfWeek !== firstDayOfWeek) {
      this.setState({
        currentMonthData: createFullMonth(
          new Date(selectedYear, selectedMonthIndex),
          firstDayOfWeek
        ),
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
    if (this.selectedMonthIndex === 11) {
      this.selectedMonthIndex = 0;
      this.selectedYear += 1;
    } else {
      this.selectedMonthIndex += 1;
    }

    const { selectedMonthIndex, selectedYear } = this;
    const { firstDayOfWeek } = this.props;

    this.setState({
      currentMonthData: createFullMonth(new Date(selectedYear, selectedMonthIndex), firstDayOfWeek),
    });
  };

  onClickPrevMonth = () => {
    if (this.selectedMonthIndex === 0) {
      this.selectedMonthIndex = 11;
      this.selectedYear -= 1;
    } else {
      this.selectedMonthIndex -= 1;
    }

    const { selectedMonthIndex, selectedYear } = this;
    const { firstDayOfWeek } = this.props;

    this.setState({
      currentMonthData: createFullMonth(new Date(selectedYear, selectedMonthIndex), firstDayOfWeek),
    });
  };

  render() {
    const { currentMonthData } = this.state;
    const { onClickMonth, onClickYear, onClickNextMonth, onClickPrevMonth } = this;
    const { firstDayOfWeek } = this.props;

    return (
      <Wrapper>
        <Header
          month={currentMonthData.monthName}
          year={currentMonthData.year}
          onClickMonth={onClickMonth}
          onClickYear={onClickYear}
          onClickNextMonth={onClickNextMonth}
          onClickPrevMonth={onClickPrevMonth}
        />
        <Body firstDayOfWeek={firstDayOfWeek} days={currentMonthData.allDays} />
      </Wrapper>
    );
  }
}

export { DatePicker };
