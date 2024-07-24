import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import NumberInput from '../NumberInput';
import { theme } from '@/lib/theme';

describe('NumberInput component', () => {
    it('should render the input element', () => {
        render(
            <ThemeProvider theme={theme}>
                <NumberInput onIconClick={() => { }} placeholder="Enter number" />
            </ThemeProvider>
        );
        const inputElement = screen.getByPlaceholderText('Enter number');
        expect(inputElement).toBeInTheDocument();
    });

    it('should accept numeric input', async () => {
        render(
            <ThemeProvider theme={theme}>
                <NumberInput onIconClick={() => { }} placeholder="Enter number" />
            </ThemeProvider>
        );
        const inputElement = screen.getByPlaceholderText('Enter number');
        await userEvent.type(inputElement, '123');
        expect(inputElement).toHaveValue('123');
    });

    it('should prevent non-numeric input', async () => {
        render(
            <ThemeProvider theme={theme}>
                <NumberInput onIconClick={() => { }} placeholder="Enter number" />
            </ThemeProvider>
        );
        const inputElement = screen.getByPlaceholderText('Enter number');
        await userEvent.type(inputElement, 'abc');
        expect(inputElement).toHaveValue('');
    });

    it('should call the onIconClick handler when icon is clicked', () => {
        const handleIconClick = jest.fn();
        render(
            <ThemeProvider theme={theme}>
                <NumberInput onIconClick={handleIconClick} placeholder="Enter number" />
            </ThemeProvider>
        );
        const iconElement = screen.getByRole('button');
        fireEvent.click(iconElement);
        expect(handleIconClick).toHaveBeenCalledTimes(1);
    });
});
