import React, { ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { theme } from '@/theme/';

function ThemeProvider({ children }: { children: ReactNode }) {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
}

export { ThemeProvider };
