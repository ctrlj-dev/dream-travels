import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../Hero';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/lib/theme';

describe('Hero component', () => {
    it('renders the title and description', () => {
        const title = 'Hero Title';
        const desc = 'Hero description';

        render(
            <ThemeProvider theme={theme} >
                <Hero title={title} desc={desc} />
            </ThemeProvider>
        );

        const titleElement = screen.getByRole('heading', { name: title });
        const descElement = screen.getByRole('heading', { name: desc });

        expect(titleElement).toBeInTheDocument();
        expect(descElement).toBeInTheDocument();
    });

    it('applies correct styles to title and description', () => {
        const title = 'Hero Title';
        const desc = 'Hero description';

        render(
            <ThemeProvider theme={theme} >
                <Hero title={title} desc={desc} />
            </ThemeProvider>
        );

        const titleElement = screen.getByRole('heading', { name: title });
        const descElement = screen.getByRole('heading', { name: desc });

        expect(titleElement).toHaveStyle('text-align: center');
        expect(titleElement).toHaveStyle('margin-top: 64px');
        expect(descElement).toHaveStyle('text-align: center');
        expect(descElement).toHaveStyle('margin-top: 8px');
    });
});
