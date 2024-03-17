import React, { useState } from 'react';

import { DatePicker } from '../index';
import { IStoryDatePicker } from './types';

function WithSingleSelect(props: IStoryDatePicker) {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <DatePicker singleValue={value} onSingleChange={(v: Date | null) => setValue(v)} {...props} />
  );
}

export { WithSingleSelect };
