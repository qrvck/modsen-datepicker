import React, { Component } from 'react';

import { Modal } from '../../common/Modal';
import { ContextData } from '../Context';
import { Title } from './styled';

class TodoList extends Component {
  static contextType = ContextData;
  declare context: React.ContextType<typeof ContextData>;

  handleOnClose = () => {
    this.context.todoList.changeSelectedDay(null);
  };

  render() {
    const { selectedDay } = this.context.todoList;
    const { handleOnClose } = this;

    if (selectedDay) {
      const { dayNumber, monthName, year } = selectedDay;

      return (
        <Modal onClose={handleOnClose}>
          <Title>
            <b>TODOLIST</b> {`${dayNumber} ${monthName} ${year}`}
          </Title>
          {/* <p>{`${dayNumber} ${monthName} ${year}`}</p> */}
        </Modal>
      );
    } else {
      return null;
    }
  }
}

export { TodoList };
