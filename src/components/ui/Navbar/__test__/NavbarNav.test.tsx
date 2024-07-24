import { render, screen, fireEvent } from '@testing-library/react';
import NavbarNav from '../NavbarNav';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/lib/theme';
import { useGlobalModalStore } from '@/lib/store';

jest.mock('@/lib/store', () => ({
    useGlobalModalStore: jest.fn()
}));

const mockOpenModal = jest.fn();
const mockCloseModal = jest.fn();

const setupMockStore = (isOpen: boolean) => {
    (useGlobalModalStore as jest.Mock).mockReturnValue({
        isOpen,
        openModal: mockOpenModal,
        closeModal: mockCloseModal,
    });
};

const renderNavbarNav = (isOpen: boolean) => {
    setupMockStore(isOpen);
    render(
        <ThemeProvider theme={theme}>
            <NavbarNav />
        </ThemeProvider>
    );
};

describe('NavbarNav component', () => {
    it('should render the NavbarNav component', () => {
        renderNavbarNav(false);
        expect(screen.getByText('Create new trip')).toBeInTheDocument();
    });

    it('should call openModal when the button is clicked', () => {
        renderNavbarNav(false);
        fireEvent.click(screen.getByText('Create new trip'));
        expect(mockOpenModal).toHaveBeenCalled();
    });

    it('should show the modal when isOpen is true', () => {
        renderNavbarNav(true);
        expect(screen.getByText('Create a Trip')).toBeInTheDocument();
        expect(screen.getByText('Create new trip')).toBeInTheDocument();
    });
});
