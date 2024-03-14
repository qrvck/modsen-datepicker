import React, { ChangeEvent, Component, ComponentType } from 'react';

import { ContextData } from '../../../providers/DataProvider';
import { createDay } from '../../../utils/create/createDay';
import { IRootProps } from '../Root';

function withSingleSelect(PassedComponent: ComponentType<IRootProps>) {
  return class WithSingleSelect extends Component {
    static contextType = ContextData;
    declare context: React.ContextType<typeof ContextData>;

    state = {
      inputValue: '',
      selectedDay: null,
    };

    componentDidMount() {
      this.syncState();
    }

    componentDidUpdate() {
      this.syncState();
    }

    syncState() {
      const { selectedDay } = this.context.singleSelect;

      if (this.state.selectedDay !== selectedDay && selectedDay) {
        const { fullDayNumber, fullMonthNumber, year } = selectedDay;
        const value = `${fullDayNumber}/${fullMonthNumber}/${year}`;
        this.setState({ inputValue: value, selectedDay });
      }
    }

    handleOnChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
      const { changeSelectedDay } = this.context.singleSelect;
      const { changeIsOpenCalendar } = this.context.params;
      const { value } = e.target;
      const { inputValue } = this.state;
      let mask = 'xx/xx/xxxx';
      const maskLength = 10;
      const newValue = value.replace(/\D/g, '');

      if (value.length > inputValue.length) {
        newValue.split('').forEach((number) => (mask = mask.replace('x', number)));
        const indexOfLastMaskItem = mask.indexOf('x');
        mask = indexOfLastMaskItem !== -1 ? mask.slice(0, indexOfLastMaskItem) : mask;

        this.setState({ inputValue: mask });
      } else {
        mask = '';
        this.setState({ inputValue: value });
      }

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
      const { handleOnChangeInput, handleClickOnClearButton } = this;
      const { inputValue } = this.state;

      return {
        inputValue,
        onChangeInput: handleOnChangeInput,
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
