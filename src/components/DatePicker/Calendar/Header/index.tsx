import React, { Component } from 'react';

import { ContextData } from '../../Context';
import {
  MonthButton,
  MontNameAndYearWrapper,
  NextMonthButton,
  PrevMonthButton,
  Wrapper,
  YearButton,
} from './styled';

class Header extends Component {
  static contextType = ContextData;
  declare context: React.ContextType<typeof ContextData>;

  onClickMonth = () => {
    const { mode, changeMode } = this.context.params;
    const newMode = mode !== 'months' ? 'months' : 'days';
    changeMode(newMode);
  };

  onClickYear = () => {
    const { mode, changeMode } = this.context.params;
    const newMode = mode !== 'years' ? 'years' : 'days';
    changeMode(newMode);
  };

  onClickNextMonth = () => {
    const indexOfFirstMonth = 0;
    const indexOfLastMonth = 11;

    const {
      params: {
        displayedMonthIndex,
        displayedYear,
        changeDisplayedMonthData,
        changeDisplayedMonthIndex,
        changeDisplayedYear,
      },
    } = this.context;

    const nextYear = displayedMonthIndex === indexOfLastMonth ? displayedYear + 1 : displayedYear;
    const nextMonthIndex =
      displayedMonthIndex === indexOfLastMonth ? indexOfFirstMonth : displayedMonthIndex + 1;

    changeDisplayedMonthIndex(nextMonthIndex);
    changeDisplayedYear(nextYear);
    changeDisplayedMonthData(new Date(nextYear, nextMonthIndex));
  };

  onClickPrevMonth = () => {
    const indexOfFirstMonth = 0;
    const indexOfLastMonth = 11;

    const {
      params: {
        displayedMonthIndex,
        displayedYear,
        changeDisplayedMonthData,
        changeDisplayedMonthIndex,
        changeDisplayedYear,
      },
    } = this.context;

    const prevYear = displayedMonthIndex === indexOfFirstMonth ? displayedYear - 1 : displayedYear;
    const prevMonthIndex =
      displayedMonthIndex === indexOfFirstMonth ? indexOfLastMonth : displayedMonthIndex - 1;

    changeDisplayedMonthIndex(prevMonthIndex);
    changeDisplayedYear(prevYear);
    changeDisplayedMonthData(new Date(prevYear, prevMonthIndex));
  };

  render() {
    const {
      params: { displayedMonthData },
    } = this.context;

    const { onClickMonth, onClickYear, onClickNextMonth, onClickPrevMonth } = this;
    const { monthName, year } = displayedMonthData;

    return (
      <Wrapper>
        <PrevMonthButton onClick={onClickPrevMonth}>{'<'}</PrevMonthButton>

        <MontNameAndYearWrapper>
          <MonthButton onClick={onClickMonth}>{monthName}</MonthButton>
          <YearButton onClick={onClickYear}>{year}</YearButton>
        </MontNameAndYearWrapper>

        <NextMonthButton onClick={onClickNextMonth}>{'>'}</NextMonthButton>
      </Wrapper>
    );
  }
}

export { Header };
