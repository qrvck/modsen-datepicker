import React, { Component } from 'react';

import { ContextData } from '../../../../providers/DataProvider';
import { getDayNames } from '../../../../utils/get/getDayNames';
import { Cell, Wrapper } from './styled';

class DayNames extends Component {
  static contextType = ContextData;
  declare context: React.ContextType<typeof ContextData>;

  render() {
    const { firstDayOfWeek } = this.context.config;

    return (
      <Wrapper>
        {getDayNames(firstDayOfWeek).map(({ shortDayName }) => (
          <Cell key={shortDayName}>{shortDayName}</Cell>
        ))}
      </Wrapper>
    );
  }
}

export { DayNames };
