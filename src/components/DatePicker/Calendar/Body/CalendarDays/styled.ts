import { styled } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const DayCell = styled.div`
  width: 2.4em;
  height: 2.4em;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: default;

  &.current {
    background-color: orange;
  }

  &.outside {
    color: #aaa;
  }
`;

export { DayCell, Wrapper };
