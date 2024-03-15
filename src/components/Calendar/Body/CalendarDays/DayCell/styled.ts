import { styled } from 'styled-components';

const Cell = styled.button`
  width: 2.4em;
  height: 2.4em;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  font: inherit;
  border: none;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.sm};
  box-sizing: border-box;

  &.current {
    border: 0.2em solid orange;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.royal_blue_opacity_01};
    color: ${({ theme }) => theme.colors.royal_blue};
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

  /* weekend, holiday */

  &.weekend,
  &.holiday {
    color: ${({ theme }) => theme.colors.red};
  }

  /* todo */

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

  /* range */

  &.between {
    background: ${({ theme }) => theme.colors.royal_blue_opacity_01};
    border-radius: 0;
    color: ${({ theme }) => theme.colors.royal_blue};
  }

  &.start-selected {
    background: ${({ theme }) => theme.colors.royal_blue};
    color: ${({ theme }) => theme.colors.white};
    border-top-left-radius: ${({ theme }) => theme.sizes.borderRadius.sm};
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: ${({ theme }) => theme.sizes.borderRadius.sm};
  }

  &.end-selected,
  &.end-hover {
    background: ${({ theme }) => theme.colors.royal_blue};
    color: ${({ theme }) => theme.colors.white};
    border-top-left-radius: 0;
    border-top-right-radius: ${({ theme }) => theme.sizes.borderRadius.sm};
    border-bottom-right-radius: ${({ theme }) => theme.sizes.borderRadius.sm};
    border-bottom-left-radius: 0;
  }

  &.between:hover,
  &.start-selected:hover,
  &.end-selected:hover {
    border-radius: ${({ theme }) => theme.sizes.borderRadius.sm};
  }
`;

export { Cell };
