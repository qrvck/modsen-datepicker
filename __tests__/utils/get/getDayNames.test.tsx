import '@testing-library/jest-dom';

import { getDayNames } from '../../../src/utils/get/getDayNames';
import { DAY_NAMES_MODAY_RESULT, DAY_NAMES_SUNDAY_RESULT } from './getDayNames.test.mock';

test('should correctly create a day names array with first day of week monday', () => {
  const dayNames = getDayNames('monday');
  expect(dayNames).toStrictEqual(DAY_NAMES_MODAY_RESULT);
});

test('should correctly create a day names array with first day of week sunday', () => {
  const dayNames = getDayNames('sunday');
  expect(dayNames).toStrictEqual(DAY_NAMES_SUNDAY_RESULT);
});
