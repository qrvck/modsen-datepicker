import React, { Component, ComponentType } from 'react';

import { checkIsDayFromMonth } from '../../../../../../utils/checkDay';
import { IDay } from '../../../../../../utils/createDay';
import { ContextData } from '../../../../Context';
import { IDayWithProps, IRootProps } from '..';

function withSingleSelect<T extends IRootProps>(PassedComponent: ComponentType<T>) {
  return class WithSingleSelect extends Component<T> {
    static contextType = ContextData;
    declare context: React.ContextType<typeof ContextData>;

    getClassNameForDay = (prevClassName: string | undefined, day: IDay) => {
      const { selectedDay } = this.context.singleSelect;

      let className = prevClassName ? `${prevClassName} selectable` : 'selectable';

      if (selectedDay) {
        className =
          day.dayNumber === selectedDay.dayNumber &&
          day.monthIndex === selectedDay.monthIndex &&
          day.year === selectedDay.year
            ? `${className} selected`
            : className;
      }

      return className;
    };

    getOnClickForDay = (prevOnClick: (() => void) | undefined, day: IDay) => {
      const { changeSelectedDay } = this.context.singleSelect;

      if (prevOnClick) {
        return () => {
          prevOnClick();
          changeSelectedDay(day);
        };
      } else {
        return () => changeSelectedDay(day);
      }
    };

    getDisplayedMonthDataWithSingleSelect = () => {
      const { displayedMonthData } = this.props;
      const { getClassNameForDay, getOnClickForDay } = this;
      const {
        params: { displayedMonthIndex },
      } = this.context;

      const daysWithProps = displayedMonthData.allDays.map((day) => {
        const isDayFromMonth = checkIsDayFromMonth(day, displayedMonthIndex);

        if (isDayFromMonth) {
          const prevClassName = day.props.className;
          const className = getClassNameForDay(prevClassName, day);

          const prevOnClick = day.props.onClick;
          const onClick = getOnClickForDay(prevOnClick, day);

          const dayWithProps: IDayWithProps = {
            ...day,
            props: { ...day.props, className, onClick },
          };
          return dayWithProps;
        } else {
          return day;
        }
      });

      const displayedMonthDataWithCurrentDate = {
        ...displayedMonthData,
        allDays: daysWithProps,
      };

      return displayedMonthDataWithCurrentDate;
    };

    render() {
      const { getDisplayedMonthDataWithSingleSelect } = this;
      const displayedMonthDataWithSingleSelect = getDisplayedMonthDataWithSingleSelect();

      return (
        <PassedComponent {...this.props} displayedMonthData={displayedMonthDataWithSingleSelect} />
      );
    }
  };
}

export { withSingleSelect };
