import { styled } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const Cell = styled.div`
  width: 2.4em;
  height: 2.4em;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  cursor: default;
`;

export { Cell, Wrapper };
