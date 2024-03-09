import React, { ChangeEvent, Component, createRef, KeyboardEvent } from 'react';

import sprite from '../../../assets/sprite.svg';
import { IDay } from '../../../utils/createDay';
import { Modal } from '../../common/Modal';
import { ContextData } from '../Context';
import {
  AddButton,
  AddInput,
  AddInputWrapper,
  HintMessage,
  Item,
  List,
  RemoveButton,
  Svg,
  Title,
} from './styled';
import { ITodoItem, todoStorage } from './todoStorage';

interface ITodoListState {
  addInputValue: string;
  selectedDay: IDay | null;
  todoList: ITodoItem[] | null;
}

class TodoList extends Component<object, ITodoListState> {
  static contextType = ContextData;
  declare context: React.ContextType<typeof ContextData>;

  state: ITodoListState = {
    addInputValue: '',
    selectedDay: null,
    todoList: null,
  };

  listRef = createRef<HTMLUListElement>();

  componentDidUpdate(prevProps: object, prevState: ITodoListState) {
    const { selectedDay } = this.context.todoList;

    if (prevState.selectedDay !== selectedDay) {
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
            <b>TODOLIST</b> {`${dayNumber} ${monthName} ${year}`}
          </Title>

          <AddInputWrapper>
            <AddInput
              value={addInputValue}
              onChange={handleChangeAddInput}
              onKeyDown={handleOnKeyDownAddInput}
            />
            <AddButton onClick={handleClickOnAddButton} disabled={!addInputValue}>
              <Svg>
                <use href={sprite + '#add'} />
              </Svg>
            </AddButton>
          </AddInputWrapper>

          {!!todoList.length && (
            <List ref={listRef}>
              {todoList.map(({ desc, uuid }, index) => (
                <Item key={uuid}>
                  {desc}
                  <RemoveButton onClick={() => handleClickOnRemoveButton(index)}>
                    <Svg>
                      <use href={sprite + '#remove'} />
                    </Svg>
                  </RemoveButton>
                </Item>
              ))}
            </List>
          )}

          {todoList.length ? (
            <HintMessage>Amount: {todoList.length}</HintMessage>
          ) : (
            <HintMessage>Nothing is scheduled!</HintMessage>
          )}
        </Modal>
      );
    } else {
      return null;
    }
  }
}

export { TodoList };
