import '@testing-library/jest-dom';

import { createFullMonth } from '../../../src/utils/create/createFullMonth';
import { DATE_VALUE, FULL_MONTH_RESULT } from './createFullMonth.test.mock';

test('should correctly create a full month object', () => {
  const fullMonth = createFullMonth(DATE_VALUE);
  expect(fullMonth).toStrictEqual(FULL_MONTH_RESULT);
});
