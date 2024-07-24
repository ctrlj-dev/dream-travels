import { render, screen, fireEvent } from '@testing-library/react';
import { GridContext } from '../../Grid/GridContext';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/lib/theme';
import { Status } from '@/lib/services/providers/types';
import TripsFiltersTab from '../TripsFiltersTabs';
import { sampleTrips } from '../../Grid/__test__/__mocks__/Trips';

// Mock the GridContext values
const mockSetFilters = jest.fn();

const mockContextValue = {
    trips: sampleTrips,
    filters: { search: '', status: undefined },
    setFilters: mockSetFilters,
};

describe('TripsFiltersTab', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render tabs and handle clicks correctly', () => {
        render(
            <ThemeProvider theme={theme}>
                <GridContext.Provider value={mockContextValue}>
                    <TripsFiltersTab />
                </GridContext.Provider>
            </ThemeProvider>
        );

        expect(screen.getByText('All')).toBeInTheDocument();
        expect(screen.getByText('Upcoming')).toBeInTheDocument();
        expect(screen.getByText('Completed')).toBeInTheDocument();

        fireEvent.click(screen.getByText('Upcoming'));
        expect(mockSetFilters).toHaveBeenCalledWith({ search: '', status: Status.TODO });

        fireEvent.click(screen.getByText('Completed'));
        expect(mockSetFilters).toHaveBeenCalledWith({ search: '', status: Status.DONE });

        fireEvent.click(screen.getByText('All'));
        expect(mockSetFilters).toHaveBeenCalledWith({ search: '', status: undefined });
    });
});
