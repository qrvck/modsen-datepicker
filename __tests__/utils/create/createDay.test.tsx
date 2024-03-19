import '@testing-library/jest-dom';

import { createDay } from '../../../src/utils/create/createDay';
import { DATE_RESULT, DATE_VALUE } from './createDay.test.mock';

test('should correctly create a day object', () => {
  const date = createDay(DATE_VALUE);
  expect(date).toStrictEqual(DATE_RESULT);
});
