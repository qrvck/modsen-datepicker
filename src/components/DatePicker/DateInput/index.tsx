import React, { Component } from 'react';

import sprite from '../../../assets/sprite.svg';
import { Calendar } from '../Calendar';
import { ContextData } from '../Context';
import { CalendarButton, ClearButton, Input, InputWrapper, Svg } from './styled';

class DateInput extends Component {
  static contextType = ContextData;
  declare context: React.ContextType<typeof ContextData>;

  state = {
    isOpenCalendar: false,
  };

  getValue = () => {
    const { selectedDay } = this.context.singleSelect;

    if (selectedDay) {
      const { dayNumber, monthNumber, year } = selectedDay;
      return `${dayNumber}/${monthNumber}/${year}`;
    } else {
      return '';
    }
  };

  handleClickOnCalendarButton = () => {
    const { isOpenCalendar } = this.state;
    this.setState({ isOpenCalendar: !isOpenCalendar });
  };

  render() {
    const { getValue, handleClickOnCalendarButton } = this;
    const { isOpenCalendar } = this.state;
    console.log(getValue());

    return (
      <InputWrapper>
        <CalendarButton onClick={handleClickOnCalendarButton}>
          <Svg>
            <use href={sprite + '#calendar'} />
          </Svg>
        </CalendarButton>

        <Input value={getValue()} />

        <ClearButton>
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
