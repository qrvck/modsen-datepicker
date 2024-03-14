import { IDay } from '@/utils/create/createDay';

interface IDayCellProps {
  day: IDay;
}

interface IDayCellState {
  minDate?: Date;
  maxDate?: Date;
  range: boolean;
  weekends: boolean;
  holidays: boolean;
  todoList: boolean;
}

export type { IDayCellProps, IDayCellState };
