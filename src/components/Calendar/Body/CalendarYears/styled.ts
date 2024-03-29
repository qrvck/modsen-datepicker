import { styled } from 'styled-components';

const Wrapper = styled.div`
  height: 14.4em;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  overflow-y: scroll;
  font-size: 1em;
`;

const YearCell = styled.div`
  width: calc(4.2em - 5px);
  height: 2.8em;

  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.sm};
  color: ${({ theme }) => theme.colors.black};

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.royal_blue_opacity_01};
  }

  &.current {
    border: 0.2em solid orange;
  }
`;

export { Wrapper, YearCell };
