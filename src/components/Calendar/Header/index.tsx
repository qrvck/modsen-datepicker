import React, { Component } from 'react';

import sprite from '@/assets/sprite.svg';
import { ContextData } from '@/providers/DataProvider';

import { Button, NextMonthButton, PrevMonthButton, Svg, Wrapper } from './styled';

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
            <Svg>
              <use href={sprite + '#double-arrow'} />
            </Svg>
          </PrevMonthButton>
        )}

        <div>
          <Button onClick={onClickMonth}>{monthName}</Button>
          <Button onClick={onClickYear}>{year}</Button>
        </div>

        {mode === 'days' && (
          <NextMonthButton onClick={onClickNextMonth}>
            <Svg>
              <use href={sprite + '#double-arrow'} />
            </Svg>
          </NextMonthButton>
        )}
      </Wrapper>
    );
  }
}

export { Header };
