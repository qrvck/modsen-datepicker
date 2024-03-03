import React, { Component, ComponentType } from 'react';

import { checkIsCurrentDay, checkIsDayFromMonth } from '../../../../../../utils/checkDay';
import { ContextData } from '../../../../Context';
import { IRootProps } from '../Root';

function withCurrentDate<T extends IRootProps>(PassedComponent: ComponentType<T>) {
  return class WithSingleSelect extends Component<T> {
    static contextType = ContextData;
    declare context: React.ContextType<typeof ContextData>;

    getClassNameForDay = (
      isCurrentDay: boolean,
      // isDayFromMonth: boolean,
      prevClassName: string | undefined
    ) => {
      const className: string[] = [];
      if (isCurrentDay) className.push('current');
      // if (!isDayFromMonth) className.push('outside');
      if (prevClassName) className.push(prevClassName);

      return className.join(' ');
    };

    getDisplayedMonthDataWithCurrentDate = () => {
      const { displayedMonthData } = this.props;
      const { getClassNameForDay } = this;
      const {
        params: { displayedMonthIndex },
      } = this.context;

      const daysWithProps = displayedMonthData.allDays.map((day) => {
        const isCurrentDay = checkIsCurrentDay(day);
        const isDayFromMonth = checkIsDayFromMonth(day, displayedMonthIndex);
        const prevIsDisabled = day.props.disabled || false;
        const isDisabled = !isDayFromMonth || prevIsDisabled;

        const prevClassName = day.props.className;
        const className = getClassNameForDay(isCurrentDay, prevClassName);

        const dayWithProps = { ...day, props: { ...day.props, className, disabled: isDisabled } };

        return dayWithProps;
      });

      const displayedMonthDataWithCurrentDate = {
        ...displayedMonthData,
        allDays: daysWithProps,
      };

      return displayedMonthDataWithCurrentDate;
    };

    render() {
      const { getDisplayedMonthDataWithCurrentDate } = this;
      const displayedMonthDataWithCurrentDate = getDisplayedMonthDataWithCurrentDate();

      return (
        <PassedComponent {...this.props} displayedMonthData={displayedMonthDataWithCurrentDate} />
      );
    }
  };
}

export { withCurrentDate };
