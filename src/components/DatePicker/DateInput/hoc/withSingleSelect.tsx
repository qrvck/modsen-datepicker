import React, { Component, ComponentType, KeyboardEvent } from 'react';

import { createDay } from '../../../../utils/createDay';
import { ContextData } from '../../Context';
import { IRootProps } from '../Root';

function withSingleSelect(PassedComponent: ComponentType<IRootProps>) {
  return class WithSingleSelect extends Component {
    static contextType = ContextData;
    declare context: React.ContextType<typeof ContextData>;

    state = {
      inputValue: '',
      selectedDay: null,
    };

    componentDidUpdate() {
      const { selectedDay } = this.context.singleSelect;

      if (this.state.selectedDay !== selectedDay && selectedDay) {
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

    handleClickOnClearButton = () => {
      const { changeSelectedDay } = this.context.singleSelect;
      changeSelectedDay(null);
      this.setState({ inputValue: '', selectedDay: null });
    };

    getProps = () => {
      const { handleOnKeyDownInput, handleClickOnClearButton } = this;
      const { inputValue } = this.state;

      return {
        inputValue,
        onKeyDownInput: handleOnKeyDownInput,
        onClickClearButton: handleClickOnClearButton,
      };
    };

    render() {
      const { getProps } = this;

      return <PassedComponent {...getProps()} />;
    }
  };
}

export { withSingleSelect };
