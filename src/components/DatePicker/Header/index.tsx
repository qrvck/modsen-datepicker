import React, { Component } from 'react';

import {
  MonthButton,
  MontNameAndYearWrapper,
  NextMonthButton,
  PrevMonthButton,
  Wrapper,
  YearButton,
} from './styled';

interface IHeaderProps {
  month: string;
  year: number;
  onClickMonth: () => void;
  onClickYear: () => void;
  onClickNextMonth: () => void;
  onClickPrevMonth: () => void;
}

class Header extends Component<IHeaderProps> {
  render() {
    const { month, year, onClickMonth, onClickYear, onClickNextMonth, onClickPrevMonth } =
      this.props;

    return (
      <Wrapper>
        <PrevMonthButton onClick={onClickPrevMonth}>{'<'}</PrevMonthButton>

        <MontNameAndYearWrapper>
          <MonthButton onClick={onClickMonth}>{month}</MonthButton>
          <YearButton onClick={onClickYear}>{year}</YearButton>
        </MontNameAndYearWrapper>

        <NextMonthButton onClick={onClickNextMonth}>{'>'}</NextMonthButton>
      </Wrapper>
    );
  }
}

export { Header };
