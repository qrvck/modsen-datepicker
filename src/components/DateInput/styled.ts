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

const Input = styled.input.attrs({ placeholder: 'Choose Date' })<{ $isError: boolean }>`
  width: 13.4em;
  padding: 0.7em 2.4em;

  font: inherit;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.sm};
  border: 1px solid;
  border-color: ${({ $isError, theme }) =>
    $isError ? theme.colors.red : theme.colors.gainborough};
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
  color: ${({ theme }) => theme.colors.black};
  vertical-align: bottom;

  ${CalendarButton}:hover &,
  ${ClearButton}:hover & {
    color: ${({ theme }) => theme.colors.royal_blue};
  }

  ${ClearButton}:disabled & {
    color: ${({ theme }) => theme.colors.white_aluminum};
  }
`;

const Hint = styled.p`
  margin: 0.1em 0 0 3.5em;
  font-size: 0.7em;
  color: ${({ theme }) => theme.colors.white_aluminum};
`;

export { CalendarButton, ClearButton, Hint, Input, InputWrapper, Svg, Wrapper };
