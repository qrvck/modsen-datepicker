import React, { Component, ComponentType } from 'react';

// import { IFullMonth } from '../../../../../../utils/createFullMonth';
// import { IDayWithProps } from '../Root';
import { IRootProps } from '../Root';

// type IWithSingleSelect = {
//   displayedMonthData: IFullMonth;
// };

// function withSingleSelect<T extends IRootProps>(Component: ComponentType<T>) {
//   return function F(props: T) {
//     // const [selectedDate, setSelectedDate] = useState<Date | null>(null);

//     // const newProps = props.displayedMonthData.allDays.map((day) => {
//     //   day.props = {
//     //     ...day.props,

//     //   }
//     // });

//     return <Component {...props} displayedMonthData={props.displayedMonthData} />;
//   };
// }

function withSingleSelect<T extends IRootProps>(PassedComponent: ComponentType<T>) {
  return class WithSingleSelect extends Component<T> {
    render() {
      const { displayedMonthData } = this.props;

      return <PassedComponent {...this.props} displayedMonthData={displayedMonthData} />;
    }
  };
}

export { withSingleSelect };
