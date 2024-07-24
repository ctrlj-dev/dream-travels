import { render, screen, fireEvent } from '@testing-library/react';
import TripsFiltersFinder from '../TripsFiltersFinder';
import { GridContext } from '../../Grid';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/lib/theme';
import { sampleTrips } from '../../Grid/__test__/__mocks__/Trips';

const mockSetFilters = jest.fn();

const mockContextValue = {
    trips: sampleTrips,
    filters: { search: '' },
    setFilters: mockSetFilters,
};

describe('TripsFiltersFinder', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render SearchBar and handle input changes and submit', () => {
        render(
            <ThemeProvider theme={theme}>
                <GridContext.Provider value={mockContextValue}>
                    <TripsFiltersFinder />
                </GridContext.Provider>
            </ThemeProvider>
        );

        const searchBar = screen.getByPlaceholderText('Search trips');
        expect(searchBar).toBeInTheDocument();

        fireEvent.change(searchBar, { target: { value: 'Paris' } });
        expect(searchBar).toHaveValue('Paris');

        fireEvent.click(screen.getByText('Search'));

        expect(mockSetFilters).toHaveBeenCalledWith({ search: 'Paris' });
    });
});
