import { styled } from 'styled-components';

const Title = styled.p`
  margin: 0;
  text-align: center;
`;

const AddInputWrapper = styled.div`
  position: relative;

  max-width: 300px;
  width: 100%;
  margin: auto;
  margin-top: 1em;
  display: flex;
`;

const AddInput = styled.input`
  width: 100%;
  padding: 0.5em 2.1em 0.5em 1em;

  border: 1px solid ${({ theme }) => theme.colors.gainborough};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.sm};
  font: inherit;
`;

const AddButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0.4em;

  padding: 0.3em;

  transform: translateY(-50%);
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const List = styled.ul`
  max-height: 60vh;

  overflow-y: auto;
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  position: relative;
  padding: 0.3em;

  overflow: hidden;

  &:nth-child(2n - 1) {
    background-color: ${({ theme }) => theme.colors.gainborough};
  }
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 0.1em;
  right: 0.1em;

  padding: 0;

  visibility: hidden;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  ${Item}:hover & {
    visibility: visible;
  }
`;

const HintMessage = styled.p`
  text-align: center;
  text-decoration: underline;
`;

const Svg = styled.svg`
  width: 1.7em;
  height: 1.7em;
  color: ${({ theme }) => theme.colors.black};
  vertical-align: bottom;

  ${AddButton}:hover &,
  ${RemoveButton}:hover & {
    color: ${({ theme }) => theme.colors.royalBlue};
  }
`;

export { AddButton, AddInput, AddInputWrapper, HintMessage, Item, List, RemoveButton, Svg, Title };
