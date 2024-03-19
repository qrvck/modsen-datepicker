import '@testing-library/jest-dom';

import { createDay } from '../../../src/utils/create/createDay';
import { DATE_VALUE, DAY_RESULT } from './createDay.test.mock';

test('should correctly create a day object', () => {
  const day = createDay(DATE_VALUE);
  expect(day).toStrictEqual(DAY_RESULT);
});
