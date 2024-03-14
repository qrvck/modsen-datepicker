import React, { Component, ComponentType } from 'react';

import { HOLIDAYS } from '../../../../../../constants';
import { ContextData } from '../../../../../../providers/DataProvider';
import { IDay } from '../../../../../../utils/create/createDay';
import { IRootProps } from '../Root';

function withHolidays<T extends IRootProps>(PassedComponent: ComponentType<T>) {
  return class WithHolidays extends Component<T> {
    static contextType = ContextData;
    declare context: React.ContextType<typeof ContextData>;

    getClassNameAndTitle = (day: IDay, prevClassName: string | undefined) => {
      const className: string[] = [];
      const { dayNumber, monthIndex } = day;

      const monthHolidays = HOLIDAYS[monthIndex];
      const holidayName = monthHolidays?.[dayNumber];

      if (monthHolidays && holidayName) className.push('holiday');
      if (prevClassName) className.push(prevClassName);
      className.join(' ');

      return { className: className.join(' '), title: holidayName };
    };

    getProps = () => {
      const { day, className } = this.props;
      const { getClassNameAndTitle } = this;
      const { className: newClassName, title } = getClassNameAndTitle(day, className);

      return { className: newClassName, title };
    };

    render() {
      const { getProps } = this;

      return <PassedComponent {...this.props} {...getProps()} />;
    }
  };
}

export { withHolidays };
