import React, { Component, KeyboardEvent } from 'react';

import sprite from '../../../assets/sprite.svg';
import { Calendar } from '../Calendar';
import { ContextData } from '../Context';
import { CalendarButton, ClearButton, Input, InputWrapper, Svg } from './styled';

export interface IRootProps {
  inputValue: string;
  onKeyDownInput: (e: KeyboardEvent) => void;
  onClickClearButton: () => void;
}

class Root extends Component<IRootProps> {
  static contextType = ContextData;
  declare context: React.ContextType<typeof ContextData>;

  handleClickOnCalendarButton = () => {
    const { isOpenCalendar, changeIsOpenCalendar } = this.context.params;
    changeIsOpenCalendar(!isOpenCalendar);
  };

  render() {
    const { inputValue, onKeyDownInput, onClickClearButton } = this.props;
    const { handleClickOnCalendarButton } = this;
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

        <Input value={inputValue} onKeyDown={onKeyDownInput} />

        <ClearButton disabled={!inputValue} onClick={onClickClearButton}>
          <Svg>
            <use href={sprite + '#clear'} />
          </Svg>
        </ClearButton>

        <Calendar isOpen={isOpenCalendar} />
      </InputWrapper>
    );
  }
}

export { Root };
