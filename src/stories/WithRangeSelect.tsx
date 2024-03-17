import React, { useState } from 'react';

import { DatePicker } from '../index';
import { IStoryDatePicker } from './types';

function WithRangeSelect(props: IStoryDatePicker) {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);

  return (
    <DatePicker
      range={true}
      rangeValue={value}
      onRangeChange={(v: [Date | null, Date | null]) => setValue(v)}
      {...props}
    />
  );
}

export { WithRangeSelect };
