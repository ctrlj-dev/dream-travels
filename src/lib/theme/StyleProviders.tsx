'use client';

import { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from './Registry';
import theme from './theme';

const Providers: FC<PropsWithChildren> = ({ children }) => {
    return (
        <StyledComponentsRegistry>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </StyledComponentsRegistry>
    );
};

export default Providers;
