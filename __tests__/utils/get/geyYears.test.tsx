import '@testing-library/jest-dom';

import { getYears } from '../../../src/utils/get/getYears';
import {
  FIRST_ELEMENT_INDEX,
  FIRST_YEAR,
  LAST_ELEMENT_INDEX,
  LAST_YEAR,
  YEAR_ARRAY_LENGTH,
} from './getYears.test.mock';

test('should correctly create a years array', () => {
  const years = getYears();
  expect(years).toHaveLength(YEAR_ARRAY_LENGTH);
  expect(years[FIRST_ELEMENT_INDEX]).toBe(FIRST_YEAR);
  expect(years[LAST_ELEMENT_INDEX]).toBe(LAST_YEAR);
});
