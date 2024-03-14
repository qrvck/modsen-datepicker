import React, { Component } from 'react';

import { IDay } from '@/utils/create/createDay';

import { Cell } from './styled';

export interface IRootProps {
  day: IDay;
  className?: string;
  title?: string;
  disabled?: boolean;
  onClick?: () => void;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
  onContextMenu?: () => void;
}

class Root extends Component<IRootProps> {
  render() {
    const { day, ...otherProps } = this.props;

    return <Cell {...otherProps}>{day.dayNumber}</Cell>;
  }
}

export { Root };
