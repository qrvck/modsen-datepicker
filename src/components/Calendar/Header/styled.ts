import { styled } from 'styled-components';

import DoubleArrow from '../../../assets/icons/doubleArrow.svg';

const Wrapper = styled.div<{ $center: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-content: ${({ $center }) => ($center ? 'center' : 'space-between')};

  padding: 0.1em 0;
`;

const Button = styled.button`
  padding: 0.5em;
  font-weight: 600;
  cursor: pointer;
  border: none;
  background-color: transparent;

  &:hover {
    background: ${({ theme }) => theme.colors.royal_blue_opacity_01};
    border-radius: ${({ theme }) => theme.sizes.borderRadius.sm};
  }
`;

const PrevMonthButton = styled(Button)`
  padding: 0.3em;
`;

const NextMonthButton = styled(PrevMonthButton)`
  padding: 0.3em;
`;

const Icon = styled(DoubleArrow)`
  width: 1.4em;
  height: 1.4em;
  color: ${({ theme }) => theme.colors.black};
  vertical-align: bottom;

  ${NextMonthButton} & {
    transform: rotate(180deg);
  }
`;

export { Button, Icon, NextMonthButton, PrevMonthButton, Wrapper };
