import { styled } from 'styled-components';

const Wrapper = styled.div`
  position: absolute;

  top: 3.5em;
  left: 0;

  display: flex;
  flex-direction: column;
  padding: 0.7em;
  width: 16.8em;

  border: 1px solid ${({ theme }) => theme.colors.gainborough2};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.sm};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 3px 10px 1px ${({ theme }) => theme.colors.gainborough};
`;

export { Wrapper };
