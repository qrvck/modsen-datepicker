import React, { Component } from 'react';

import { IDay } from '../../../../../utils/createDay';
import { IFullMonth } from '../../../../../utils/createFullMonth';
import { DayCell, Wrapper } from './styled';

export interface IRootProps {
  displayedMonthData: IDisplayedMonthData;
}

interface IDisplayedMonthData extends IFullMonth {
  allDays: IDayWithProps[];
}

interface IDayWithProps extends IDay {
  props: {
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
  };
}

class Root extends Component<IRootProps> {
  createDayCells = () => {
    const { allDays } = this.props.displayedMonthData;

    return allDays.map((day) => {
      return (
        <DayCell {...day.props} key={`${day.dayNumber} ${day.monthIndex}`}>
          {day.dayNumber}
        </DayCell>
      );
    });
  };

  render() {
    const { createDayCells } = this;
    console.log(this.props.displayedMonthData);

    return <Wrapper>{...createDayCells()}</Wrapper>;
  }
}

export { Root };
