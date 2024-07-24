import { theme } from '@/lib/theme';
import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import SearchBar from '../SearchBar';

describe('SearchBar component', () => {
    it('should render with the correct placeholder text', () => {
        render(
            <ThemeProvider theme={theme}>
                <SearchBar rootClassName="test-class" onSubmit={() => { }} placeholder="Search trips" />
            </ThemeProvider>
        );
        const inputElement = screen.getByPlaceholderText('Search trips');
        expect(inputElement).toBeInTheDocument();
    });

    it('should call onSubmit when Enter key is pressed', () => {
        const handleSubmit = jest.fn();
        render(
            <ThemeProvider theme={theme}>
                <SearchBar rootClassName="test-class" onSubmit={handleSubmit} />
            </ThemeProvider>
        );
        const inputElement = screen.getByPlaceholderText('Search trips');
        fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });
        expect(handleSubmit).toHaveBeenCalled();
    });
});
