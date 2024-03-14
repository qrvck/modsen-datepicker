import React, { Component, createRef } from 'react';

import { MIN_YEAR } from '@/constants';
import { ContextData } from '@/providers/DataProvider';
import { getYears } from '@/utils/get/getYears';

import { Wrapper, YearCell } from './styled';

class CalendarYears extends Component {
  static contextType = ContextData;
  declare context: React.ContextType<typeof ContextData>;

  wrapperRef = createRef<HTMLDivElement>();

  handleClickOnYear = (year: number) => {
    const {
      params: { displayedMonthIndex, changeMode, changeDisplayedYear, changeDisplayedMonthData },
    } = this.context;

    changeMode('days');
    changeDisplayedYear(year);
    changeDisplayedMonthData(new Date(year, displayedMonthIndex));
  };

  createYearCells = () => {
    const { handleClickOnYear } = this;
    const currentYear = new Date().getFullYear();

    return getYears().map((year) => (
      <YearCell
        className={currentYear === year ? 'current' : ''}
        onClick={() => handleClickOnYear(year)}
        key={year}
      >
        {year}
      </YearCell>
    ));
  };

  componentDidMount() {
    const wrapper = this.wrapperRef.current;
    const yearCell = wrapper?.firstElementChild;

    if (wrapper && yearCell) {
      const yearCellInRow = 4;
      const currentYear = new Date().getFullYear();
      const passedYears = currentYear - MIN_YEAR;
      const toScrollRows = passedYears / yearCellInRow - 2;
      const heightOfRow = +window.getComputedStyle(yearCell).height.replace('px', '');

      wrapper.scrollTop = toScrollRows * heightOfRow;
    }
  }

  render() {
    const { createYearCells, wrapperRef } = this;

    return <Wrapper ref={wrapperRef}>{...createYearCells()}</Wrapper>;
  }
}

export { CalendarYears };
