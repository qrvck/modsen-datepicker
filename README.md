## Simple and small DataPicker
(possibly with bugs 🐞)

### it is a preview:
![DatePicker](https://github.com/qrvck/modsen-datepicker/raw/develop/preview.png)

### it is some example:

```javascript
import { DatePicker } from 'modsen-datepicker-by-vlad-k';
import React, { useState } from 'react';

function ExamplePage() {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <section>
      <DatePicker singleValue={value} onSingleChange={(e) => setValue(e)} />
    </section>
  );
}

export { ExamplePage };
```

p.s. oh yeah, it's for React