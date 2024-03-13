import { styled } from 'styled-components';

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
    background: rgba(47, 128, 237, 0.1);
    border-radius: 8px;
  }
`;

const PrevMonthButton = styled(Button)`
  padding: 0.3em;
`;

const NextMonthButton = styled(PrevMonthButton)`
  padding: 0.3em;
`;

const Svg = styled.svg`
  width: 1.4em;
  height: 1.4em;
  color: #000000;
  vertical-align: bottom;

  ${NextMonthButton} & {
    transform: rotate(180deg);
  }
`;

export { Button, NextMonthButton, PrevMonthButton, Svg, Wrapper };