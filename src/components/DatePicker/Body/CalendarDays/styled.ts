import { styled } from 'styled-components';

const WeekRow = styled.div`
  display: flex;
`;

const DayCell = styled.div`
  width: 2em;
  height: 2em;

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

export { DayCell, WeekRow };
