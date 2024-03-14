import React, { Component, ComponentType, MouseEvent } from 'react';

import { todoStorage } from '@/components/Calendar/TodoList/todoStorage';
import { ContextData } from '@/providers/DataProvider';
import { checkIsDayFromMonth } from '@/utils/check/checkDay';
import { IDay } from '@/utils/create/createDay';

import { IRootProps } from '../Root';

function withTodoList<T extends IRootProps>(PassedComponent: ComponentType<T>) {
  return class WithTodoList extends Component<T> {
    static contextType = ContextData;
    declare context: React.ContextType<typeof ContextData>;

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
        };
      }
    };

    getClassNameForDay = (
      prevClassName: string | undefined,
      isDayFromMonth: boolean,
      day: IDay
    ) => {
      if (isDayFromMonth) {
        const className: string[] = [];
        const hasTodoItems = todoStorage.checkDayHasTodoItems(day);

        if (hasTodoItems) className.push('hasTodo');
        if (prevClassName) className.push(prevClassName);

        return className.join(' ');
      }
    };

    getProps = () => {
      const { displayedMonthIndex } = this.context.params;
      const { day, onContextMenu, className } = this.props;
      const { getOnContextMenuForDay, getClassNameForDay } = this;

      const isDayFromMonth = checkIsDayFromMonth(day, displayedMonthIndex);
      const newOnContextMenu = getOnContextMenuForDay(day, isDayFromMonth, onContextMenu);
      const newClassName = getClassNameForDay(className, isDayFromMonth, day);

      return { onContextMenu: newOnContextMenu, className: newClassName };
    };

    render() {
      const { getProps } = this;

      return <PassedComponent {...this.props} {...getProps()} />;
    }
  };
}

export { withTodoList };
