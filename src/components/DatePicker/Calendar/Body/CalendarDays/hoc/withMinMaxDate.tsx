import React, { Component, ComponentType } from 'react';

import { checkIsDayGreaterDate, checkIsDayLessDate } from '../../../../../../utils/checkDay';
import { ContextData } from '../../../../Context';
import { IRootProps } from '../Root';

function withMinMaxDate<T extends IRootProps>(PassedComponent: ComponentType<T>) {
  return class WithMinMaxDate extends Component<T> {
    static contextType = ContextData;
    declare context: React.ContextType<typeof ContextData>;

    getDisplayedMonthDataWithMinMaxDate = () => {
      const { displayedMonthData } = this.props;
      const {
        config: { minDate, maxDate },
      } = this.context;

      const daysWithProps = displayedMonthData.allDays.map((day) => {
        const isDisabled1 = minDate ? checkIsDayLessDate(day, minDate) : false;
        const isDisabled2 = maxDate ? checkIsDayGreaterDate(day, maxDate) : false;
        const prevIsDisabled = day.props.disabled || false;
        const isDisabled = isDisabled1 || isDisabled2 || prevIsDisabled;

        const dayWithProps = { ...day, props: { ...day.props, disabled: isDisabled } };

        return dayWithProps;
      });

      const displayedMonthDataWithCurrentDate = {
        ...displayedMonthData,
        allDays: daysWithProps,
      };

      return displayedMonthDataWithCurrentDate;
    };

    render() {
      const { getDisplayedMonthDataWithMinMaxDate } = this;
      const displayedMonthDataWithCurrentDate = getDisplayedMonthDataWithMinMaxDate();

      return (
        <PassedComponent {...this.props} displayedMonthData={displayedMonthDataWithCurrentDate} />
      );
    }
  };
}

export { withMinMaxDate };
