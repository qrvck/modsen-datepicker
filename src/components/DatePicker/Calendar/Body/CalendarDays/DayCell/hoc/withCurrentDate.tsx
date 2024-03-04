import React, { Component, ComponentType } from 'react';

import { checkIsCurrentDay, checkIsDayFromMonth } from '../../../../../../../utils/checkDay';
import { IDay } from '../../../../../../../utils/createDay';
import { ContextData } from '../../../../../Context';
import { IRootProps } from '../Root';

function withCurrentDate<T extends IRootProps>(PassedComponent: ComponentType<T>) {
  return class WithCurrentDate extends Component<T> {
    static contextType = ContextData;
    declare context: React.ContextType<typeof ContextData>;

    getClassName = (day: IDay, prevClassName: string | undefined) => {
      const className: string[] = [];
      const isCurrentDay = checkIsCurrentDay(day);

      if (isCurrentDay) className.push('current');
      if (prevClassName) className.push(prevClassName);

      return className.join(' ');
    };

    checkIsDisabledDay = (day: IDay, prevDisabled: boolean | undefined) => {
      const { displayedMonthIndex } = this.context.params;
      const isDayFromMonth = checkIsDayFromMonth(day, displayedMonthIndex);

      if (prevDisabled) return prevDisabled;
      if (!isDayFromMonth) return true;
    };

    getProps = () => {
      const { day, className, disabled } = this.props;
      const { getClassName, checkIsDisabledDay } = this;

      const newClassName = getClassName(day, className);
      const newIsDisabled = checkIsDisabledDay(day, disabled);

      return { className: newClassName, disabled: newIsDisabled };
    };

    render() {
      const { getProps } = this;

      return <PassedComponent {...this.props} {...getProps()} />;
    }
  };
}

export { withCurrentDate };
