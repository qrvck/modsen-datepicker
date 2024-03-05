import React, { Component, ComponentType } from 'react';

import { checkAreDaysEqual } from '../../../../../../../utils/checkDay';
import { IDay } from '../../../../../../../utils/createDay';
import { ContextData } from '../../../../../Context';
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
