import React, { ChangeEvent, Component } from 'react';

import sprite from '@/assets/sprite.svg';
import { ContextData } from '@/providers/DataProvider';

import { Calendar } from '../Calendar';
import { CalendarButton, ClearButton, Hint, Input, InputWrapper, Svg, Wrapper } from './styled';

export interface IRootProps {
  inputValue: string;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
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
    const { inputValue, onChangeInput, onClickClearButton } = this.props;
    const { handleClickOnCalendarButton } = this;
    const {
      params: { isOpenCalendar },
      config: { range },
    } = this.context;

    return (
      <Wrapper>
        <InputWrapper>
          <CalendarButton onClick={handleClickOnCalendarButton}>
            <Svg>
              <use href={sprite + '#calendar'} />
            </Svg>
          </CalendarButton>

          <Input value={inputValue} onChange={onChangeInput} />

          <ClearButton disabled={!inputValue} onClick={onClickClearButton}>
            <Svg>
              <use href={sprite + '#clear'} />
            </Svg>
          </ClearButton>

          <Calendar isOpen={isOpenCalendar} />
        </InputWrapper>

        <Hint>{range ? 'DD/MM/YYYY-DD/MM/YYYY' : 'DD/MM/YYYY'}</Hint>
      </Wrapper>
    );
  }
}

export { Root };
