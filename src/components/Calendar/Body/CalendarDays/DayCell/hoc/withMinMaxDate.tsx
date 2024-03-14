import React, { Component, ComponentType } from 'react';

import { ContextData } from '@/providers/DataProvider';
import { checkIsDayGreaterDate, checkIsDayLessDate } from '@/utils/check/checkDay';
import { IDay } from '@/utils/create/createDay';

import { IRootProps } from '../Root';

function withMinMaxDate<T extends IRootProps>(PassedComponent: ComponentType<T>) {
  return class WithMinMaxDate extends Component<T> {
    static contextType = ContextData;
    declare context: React.ContextType<typeof ContextData>;

    checkIsDisabledDay = (day: IDay, prevDisabled: boolean | undefined) => {
      if (prevDisabled) return true;

      const { minDate, maxDate } = this.context.config;
      const isDisabled1 = minDate ? checkIsDayLessDate(day, minDate) : false;
      const isDisabled2 = maxDate ? checkIsDayGreaterDate(day, maxDate) : false;
      const isDisabled = isDisabled1 || isDisabled2;

      return isDisabled;
    };

    getProps = () => {
      const { day, disabled } = this.props;
      const { checkIsDisabledDay } = this;
      const newIsDisabled = checkIsDisabledDay(day, disabled);

      return { disabled: newIsDisabled };
    };

    render() {
      const { getProps } = this;

      return <PassedComponent {...this.props} {...getProps()} />;
    }
  };
}

export { withMinMaxDate };
