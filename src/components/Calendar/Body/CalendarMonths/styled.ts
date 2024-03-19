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
  color: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.sm};

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.royal_blue_opacity_01};
  }

  &.current {
    border: 0.2em solid orange;
  }
`;

export { MonthCell, Wrapper };
