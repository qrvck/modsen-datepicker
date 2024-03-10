import React, { Component } from 'react';

import sprite from '../../../assets/sprite.svg';
import { Calendar } from '../Calendar';
import { ContextData } from '../Context';
import { CalendarButton, ClearButton, Input, InputWrapper, Svg } from './styled';

class DateInput extends Component {
  static contextType = ContextData;
  declare context: React.ContextType<typeof ContextData>;

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
    const { isOpenCalendar, changeIsOpenCalendar } = this.context.params;
    changeIsOpenCalendar(!isOpenCalendar);
  };

  handleClickOnClearButton = () => {
    const { changeSelectedDay } = this.context.singleSelect;
    changeSelectedDay(null);
  };

  render() {
    const { getValue, handleClickOnCalendarButton, handleClickOnClearButton } = this;
    const {
      singleSelect: { selectedDay },
      params: { isOpenCalendar },
    } = this.context;

    return (
      <InputWrapper>
        <CalendarButton onClick={handleClickOnCalendarButton}>
          <Svg>
            <use href={sprite + '#calendar'} />
          </Svg>
        </CalendarButton>

        <Input value={getValue()} />

        <ClearButton disabled={!selectedDay} onClick={handleClickOnClearButton}>
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
