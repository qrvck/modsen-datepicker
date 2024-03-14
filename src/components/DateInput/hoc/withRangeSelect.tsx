import React, { ChangeEvent, Component, ComponentType } from 'react';

import { ContextData } from '../../../providers/DataProvider';
import { createDay } from '../../../utils/create/createDay';
import { IRootProps } from '../Root';

function withRangeSelect(PassedComponent: ComponentType<IRootProps>) {
  return class WithRangeSelect extends Component {
    static contextType = ContextData;
    declare context: React.ContextType<typeof ContextData>;

    state = {
      inputValue: '',
      startDay: null,
      endDay: null,
    };

    componentDidMount() {
      this.syncState();
    }

    componentDidUpdate() {
      this.syncState();
    }

    syncState() {
      const { startDay, endDay } = this.context.rangleSelect;

      if (this.state.startDay !== startDay || this.state.endDay !== endDay) {
        if (startDay && endDay) {
          const valueOfStartDay = `${startDay.fullDayNumber}/${startDay.fullMonthNumber}/${startDay.year}`;
          const valueOfEndDay = `${endDay.fullDayNumber}/${endDay.fullMonthNumber}/${endDay.year}`;
          const fullValue = `${valueOfStartDay}-${valueOfEndDay}`;
          this.setState({ inputValue: fullValue, startDay, endDay });
        } else {
          this.setState({ startDay, endDay });
        }
      }
    }

    handleOnChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
      const { changeStartDay, changeEndDay } = this.context.rangleSelect;
      const { changeIsOpenCalendar } = this.context.params;
      const { value } = e.target;
      const { inputValue } = this.state;
      let mask = 'xx/xx/xxxx-xx/xx/xxxx';
      const maskLength = 21;
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
        const [startDayValue, endDayValue] = mask.split('-');
        const [dayNumberOfStartDay, monthNumberOfStartDay, yearOfStartDay] = startDayValue
          .split('/')
          .map((i) => Number(i));
        const [dayNumberOfEndDay, monthNumberOfEndDay, yearOfEndDay] = endDayValue
          .split('/')
          .map((i) => Number(i));

        const startDay = createDay(
          new Date(yearOfStartDay, monthNumberOfStartDay - 1, dayNumberOfStartDay)
        );
        const endDay = createDay(
          new Date(yearOfEndDay, monthNumberOfEndDay - 1, dayNumberOfEndDay)
        );

        const newStartDayValue = `${startDay.fullDayNumber}/${startDay.fullMonthNumber}/${startDay.year}`;
        const newEndDayValue = `${endDay.fullDayNumber}/${endDay.fullMonthNumber}/${endDay.year}`;
        const newValue = `${newStartDayValue}-${newEndDayValue}`;

        this.setState({ inputValue: newValue, startDay, endDay });
        changeStartDay(startDay);
        changeEndDay(endDay);
        changeIsOpenCalendar(false);
      } else {
        this.setState({ selectedDay: null });
        changeStartDay(null);
        changeEndDay(null);
      }
    };

    handleClickOnClearButton = () => {
      const { changeStartDay, changeEndDay } = this.context.rangleSelect;
      changeStartDay(null);
      changeEndDay(null);
      this.setState({ inputValue: '', startDay: null, endDay: null });
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

export { withRangeSelect };
