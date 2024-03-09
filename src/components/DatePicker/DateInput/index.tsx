import React, { Component } from 'react';

import sprite from '../../../assets/sprite.svg';
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

  render() {
    const { getValue } = this;
    console.log(getValue());

    return (
      <InputWrapper>
        <CalendarButton>
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
      </InputWrapper>
    );
  }
}

export { DateInput };
