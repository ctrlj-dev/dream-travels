import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '../Modal';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/lib/theme';

describe('Modal component', () => {
    const renderModal = (isOpen: boolean) => {
        render(
            <ThemeProvider theme={theme}>
                <Modal isOpen={isOpen} onClose={jest.fn()}>
                    <div>Modal Content</div>
                </Modal>
            </ThemeProvider>
        );
    };

    it('should not render the modal when isOpen is false', () => {
        renderModal(false);
        expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();
    });

    it('should render the modal when isOpen is true', () => {
        renderModal(true);
        expect(screen.getByText('Modal Content')).toBeInTheDocument();
    });

    it('should call onClose when the close button is clicked', () => {
        const handleClose = jest.fn();
        render(
            <ThemeProvider theme={theme}>
                <Modal isOpen={true} onClose={handleClose}>
                    <div>Modal Content</div>
                </Modal>
            </ThemeProvider>
        );

        const closeButton = screen.getByRole('button');
        fireEvent.click(closeButton);
        expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('should close the modal when clicking on the overlay', () => {
        const handleClose = jest.fn();
        render(
            <ThemeProvider theme={theme}>
                <Modal isOpen={true} onClose={handleClose}>
                    <div>Modal Content</div>
                </Modal>
            </ThemeProvider>
        );

        const overlay = screen.getByTestId('modal-overlay');
        fireEvent.click(overlay);
        expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('should not close the modal when clicking inside the container', () => {
        const handleClose = jest.fn();
        render(
            <ThemeProvider theme={theme}>
                <Modal isOpen={true} onClose={handleClose}>
                    <div>Modal Content</div>
                </Modal>
            </ThemeProvider>
        );

        const container = screen.getByTestId('modal-container');
        fireEvent.click(container);
        expect(handleClose).not.toHaveBeenCalled();
    });
});
