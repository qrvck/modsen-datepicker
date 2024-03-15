interface IDatePickerProps {
  firstDayOfWeek?: 'sunday' | 'monday';
  maxDate?: Date;
  minDate?: Date;
  range?: boolean;
  todoList?: boolean;
  holidays?: boolean;
  weekends?: boolean;
}

export type { IDatePickerProps };
