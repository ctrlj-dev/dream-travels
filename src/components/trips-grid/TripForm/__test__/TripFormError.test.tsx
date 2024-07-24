import { render, screen } from '@testing-library/react';
import TripFormError from '../TripFormError';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/lib/theme';

describe('TripFormError', () => {
    it('should render the error message when provided', () => {
        render(
            <ThemeProvider theme={theme}>
                <TripFormError message="This is an error message" />
            </ThemeProvider>
        );

        // Check if the error message is rendered
        expect(screen.getByText('This is an error message')).toBeInTheDocument();
    });

    it('should not render anything when no message is provided', () => {
        render(
            <ThemeProvider theme={theme}>
                <TripFormError message={undefined} />
            </ThemeProvider>
        );

        // Check if the component does not render anything
        expect(screen.queryByText('This is an error message')).toBeNull();
    });
});
