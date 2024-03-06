import React, { Component } from 'react';

import { ContextData } from '../Context';

class Input extends Component {
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

    return <input type="text" name="" id="" value={getValue()} />;
  }
}

export { Input };
