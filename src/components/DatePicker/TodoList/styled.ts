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
  padding: 0.5em 1em;

  border: 1px solid #dddddd;
  border-radius: 8px;
  font: inherit;
`;

const AddButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;

const List = styled.ul`
  max-height: 60vh;
  overflow-y: auto;
`;

const Item = styled.li`
  position: relative;
  padding: 0.3em 0;

  overflow: hidden;

  &:nth-child(2n - 1) {
    background-color: #dddddd;
  }
`;

const RemoveButton = styled.button`
  display: none;

  ${Item}:hover & {
    position: absolute;
    right: 0;
    top: 0;
    display: block;
  }
`;

const HintMessage = styled.p`
  text-align: center;
  text-decoration: underline;
`;

export { AddButton, AddInput, AddInputWrapper, HintMessage, Item, List, RemoveButton, Title };
