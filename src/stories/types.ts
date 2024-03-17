import { IDatePickerProps } from '../@types/datePicker';

type IStoryDatePicker = Omit<
  IDatePickerProps,
  'range' | 'singleValue' | 'rangeValue' | 'onSingleChange' | 'onRangeChange'
>;

export type { IStoryDatePicker };
