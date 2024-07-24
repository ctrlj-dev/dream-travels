import React from 'react';
import { screen, fireEvent, render } from '@testing-library/react';
import Button from '../Button';
import { ThemeProvider } from 'styled-components';
import theme from '@/lib/theme/theme';

describe('Button component', () => {
    it('should render with the correct variant and size', () => {
        render(
            <ThemeProvider theme={theme}>
                <Button variant="primary" size="large">
                    Click me
                </Button>
            </ThemeProvider>
        );

        const buttonElement = screen.getByRole('button', { name: /click me/i });
        expect(buttonElement).toHaveStyleRule('background-color', '#121212');
        expect(buttonElement).toHaveStyleRule('color', 'white');
        expect(buttonElement).toHaveStyleRule('font-size', '16px');
        expect(buttonElement).toHaveStyleRule('line-height', '24px');
        expect(buttonElement).toHaveStyleRule('width', '160px');
    });

    it('should apply custom styles from sx prop', () => {
        const customStyles = { backgroundColor: 'red' };
        render(
            <ThemeProvider theme={theme}>
                <Button variant="primary" size="large" sx={customStyles}>
                    Click me
                </Button>,
            </ThemeProvider>
        );

        const buttonElement = screen.getByRole('button', { name: /click me/i });
        expect(buttonElement).toHaveStyleRule('background-color: red');
    });

    it('should call the onClick handler when clicked', () => {
        const handleClick = jest.fn();
        render(
            <ThemeProvider theme={theme}>
                <Button variant="primary" size="large" onClick={handleClick}>
                    Click me
                </Button>
            </ThemeProvider >

        );

        const buttonElement = screen.getByRole('button', { name: /click me/i });
        fireEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
