import { IDay } from '@/utils/create/createDay';

interface ITodoListState {
  addInputValue: string;
  selectedDay: IDay | null;
  todoList: ITodoItem[] | null;
}

interface ITodoLists {
  // вид ключа: 'dayNumber/monthIndex/year'
  [index: string]: ITodoItem[] | undefined;
}

interface ITodoItem {
  desc: string;
  uuid: string;
}

export type { ITodoItem, ITodoLists, ITodoListState };
