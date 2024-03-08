import React from 'react';

import { ContextData } from '../Context';
import { TodoList } from '../TodoList';
import { Body } from './Body';
import { Header } from './Header';
import { Wrapper } from './styled';

class Calendar extends React.Component {
  static contextType = ContextData;
  declare context: React.ContextType<typeof ContextData>;

  render() {
    return (
      <>
        <Wrapper>
          <Header />
          <Body />
        </Wrapper>

        <TodoList />
      </>
    );
  }
}

export { Calendar };
