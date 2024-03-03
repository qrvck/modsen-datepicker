import React from 'react';

import { ContextData } from '../Context';
import { Body } from './Body';
import { Header } from './Header';
import { Wrapper } from './styled';

class Calendar extends React.Component {
  static contextType = ContextData;
  declare context: React.ContextType<typeof ContextData>;

  render() {
    const {
      config: { range },
    } = this.context;

    let body = 'body';

    if (!range) {
      body = 'body with one select';
    }

    return (
      <Wrapper>
        <Header />
        <Body />
        {true || body}
      </Wrapper>
    );
  }
}

export { Calendar };
