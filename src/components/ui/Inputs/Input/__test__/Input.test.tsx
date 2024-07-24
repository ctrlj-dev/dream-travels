import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/lib/theme';
import Input from '../Input';

describe('Input component', () => {
    it('should render the input element', () => {
        render(
            <ThemeProvider theme={theme}>
                <Input placeholder="Enter text" />
            </ThemeProvider>
        );
        const inputElement = screen.getByPlaceholderText('Enter text');
        expect(inputElement).toBeInTheDocument();
    });

    it('should accept and display user input', async () => {
        render(
            <ThemeProvider theme={theme}>
                <Input placeholder="Enter text" />
            </ThemeProvider>
        );
        const inputElement = screen.getByPlaceholderText('Enter text');
        await userEvent.type(inputElement, 'Hello World');
        expect(inputElement).toHaveValue('Hello World');
    });

    it('should call the onChange handler when text is entered', async () => {
        const handleChange = jest.fn();
        render(
            <ThemeProvider theme={theme}>
                <Input placeholder="Enter text" onChange={handleChange} />
            </ThemeProvider>
        );
        const inputElement = screen.getByPlaceholderText('Enter text');
        await userEvent.type(inputElement, 'Hello');
        expect(handleChange).toHaveBeenCalledTimes(5);
    });
});
