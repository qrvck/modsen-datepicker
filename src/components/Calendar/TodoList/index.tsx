import React, { ChangeEvent, Component, createRef, KeyboardEvent } from 'react';

import { ContextData } from '../../../providers/DataProvider';
import { Modal } from '../../common/Modal';
import { HINT_MESSAGE_1, HINT_MESSAGE_2, TITLE } from './constants';
import {
  AddButton,
  AddIcon,
  AddInput,
  AddInputWrapper,
  HintMessage,
  Item,
  List,
  RemoveButton,
  RemoveIcon,
  Title,
} from './styled';
import { todoStorage } from './todoStorage';
import { ITodoListState } from './types';

class TodoList extends Component<object, ITodoListState> {
  static contextType = ContextData;
  declare context: React.ContextType<typeof ContextData>;

  state: ITodoListState = {
    addInputValue: '',
    selectedDay: null,
    todoList: null,
  };

  listRef = createRef<HTMLUListElement>();

  componentDidUpdate() {
    const { selectedDay } = this.context.todoList;

    if (this.state.selectedDay !== selectedDay) {
      this.setState({
        selectedDay,
        todoList: todoStorage.getList(selectedDay),
      });
    }
  }

  handleOnClose = () => {
    this.context.todoList.changeSelectedDay(null);
    this.setState({ addInputValue: '', selectedDay: null, todoList: null });
  };

  handleChangeAddInput = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ addInputValue: e.target.value });
  };

  handleOnKeyDownAddInput = (e: KeyboardEvent<HTMLInputElement>) => {
    const { addInputValue } = this.state;

    if (e.code === 'Enter' && addInputValue) {
      this.handleClickOnAddButton();
    }
  };

  handleClickOnAddButton = () => {
    const { addInputValue, selectedDay, todoList } = this.state;
    const list = this.listRef.current;

    if (todoList && selectedDay) {
      const item = { desc: addInputValue, uuid: crypto.randomUUID() };
      this.setState({ addInputValue: '', todoList: todoList.concat(item) });
      todoStorage.setItem(selectedDay, item);
    }

    if (list) {
      setTimeout(() => {
        const lastItem = list.lastElementChild;
        if (lastItem) lastItem.scrollIntoView({ block: 'end', behavior: 'smooth' });
      }, 0);
    }
  };

  handleClickOnRemoveButton = (itemIndex: number) => {
    const { todoList, selectedDay } = this.state;

    if (todoList && selectedDay) {
      const newTodoList = todoList.slice();
      newTodoList.splice(itemIndex, 1);
      this.setState({ todoList: newTodoList });
      todoStorage.removeItem(selectedDay, itemIndex);
    }
  };

  render() {
    const { selectedDay } = this.context.todoList;
    const { addInputValue, todoList } = this.state;
    const { listRef } = this;
    const {
      handleOnClose,
      handleChangeAddInput,
      handleClickOnAddButton,
      handleOnKeyDownAddInput,
      handleClickOnRemoveButton,
    } = this;

    if (selectedDay && todoList) {
      const { dayNumber, monthName, year } = selectedDay;

      return (
        <Modal onClose={handleOnClose}>
          <Title>
            <b>{TITLE}</b> {`${dayNumber} ${monthName} ${year}`}
          </Title>

          <AddInputWrapper>
            <AddInput
              value={addInputValue}
              onChange={handleChangeAddInput}
              onKeyDown={handleOnKeyDownAddInput}
            />
            <AddButton onClick={handleClickOnAddButton} disabled={!addInputValue}>
              <AddIcon />
            </AddButton>
          </AddInputWrapper>

          {!!todoList.length && (
            <List ref={listRef}>
              {todoList.map(({ desc, uuid }, index) => (
                <Item key={uuid}>
                  {desc}
                  <RemoveButton onClick={() => handleClickOnRemoveButton(index)}>
                    <RemoveIcon />
                  </RemoveButton>
                </Item>
              ))}
            </List>
          )}

          {todoList.length ? (
            <HintMessage>
              {HINT_MESSAGE_1}
              {todoList.length}
            </HintMessage>
          ) : (
            <HintMessage>{HINT_MESSAGE_2}</HintMessage>
          )}
        </Modal>
      );
    } else {
      return null;
    }
  }
}

export { TodoList };
