import '@testing-library/jest-dom';

import { getMonthNames } from '../../../src/utils/get/getMonthNames';
import { MONTH_NAMES_RESULT } from './getMonthNames.test.mock';

test('should correctly create a month names array', () => {
  const monthNames = getMonthNames();
  expect(monthNames).toStrictEqual(MONTH_NAMES_RESULT);
});
