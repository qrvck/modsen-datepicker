import React, { Component, KeyboardEvent } from 'react';

import sprite from '../../../assets/sprite.svg';
import { createDay, IDay } from '../../../utils/createDay';
import { Calendar } from '../Calendar';
import { ContextData } from '../Context';
import { CalendarButton, ClearButton, Input, InputWrapper, Svg } from './styled';

interface IDateInputState {
  inputValue: string;
  selectedDay: IDay | null;
}

class DateInput extends Component<object, IDateInputState> {
  static contextType = ContextData;
  declare context: React.ContextType<typeof ContextData>;

  state = {
    inputValue: '',
    selectedDay: null,
  };

  componentDidUpdate(prevProps: object, prevState: Readonly<IDateInputState>) {
    const { selectedDay } = this.context.singleSelect;

    if (prevState.selectedDay !== selectedDay && selectedDay) {
      const { fullDayNumber, fullMonthNumber, year } = selectedDay;
      const value = `${fullDayNumber}/${fullMonthNumber}/${year}`;
      this.setState({ inputValue: value, selectedDay });
    }
  }

  handleOnKeyDownInput = (e: KeyboardEvent) => {
    const { inputValue } = this.state;
    const { changeSelectedDay } = this.context.singleSelect;
    const { changeIsOpenCalendar } = this.context.params;
    const { key } = e;
    const numbers = '1234567890';
    let mask = 'xx/xx/xxxx';
    const maskLength = 10;
    let value = inputValue.replace(/\//g, '');

    if (numbers.includes(key) && inputValue.length <= maskLength) {
      value = value + key;
    } else if (key === 'Backspace') {
      value = value.slice(0, value.length - 1);
    }

    value.split('').forEach((number) => (mask = mask.replace('x', number)));
    const indexOfLastMaskItem = mask.indexOf('x');
    mask = indexOfLastMaskItem !== -1 ? mask.slice(0, indexOfLastMaskItem) : mask;

    this.setState({ inputValue: mask });

    if (mask.length === maskLength) {
      const [inputDayNumber, inputMonthNumber, inputYear] = mask.split('/').map((i) => Number(i));
      const day = createDay(new Date(inputYear, inputMonthNumber - 1, inputDayNumber));
      const value = `${day.fullDayNumber}/${day.fullMonthNumber}/${day.year}`;

      this.setState({ inputValue: value });
      changeSelectedDay(day);
      changeIsOpenCalendar(false);
    } else {
      this.setState({ selectedDay: null });
      changeSelectedDay(null);
    }
  };

  handleClickOnCalendarButton = () => {
    const { isOpenCalendar, changeIsOpenCalendar } = this.context.params;
    changeIsOpenCalendar(!isOpenCalendar);
  };

  handleClickOnClearButton = () => {
    const { changeSelectedDay } = this.context.singleSelect;
    changeSelectedDay(null);
    this.setState({ inputValue: '', selectedDay: null });
  };

  render() {
    const { handleClickOnCalendarButton, handleClickOnClearButton, handleOnKeyDownInput } = this;
    const { inputValue } = this.state;
    const {
      params: { isOpenCalendar },
    } = this.context;

    return (
      <InputWrapper>
        <CalendarButton onClick={handleClickOnCalendarButton}>
          <Svg>
            <use href={sprite + '#calendar'} />
          </Svg>
        </CalendarButton>

        <Input value={inputValue} onKeyDown={handleOnKeyDownInput} />

        <ClearButton disabled={!inputValue} onClick={handleClickOnClearButton}>
          <Svg>
            <use href={sprite + '#clear'} />
          </Svg>
        </ClearButton>

        <Calendar isOpen={isOpenCalendar} />
      </InputWrapper>
    );
  }
}

export { DateInput };
