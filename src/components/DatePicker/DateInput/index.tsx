import React, { Component } from 'react';

import { ContextData } from '../Context';
import { withSingleSelect } from './hoc/withSingleSelect';
import { Root } from './Root';

type IComponentHOC = typeof Root | ReturnType<typeof withSingleSelect>;

class DateInput extends Component {
  static contextType = ContextData;
  declare context: React.ContextType<typeof ContextData>;

  Component = this.configureComponent();

  configureComponent() {
    let ComponentHOC: IComponentHOC = Root;
    ComponentHOC = withSingleSelect(ComponentHOC);

    return ComponentHOC;
  }

  render() {
    // const { range } = this.context.config;
    const { Component } = this;

    return <Component />;
  }
}

export { DateInput };
