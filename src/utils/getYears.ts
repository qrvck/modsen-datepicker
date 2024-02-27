import { MAX_YEAR, MIN_YEAR } from '../constants';

function getYears() {
  const years = [];

  for (let i = MIN_YEAR; i <= MAX_YEAR; i++) {
    years.push(i);
  }

  return years;
}

export { getYears };
