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
  border-radius: ${({ theme }) => theme.sizes.borderRadius.sm};
  box-sizing: border-box;

  &.current {
    border: 0.2em solid orange;
  }

  &.selectable {
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.colors.royal_blue_opacity_01};
      color: ${({ theme }) => theme.colors.royal_blue};
    }
  }

  &.weekend,
  &.holiday {
    color: ${({ theme }) => theme.colors.red};
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
    color: ${({ theme }) => theme.colors.white_aluminum};
    cursor: default;

    &:hover {
      background: transparent;
      color: ${({ theme }) => theme.colors.white_aluminum};
    }
  }

  &.selected {
    background: ${({ theme }) => theme.colors.royal_blue};
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      background: ${({ theme }) => theme.colors.royal_blue};
      color: ${({ theme }) => theme.colors.white};
    }
  }

  /* range */

  &.between {
    background: ${({ theme }) => theme.colors.royal_blue_opacity_01};
    border-radius: 0;
    color: ${({ theme }) => theme.colors.royal_blue};
  }

  &.start-selected {
    background: ${({ theme }) => theme.colors.royal_blue};
    color: ${({ theme }) => theme.colors.white};
    border-top-left-radius: 8px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 8px;

    &:hover {
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.royal_blue};
    }
  }

  &.end-selected,
  &.end-hover {
    background: ${({ theme }) => theme.colors.royal_blue};
    color: ${({ theme }) => theme.colors.white};
    border-top-left-radius: 0;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 0;
  }

  &.end-selected {
    &:hover {
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.royal_blue};
    }
  }

  &.end-hover {
    cursor: pointer;
  }
`;

export { Cell };
