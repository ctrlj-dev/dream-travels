import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Textarea from '../Textarea';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/lib/theme';

describe('Textarea component', () => {
    it('should render the textarea with the provided height', () => {
        render(
            <ThemeProvider theme={theme}>
                <Textarea height="100px" placeholder="Type here..." />
            </ThemeProvider>
        );

        const textareaElement = screen.getByPlaceholderText('Type here...');
        expect(textareaElement).toBeInTheDocument();
        expect(textareaElement).toHaveStyle('height: 100px');
    });

    it('should allow typing into the textarea', async () => {
        render(
            <ThemeProvider theme={theme}>
                <Textarea placeholder="Type here..." />
            </ThemeProvider>
        );

        const textareaElement = screen.getByPlaceholderText('Type here...');
        await userEvent.type(textareaElement, 'Hello World');

        expect(textareaElement).toHaveValue('Hello World');
    });
});
