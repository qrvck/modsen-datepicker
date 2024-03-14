import { styled } from 'styled-components';

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 10;
`;

const InnerBackground = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.85);
`;

const Window = styled.div`
  position: relative;

  max-width: 550px;
  width: 100%;
  margin: 1em;
  padding: 1em;

  background-color: white;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.sm};
  border: 1px solid #e1e1e1;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0.3em;
  right: 0.3em;

  width: 1.8em;
  height: 1.8em;
  padding: 0;

  border: none;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.sm};
  background-color: ${({ theme }) => theme.colors.royalBlue};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.royalBlue};
    background: rgba(47, 128, 237, 0.1);
  }
`;

export { Background, CloseButton, InnerBackground, Window };
