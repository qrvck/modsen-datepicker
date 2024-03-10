import React from 'react';

import { ContextData } from '../Context';
import { TodoList } from '../TodoList';
import { Body } from './Body';
import { Header } from './Header';
import { Wrapper } from './styled';

interface ICalendarProps {
  isOpen: boolean;
}

class Calendar extends React.Component<ICalendarProps> {
  static contextType = ContextData;
  declare context: React.ContextType<typeof ContextData>;

  render() {
    const { isOpen } = this.props;

    if (isOpen) {
      return (
        <>
          <Wrapper>
            <Header />
            <Body />
          </Wrapper>

          <TodoList />
        </>
      );
    } else {
      return null;
    }
  }
}

export { Calendar };
