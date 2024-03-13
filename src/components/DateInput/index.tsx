import React, { Component } from 'react';

import { ContextData } from '../../providers/DataProvider';
import { withRangeSelect, withSingleSelect } from './hoc';
import { Root } from './Root';

type IComponentHOC =
  | typeof Root
  | ReturnType<typeof withSingleSelect>
  | ReturnType<typeof withRangeSelect>;

class DateInput extends Component {
  static contextType = ContextData;
  declare context: React.ContextType<typeof ContextData>;

  state = {
    range: this.context.config.range,
  };

  ComponentHOC = this.configureComponent();

  componentDidUpdate() {
    const { state } = this;
    const { range } = this.context.config;

    if (state.range !== range) {
      this.ComponentHOC = this.configureComponent();
      this.setState({ range });
    }
  }

  configureComponent() {
    const { range } = this.context.config;
    let ComponentHOC: IComponentHOC = Root;

    if (!range) {
      ComponentHOC = withSingleSelect(ComponentHOC);
    } else {
      ComponentHOC = withRangeSelect(ComponentHOC);
    }

    return ComponentHOC;
  }

  render() {
    const { ComponentHOC } = this;

    return <ComponentHOC />;
  }
}

export { DateInput };
