import React, { Component } from 'react';

import { ContextData } from '../../providers/DataProvider';
import { Calendar } from '../Calendar';
import {
  CalendarButton,
  CalendarIcon,
  ClearButton,
  ClearIcon,
  Hint,
  Input,
  InputWrapper,
  Wrapper,
} from './styled';
import { IRootProps } from './types';

class Root extends Component<IRootProps> {
  static contextType = ContextData;
  declare context: React.ContextType<typeof ContextData>;

  handleClickOnCalendarButton = () => {
    const { isOpenCalendar, changeIsOpenCalendar } = this.context.params;
    changeIsOpenCalendar(!isOpenCalendar);
  };

  render() {
    const { inputValue, isError, hintText, onChangeInput, onClickClearButton } = this.props;
    const { handleClickOnCalendarButton } = this;
    const {
      params: { isOpenCalendar },
    } = this.context;

    return (
      <Wrapper>
        <InputWrapper>
          <CalendarButton onClick={handleClickOnCalendarButton}>
            <CalendarIcon />
          </CalendarButton>

          <Input $isError={isError} value={inputValue} onChange={onChangeInput} />

          <ClearButton disabled={!inputValue} onClick={onClickClearButton}>
            <ClearIcon />
          </ClearButton>

          <Calendar isOpen={isOpenCalendar} />
        </InputWrapper>

        <Hint>{hintText}</Hint>
      </Wrapper>
    );
  }
}

export { Root };
