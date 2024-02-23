import React from 'react';

import { ButtonStyled } from './styled';
import { IButton } from './types';

const Button = ({ variant = 'primary', label, onClick }: IButton) => {
  return (
    <ButtonStyled onClick={onClick} $variant={variant}>
      {label}
    </ButtonStyled>
  );
};

export { Button };
