import React, { Component, ComponentType } from 'react';

import { ContextData } from '../../../../../../providers/DataProvider';
import { checkAreDaysEqual } from '../../../../../../utils/check/checkDay';
import { IDay } from '../../../../../../utils/create/createDay';
import { IRootProps } from '../Root';

function withSingleSelect<T extends IRootProps>(PassedComponent: ComponentType<T>) {
  return class WithSingleSelect extends Component<T> {
    static contextType = ContextData;
    declare context: React.ContextType<typeof ContextData>;

    getClassNameForDay = (prevClassName: string | undefined, day: IDay) => {
      const { selectedDay } = this.context.singleSelect;

      if (selectedDay && checkAreDaysEqual(day, selectedDay)) {
        return prevClassName ? `${prevClassName} selected` : 'selected';
      } else {
        return prevClassName ? `${prevClassName} selectable` : 'selectable';
      }
    };

    getOnClickForDay = (day: IDay, prevOnClick: (() => void) | undefined) => {
      const {
        singleSelect: { changeSelectedDay },
        params: { isOpenCalendar, changeIsOpenCalendar },
      } = this.context;

      if (prevOnClick) {
        return () => {
          prevOnClick();
          changeSelectedDay(day);
          changeIsOpenCalendar(!isOpenCalendar);
        };
      } else {
        return () => {
          changeSelectedDay(day);
          changeIsOpenCalendar(!isOpenCalendar);
        };
      }
    };

    getProps = () => {
      const { day, className, disabled, onClick } = this.props;
      const { getOnClickForDay, getClassNameForDay } = this;

      const newOnClick = !disabled ? getOnClickForDay(day, onClick) : onClick;
      const newClassName = getClassNameForDay(className, day);

      return { className: newClassName, onClick: newOnClick };
    };

    render() {
      const { getProps } = this;

      return <PassedComponent {...this.props} {...getProps()} />;
    }
  };
}

export { withSingleSelect };
