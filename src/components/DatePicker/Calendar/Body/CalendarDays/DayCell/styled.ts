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
  border-radius: 8px;
  box-sizing: border-box;

  &.current {
    border: 0.2em solid orange;
  }

  &.selectable {
    cursor: pointer;

    &:hover {
      background: rgba(47, 128, 237, 0.1);
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

    &:hover {
      background: #2f80ed;
      color: #ffffff;
    }
  }

  /* range */

  &.between {
    background: rgba(47, 128, 237, 0.1);
    border-radius: 0;
    color: #2f80ed;
  }

  &.start-selected {
    background: #2f80ed;
    color: #ffffff;
    border-top-left-radius: 8px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 8px;

    &:hover {
      color: #ffffff;
      background: #2f80ed;
    }
  }

  &.end-selected,
  &.end-hover {
    background: #2f80ed;
    color: #ffffff;
    border-top-left-radius: 0;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 0;
  }

  &.end-selected {
    &:hover {
      color: #ffffff;
      background: #2f80ed;
    }
  }

  &.end-hover {
    cursor: pointer;
  }
`;

export { Cell };
