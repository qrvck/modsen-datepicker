import React, { Component, ComponentType } from 'react';

import { IDay } from '../../../../../../../utils/createDay';
import { ContextData } from '../../../../../Context';
import { IRootProps } from '../Root';

function withWeekends<T extends IRootProps>(PassedComponent: ComponentType<T>) {
  return class WithWeekends extends Component<T> {
    static contextType = ContextData;
    declare context: React.ContextType<typeof ContextData>;

    getClassName = (day: IDay, prevClassName: string | undefined) => {
      const { firstDayOfWeek } = this.context.config;
      const { dayNumberInWeek } = day;
      const className: string[] = [];

      if (firstDayOfWeek === 'monday') {
        const weekendNumberInWeek = [6, 7];
        if (weekendNumberInWeek.includes(dayNumberInWeek)) className.push('weekend');
      } else if (firstDayOfWeek === 'sunday') {
        const weekendNumberInWeek = [7, 1];
        if (weekendNumberInWeek.includes(dayNumberInWeek)) className.push('weekend');
      }

      if (prevClassName) className.push(prevClassName);

      return className.join(' ');
    };

    getProps = () => {
      const { day, className } = this.props;
      const { getClassName } = this;

      const newClassName = getClassName(day, className);

      return { className: newClassName };
    };

    render() {
      const { getProps } = this;

      return <PassedComponent {...this.props} {...getProps()} />;
    }
  };
}

export { withWeekends };
