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
  box-sizing: border-box;
  border-radius: 8px;

  cursor: pointer;

  &:hover {
    background-color: rgba(47, 128, 237, 0.1);
  }

  &.current {
    border: 0.2em solid orange;
  }
`;

export { MonthCell, Wrapper };
