import React, { Component } from 'react';

import { getDayNames } from '../../../../utils/get/getDayNames';
import { Cell, Wrapper } from './styled';

interface IDayNamesProps {
  firstDayOfWeek?: 'sunday' | 'monday';
}

class DayNames extends Component<IDayNamesProps> {
  render() {
    return (
      <Wrapper>
        {getDayNames(this.props.firstDayOfWeek).map(({ shortDayName }) => (
          <Cell key={shortDayName}>{shortDayName}</Cell>
        ))}
      </Wrapper>
    );
  }
}

export { DayNames };
