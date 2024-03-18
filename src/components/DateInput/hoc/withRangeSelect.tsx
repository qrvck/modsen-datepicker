import React, { ChangeEvent, Component, ComponentType } from 'react';

import { ContextData } from '../../../providers/DataProvider';
import { checkIsDayGreaterDate, checkIsDayLessDate } from '../../../utils/check/checkDay';
import { createDay } from '../../../utils/create/createDay';
import { IRootProps } from '../types';
import { RANGE_SELECT_HINT, RANGE_SELECT_MASK } from './constants';

function withRangeSelect(PassedComponent: ComponentType<IRootProps>) {
  return class WithRangeSelect extends Component {
    static contextType = ContextData;
    declare context: React.ContextType<typeof ContextData>;

    state = {
      inputValue: '',
      cursor: 0,
      startDay: null,
      endDay: null,
    };

    inputRef: HTMLInputElement | null = null;

    componentDidMount() {
      this.syncState();
    }

    componentDidUpdate() {
      const { cursor } = this.state;

      this.syncState();

      if (this.inputRef) this.inputRef.setSelectionRange(cursor, cursor);
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
      let mask = RANGE_SELECT_MASK;
      const maskLength = 21;
      const newValue = value.replace(/\D/g, '');

      newValue.split('').forEach((number) => (mask = mask.replace('x', number)));
      const indexOfLastMaskItem = mask.indexOf('x');
      mask = indexOfLastMaskItem !== -1 ? mask.slice(0, indexOfLastMaskItem) : mask;

      let selectionStart = e.target.selectionStart || 0;

      if (value.length >= inputValue.length) {
        selectionStart = mask[selectionStart - 1] === '/' ? selectionStart + 1 : selectionStart;
        selectionStart = mask[selectionStart] === '/' ? selectionStart + 1 : selectionStart;
        selectionStart = mask[selectionStart - 1] === '-' ? selectionStart + 1 : selectionStart;
        selectionStart = mask[selectionStart] === '-' ? selectionStart + 1 : selectionStart;
      }

      this.setState({ inputValue: mask, cursor: selectionStart });
      this.inputRef = e.target;

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

    getIsIncorrectSelectedDate = () => {
      const {
        rangleSelect: { startDay, endDay },
        config: { minDate, maxDate },
      } = this.context;

      if (startDay) {
        if (minDate && checkIsDayLessDate(startDay, minDate)) return true;
        if (maxDate && checkIsDayGreaterDate(startDay, maxDate)) return true;
      }

      if (endDay) {
        if (minDate && checkIsDayLessDate(endDay, minDate)) return true;
        if (maxDate && checkIsDayGreaterDate(endDay, maxDate)) return true;
      }

      return false;
    };

    getProps = () => {
      const { getIsIncorrectSelectedDate, handleOnChangeInput, handleClickOnClearButton } = this;
      const { inputValue } = this.state;

      return {
        inputValue,
        isError: getIsIncorrectSelectedDate(),
        hintText: RANGE_SELECT_HINT,
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
