import React, { Component } from 'react';

import { ContextData } from '../Context';
import { withSingleSelect } from './hoc';
import { Root } from './Root';

type IComponentHOC = typeof Root | ReturnType<typeof withSingleSelect>;

class DateInput extends Component {
  static contextType = ContextData;
  declare context: React.ContextType<typeof ContextData>;

  Component = this.configureComponent();

  configureComponent() {
    const { range } = this.context.config;
    let ComponentHOC: IComponentHOC = Root;

    ComponentHOC = withSingleSelect(ComponentHOC);
    if (!range) {
    } else {
      // ComponentHOC = withRangeSelect(ComponentHOC);
    }

    return ComponentHOC;
  }

  render() {
    const { Component } = this;

    return <Component />;
  }
}

export { DateInput };
