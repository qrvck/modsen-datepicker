import { styled } from 'styled-components';

const Cell = styled.button`
  width: 2.4em;
  height: 2.4em;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: default;
  font: inherit;
  border: none;
  background-color: transparent;

  &.current {
    background-color: orange;
    border-radius: 8px;
  }

  &.selectable {
    cursor: pointer;

    &:hover {
      background: rgba(47, 128, 237, 0.1);
      border-radius: 8px;
      color: #2f80ed;
    }
  }

  &.weekend,
  &.holiday {
    color: red;
  }

  &.hasTodo {
    position: relative;

    &::before {
      position: absolute;
      top: 0.3em;
      right: 0.3em;

      width: 0.5em;
      height: 0.5em;

      background-color: mediumpurple;
      border-radius: 50%;

      content: '';
    }
  }

  &[disabled] {
    color: #aaaaaa;
    cursor: default;

    &:hover {
      background: transparent;
      color: #aaaaaa;
    }
  }

  &.selected {
    background: #2f80ed;
    color: #ffffff;
    border-radius: 8px;

    &:hover {
      background: #2f80ed;
      color: #ffffff;
    }
  }
`;

export { Cell };
