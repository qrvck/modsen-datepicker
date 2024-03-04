import React, { Component } from 'react';

// import { IDay } from '../../../../../utils/createDay';
// import { IFullMonth } from '../../../../../utils/createFullMonth';
import { ContextData } from '../../../Context';
import { DayCell } from './DayCell';
import { Wrapper } from './styled';

// export interface IRootProps {
//   displayedMonthData: IDisplayedMonthData;
// }

// interface IDisplayedMonthData extends IFullMonth {
//   allDays: IDayWithProps[];
// }

// export interface IDayWithProps extends IDay {
//   props: {
//     onClick?: () => void;
//     className?: string;
//     disabled?: boolean;
//   };
// }

class Root extends Component {
  static contextType = ContextData;
  declare context: React.ContextType<typeof ContextData>;

  createDayCells = () => {
    const { allDays } = this.context.params.displayedMonthData;

    return allDays.map((day) => {
      return <DayCell day={day} key={`${day.dayNumber} ${day.monthIndex}`} />;
    });
  };

  render() {
    const { createDayCells } = this;
    // console.log(this.props.displayedMonthData);

    return <Wrapper>{...createDayCells()}</Wrapper>;
  }
}

export { Root };
