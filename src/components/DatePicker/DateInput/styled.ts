import { styled } from 'styled-components';

const InputWrapper = styled.div`
  position: relative;

  width: 18.2em;
  margin: auto;
`;

const Input = styled.input.attrs({ placeholder: 'Choose Date' })`
  width: 13.4em;
  padding: 0.7em 2.4em;

  font: inherit;
  border-radius: 8px;
  border: 1px solid #dddddd;
`;

const CalendarButton = styled.button`
  position: absolute;
  top: 50%;
  left: 0.6em;
  transform: translateY(-50%);

  padding: 0.3em;

  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const ClearButton = styled(CalendarButton)`
  left: auto;
  right: 0.6em;
`;

const Svg = styled.svg`
  width: 1.2em;
  height: 1.2em;
  color: #000000;
  vertical-align: bottom;

  ${CalendarButton}:hover &,
  ${ClearButton}:hover & {
    color: #2f80ed;
  }
`;

export { CalendarButton, ClearButton, Input, InputWrapper, Svg };
