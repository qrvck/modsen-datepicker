interface IDatePickerProps {
  firstDayOfWeek?: 'sunday' | 'monday';
  maxDate?: Date;
  minDate?: Date;
  range?: boolean;
  todoList?: boolean;
  holidays?: boolean;
  weekends?: boolean;

  singleValue?: Date | null;
  rangeValue?: [Date | null, Date | null];

  onSingleChange?: (value: Date | null) => void;
  onRangeChange?: (value: [Date | null, Date | null]) => void;
}

export type { IDatePickerProps };
