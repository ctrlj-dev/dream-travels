import React from 'react';
import { screen, fireEvent, render } from '@testing-library/react';
import IconButton from '../IconButton';
import { Check } from '@/components/ui/Icons';
import { ThemeProvider } from 'styled-components';
import theme from '@/lib/theme/theme';

describe('IconButton component', () => {
    it('should call the onClick handler when clicked', () => {
        const handleClick = jest.fn();
        const icon = <Check />
        render(
            <ThemeProvider theme={theme}>
                <IconButton icon={icon} onClick={handleClick} />
            </ThemeProvider>)


        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
