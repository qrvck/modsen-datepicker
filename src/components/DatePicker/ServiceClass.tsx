import React from 'react';

import { Body } from './Body';
import { ContextData } from './Context';
import { Header } from './Header';
import { Wrapper } from './styled';

class ServiceClass extends React.Component {
  static contextType = ContextData;
  declare context: React.ContextType<typeof ContextData>;

  render() {
    const {
      config: { range },
      params: { displayedMonthData },
    } = this.context;

    let body = 'body';

    if (!range) {
      body = 'body with one select';
    }

    return (
      <Wrapper>
        <Header />
        <Body monthData={displayedMonthData} />
        {true || body}
      </Wrapper>
    );
  }
}

export { ServiceClass };
