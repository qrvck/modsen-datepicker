import { styled } from 'styled-components';

const Wrapper = styled.div`
  width: 18.2em;
  margin: auto;
`;

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

  &:disabled {
    cursor: default;
  }
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

  ${ClearButton}:disabled & {
    color: #aaaaaa;
  }
`;

const Hint = styled.p`
  margin: 0.1em 0 0 3.5em;
  font-size: 0.7em;
  color: #aaaaaa;
`;

export { CalendarButton, ClearButton, Hint, Input, InputWrapper, Svg, Wrapper };
