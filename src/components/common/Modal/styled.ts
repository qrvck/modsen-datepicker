import { styled } from 'styled-components';

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: 10;
  background-color: rgba(0, 0, 0, 0.85);
`;

const Window = styled.div`
  position: relative;
  margin: 25px;
  padding: 25px;
  background-color: white;
  border-radius: 8px;
  border: 1px solid #e1e1e1;

  /* @media (${({ theme }) => theme.media.medium}) {
    margin: 35px;
  } */
`;

export { Background, Window };
