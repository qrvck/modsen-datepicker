import { styled } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MonthCell = styled.div`
  width: 5.6em;
  height: 3.6em;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
    background-color: rgba(47, 128, 237, 0.1);
  }

  &.current {
    background-color: orange;
  }
`;

export { MonthCell, Wrapper };
