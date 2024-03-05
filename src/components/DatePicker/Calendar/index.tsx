import React from 'react';

import { Body } from './Body';
import { Header } from './Header';
import { Wrapper } from './styled';

class Calendar extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Body />
      </Wrapper>
    );
  }
}

export { Calendar };
