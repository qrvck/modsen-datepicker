import '@testing-library/jest-dom';

import { createDate } from '../../../src/utils/create/createDate';
import { DATE_RESULT, DATE_VALUE } from './createDate.test.mock';

test('should correctly create a date object', () => {
  const date = createDate(DATE_VALUE);
  expect(date).toStrictEqual(DATE_RESULT);
});
