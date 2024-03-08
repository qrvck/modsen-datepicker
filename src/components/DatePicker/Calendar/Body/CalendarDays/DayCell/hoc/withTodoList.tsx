import React, { Component, ComponentType, MouseEvent } from 'react';

import { checkIsDayFromMonth } from '../../../../../../../utils/checkDay';
import { IDay } from '../../../../../../../utils/createDay';
import { ContextData } from '../../../../../Context';
import { IRootProps } from '../Root';

function withTodoList<T extends IRootProps>(PassedComponent: ComponentType<T>) {
  return class WithTodoList extends Component<T> {
    static contextType = ContextData;
    declare context: React.ContextType<typeof ContextData>;

    getOnContextMenuForSelectableDay = (day: IDay, prevOnContextMenu: (() => void) | undefined) => {
      const { changeSelectedDay } = this.context.todoList;

      if (prevOnContextMenu) {
        return (e: MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          prevOnContextMenu();
          changeSelectedDay(day);
        };
      } else {
        return (e: MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          changeSelectedDay(day);
          console.log(day);
        };
      }
    };

    getOnContextMenuForDay = (
      day: IDay,
      isDayFromMonth: boolean,
      prevOnContextMenu: (() => void) | undefined
    ) => {
      const { changeSelectedDay } = this.context.todoList;

      if (!prevOnContextMenu && !isDayFromMonth) {
        return (e: MouseEvent<HTMLButtonElement>) => e.preventDefault();
      }

      if (prevOnContextMenu) {
        return () => {
          prevOnContextMenu();
          changeSelectedDay(day);
        };
      } else {
        return (e: MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          changeSelectedDay(day);
          // console.log(day);
        };
      }
    };

    getProps = () => {
      const { displayedMonthIndex } = this.context.params;
      const { day, onContextMenu } = this.props;
      const { getOnContextMenuForDay } = this;

      const isDayFromMonth = checkIsDayFromMonth(day, displayedMonthIndex);
      const newOnContextMenu = getOnContextMenuForDay(day, isDayFromMonth, onContextMenu);

      return { onContextMenu: newOnContextMenu };
    };

    render() {
      const { getProps } = this;

      return <PassedComponent {...this.props} {...getProps()} />;
    }
  };
}

export { withTodoList };
