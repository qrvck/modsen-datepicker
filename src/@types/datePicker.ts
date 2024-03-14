interface IDatePickerProps {
  firstDayOfWeek?: 'sunday' | 'monday';
  range?: boolean;
  todoList?: boolean;
  holidays?: boolean;
  maxDate?: Date;
  minDate?: Date;
  weekends?: boolean;
}

export type { IDatePickerProps };
