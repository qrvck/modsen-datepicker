import { styled } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.35em 0;
`;

const PrevMonthButton = styled.button`
  padding: 0.3em;
`;

const NextMonthButton = styled(PrevMonthButton)``;

const MontNameAndYearWrapper = styled.div`
  font-weight: 700;
`;

const MonthButton = styled.button``;

const YearButton = styled.button`
  margin-left: 0.3em;
`;

export {
  MonthButton,
  MontNameAndYearWrapper,
  NextMonthButton,
  PrevMonthButton,
  Wrapper,
  YearButton,
};
