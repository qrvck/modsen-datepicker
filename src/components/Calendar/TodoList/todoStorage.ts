import { IDay } from '../../../utils/create/createDay';
import { ITodoItem, ITodoLists } from './types';

const getInitialTodoListsFromLocalStorage = () => {
  const todoLists = localStorage.getItem('modsen-Datepicker-todo-lists');

  if (todoLists) {
    return JSON.parse(todoLists) as ITodoLists;
  } else {
    return {};
  }
};

class todoStorage {
  static todoLists = getInitialTodoListsFromLocalStorage();

  static getList(day: IDay | null) {
    if (!day) return null;

    const { todoLists } = this;
    const { dayNumber, monthIndex, year } = day;
    const key = `${dayNumber}/${monthIndex}/${year}`;
    const list = todoLists[key];

    if (list) {
      return list;
    } else {
      return [];
    }
  }

  static setItem(day: IDay, item: ITodoItem) {
    const { todoLists } = this;
    const { dayNumber, monthIndex, year } = day;
    const key = `${dayNumber}/${monthIndex}/${year}`;
    const list = todoLists[key];

    if (list) {
      list.push(item);
    } else {
      todoLists[key] = [item];
    }

    localStorage.setItem('modsen-Datepicker-todo-lists', JSON.stringify(todoLists));
  }

  static removeItem(day: IDay, itemIndex: number) {
    const { todoLists } = this;
    const { dayNumber, monthIndex, year } = day;
    const key = `${dayNumber}/${monthIndex}/${year}`;
    const list = todoLists[key];

    if (list) {
      list.splice(itemIndex, 1);
      if (!list.length) delete todoLists[key];

      localStorage.setItem('modsen-Datepicker-todo-lists', JSON.stringify(todoLists));
    }
  }

  static checkDayHasTodoItems(day: IDay) {
    const { todoLists } = this;
    const { dayNumber, monthIndex, year } = day;
    const key = `${dayNumber}/${monthIndex}/${year}`;

    return Boolean(todoLists[key]);
  }
}

export { todoStorage };
