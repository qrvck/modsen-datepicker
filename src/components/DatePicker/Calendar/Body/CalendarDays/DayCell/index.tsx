import React, { Component } from 'react';

import { IDay } from '../../../../../../utils/createDay';
import { ContextData } from '../../../../Context';
import { withCurrentDate } from './hoc/withCurrentDate';
import { Root } from './Root';

interface IDayCellProps {
  day: IDay;
}

type IComponentHOC = typeof Root | ReturnType<typeof withCurrentDate>;

class DayCell extends Component<IDayCellProps> {
  static contextType = ContextData;
  declare context: React.ContextType<typeof ContextData>;

  render() {
    const { day } = this.props;

    let ComponentHOC: IComponentHOC = Root;
    ComponentHOC = withCurrentDate(ComponentHOC);

    return <ComponentHOC day={day} />;
  }
}

export { DayCell };
