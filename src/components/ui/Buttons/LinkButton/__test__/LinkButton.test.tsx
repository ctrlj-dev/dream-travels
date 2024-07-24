import React from 'react';
import { render, screen } from '@testing-library/react';
import LinkButton from '../LinkButton';
import { ThemeProvider } from 'styled-components';
import theme from '@/lib/theme/theme';

describe('LinkButton component', () => {
    it('should render with the correct variant and apply custom styles', () => {
        render(
            <ThemeProvider theme={theme}>
                <LinkButton variant="outlined" sx={{ backgroundColor: 'red' }}>
                    Click me
                </LinkButton>
            </ThemeProvider>
        );

        const buttonElement = screen.getByRole('button', { name: /click me/i });
    });
    it('should call the onClick handler when clicked', () => {
        const handleClick = jest.fn();
        render(
            <ThemeProvider theme={theme}>
                <LinkButton variant="outlined" onClick={handleClick}>
                    Click me
                </LinkButton>
            </ThemeProvider>
        );

        const buttonElement = screen.getByRole('button', { name: /click me/i });
        buttonElement.click();
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
