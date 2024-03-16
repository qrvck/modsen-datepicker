import { ChangeEvent } from 'react';

import { withRangeSelect, withSingleSelect } from './hoc';
import { Root } from './Root';

interface IRootProps {
  inputValue: string;
  isError: boolean;
  hintText: string;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickClearButton: () => void;
}

type IComponentHOC =
  | typeof Root
  | ReturnType<typeof withSingleSelect>
  | ReturnType<typeof withRangeSelect>;

export type { IComponentHOC, IRootProps };
