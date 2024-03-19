import 'jest-styled-components';
import '@testing-library/jest-dom';

import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { WithSingleSelect } from '../../../src/stories/WithSingleSelect';
import {
  CALENDAR_BUTTON_TEST_ID,
  DATE_INPUT_TEST_ID,
  EXPECTED_INPUT_VALUE,
  MOCK_SELECTED_DAY,
  MOCK_SELECTED_MONTH_NAME,
  MOCK_SELECTED_YEAR,
  MONTH_NAME_BUTTON_TEST_ID,
  YEAR_BUTTON_TEST_ID,
} from './DatePicker.test.mock';

describe('DatePicker(single)', () => {
  const DatePicker = <WithSingleSelect />;

  it('should display the correct date when selecting the corresponding one in the calendar', () => {
    const { getByTestId, getByText } = render(DatePicker);

    const calendarButton = getByTestId(CALENDAR_BUTTON_TEST_ID);
    fireEvent.click(calendarButton);

    const monthNameButton = getByTestId(MONTH_NAME_BUTTON_TEST_ID);
    fireEvent.click(monthNameButton);

    const month = getByText(MOCK_SELECTED_MONTH_NAME);
    fireEvent.click(month);

    const yearButton = getByTestId(YEAR_BUTTON_TEST_ID);
    fireEvent.click(yearButton);

    const year = getByText(MOCK_SELECTED_YEAR);
    fireEvent.click(year);

    const day = getByText(MOCK_SELECTED_DAY);
    fireEvent.click(day);

    const dateInput = getByTestId(DATE_INPUT_TEST_ID);

    expect(dateInput).toHaveValue(EXPECTED_INPUT_VALUE);
  });
});
