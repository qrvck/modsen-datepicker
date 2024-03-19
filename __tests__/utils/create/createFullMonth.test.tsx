import '@testing-library/jest-dom';

import { createFullMonth } from '../../../src/utils/create/createFullMonth';
import { DATE_RESULT, DATE_VALUE } from './createFullMonth.test.mock';

test('should correctly create a full month object', () => {
  const date = createFullMonth(DATE_VALUE);
  // console.log(date);
  expect(date).toStrictEqual(DATE_RESULT);
});
