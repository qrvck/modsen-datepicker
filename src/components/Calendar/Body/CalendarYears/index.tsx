import React, { Component, createRef } from 'react';

import { MIN_YEAR } from '@/constants';
import { getYears } from '@/utils/get/getYears';

import { Wrapper, YearCell } from './styled';

interface ICalendarYearsProps {
  onChangeYear: (year: number) => void;
}

class CalendarYears extends Component<ICalendarYearsProps> {
  wrapperRef = createRef<HTMLDivElement>();

  createYearCells = () => {
    const { onChangeYear } = this.props;
    const currentYear = new Date().getFullYear();

    return getYears().map((year) => (
      <YearCell
        className={currentYear === year ? 'current' : ''}
        onClick={() => onChangeYear(year)}
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
