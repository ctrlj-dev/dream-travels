import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import TripForm from '../TripForm';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/lib/theme';
import { createTrip, editTrip } from '@/lib/services/api/trips';
import { TripInput } from '@/lib/services/mappers/types';
import { Status } from '@/lib/services/providers/types';

// Mock the API functions
jest.mock('@/lib/services/api/trips', () => ({
    createTrip: jest.fn(),
    editTrip: jest.fn(),
}));

const mockCreateTrip = createTrip as jest.MockedFunction<typeof createTrip>;
const mockEditTrip = editTrip as jest.MockedFunction<typeof editTrip>;

const defaultValues: TripInput = {
    title: 'Test Trip',
    introduction: 'Introduction text',
    description: 'Description text',
    photo_url: 'http://example.com/image.jpg',
    itinerary: []
};

describe('TripForm', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render and handle input changes', () => {
        render(
            <ThemeProvider theme={theme}>
                <TripForm defaultValues={defaultValues} mode="create" />
            </ThemeProvider>
        );

        // Check if inputs render correctly
        expect(screen.getByPlaceholderText('Italy')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('From Rome to Venice...')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Discover the wonders of the Roman empire...')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Image URL')).toBeInTheDocument();

        // Simulate input change
        fireEvent.change(screen.getByPlaceholderText('Italy'), { target: { value: 'Updated Trip' } });
        fireEvent.change(screen.getByPlaceholderText('From Rome to Venice...'), { target: { value: 'Updated Introduction' } });
        fireEvent.change(screen.getByPlaceholderText('Discover the wonders of the Roman empire...'), { target: { value: 'Updated Description' } });
        fireEvent.change(screen.getByPlaceholderText('Image URL'), { target: { value: 'http://example.com/updated.jpg' } });

        // Check input values
        expect(screen.getByPlaceholderText('Italy')).toHaveValue('Updated Trip');
        expect(screen.getByPlaceholderText('From Rome to Venice...')).toHaveValue('Updated Introduction');
        expect(screen.getByPlaceholderText('Discover the wonders of the Roman empire...')).toHaveValue('Updated Description');
        expect(screen.getByPlaceholderText('Image URL')).toHaveValue('http://example.com/updated.jpg');
    });

    it('should handle form submission for create mode', async () => {
        mockCreateTrip.mockResolvedValueOnce(true);

        render(
            <ThemeProvider theme={theme}>
                <TripForm defaultValues={defaultValues} mode="create" />
            </ThemeProvider>
        );

        // Simulate form submission
        fireEvent.click(screen.getByText('Save'));

        await waitFor(() => {
            expect(mockCreateTrip).toHaveBeenCalledWith(defaultValues);
        });
    });

    it('should handle form submission for edit mode', async () => {
        mockEditTrip.mockResolvedValueOnce(true);

        render(
            <ThemeProvider theme={theme}>
                <TripForm defaultValues={defaultValues} mode="edit" />
            </ThemeProvider>
        );

        // Simulate form submission
        fireEvent.click(screen.getByText('Save'));

        await waitFor(() => {
            expect(mockEditTrip).toHaveBeenCalledWith(defaultValues);
        });
    });

    it('should show errors for invalid inputs', async () => {
        render(
            <ThemeProvider theme={theme}>
                <TripForm defaultValues={{}} mode="create" />
            </ThemeProvider>
        );

        // Simulate form submission
        fireEvent.click(screen.getByText('Save'));

        // Wait for validation messages to appear
        await waitFor(() => {
            expect(screen.getByText('Name is required')).toBeInTheDocument();
            expect(screen.getByText('Introduction is required')).toBeInTheDocument();
            expect(screen.getByText('Description is required')).toBeInTheDocument();
            expect(screen.getByText('Image is required')).toBeInTheDocument();
        });
    });
});
