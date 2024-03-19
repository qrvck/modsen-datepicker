import React, { Component } from 'react';

import { ContextData } from '../../../providers/DataProvider';
import { Button, Icon, NextMonthButton, PrevMonthButton, Wrapper } from './styled';

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
      params: { displayedMonthData, mode },
    } = this.context;

    const { onClickMonth, onClickYear, onClickNextMonth, onClickPrevMonth } = this;
    const { monthName, year } = displayedMonthData;

    return (
      <Wrapper $center={mode !== 'days'}>
        {mode === 'days' && (
          <PrevMonthButton onClick={onClickPrevMonth}>
            <Icon />
          </PrevMonthButton>
        )}

        <div>
          <Button data-testid="month-name-button" onClick={onClickMonth}>
            {monthName}
          </Button>
          <Button data-testid="year-button" onClick={onClickYear}>
            {year}
          </Button>
        </div>

        {mode === 'days' && (
          <NextMonthButton onClick={onClickNextMonth}>
            <Icon />
          </NextMonthButton>
        )}
      </Wrapper>
    );
  }
}

export { Header };
