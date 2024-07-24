'use client'

import { FC } from 'react';
import { Button } from '../Buttons/Button';
import { useStore } from 'zustand';
import { useGlobalModalStore } from '@/lib/store';
import { Modal } from '../Modal';
import { TripForm } from '@/components/trips-grid/TripForm';
import TripFormHeader from '@/components/trips-grid/TripForm/TripFormHeader';

const NavbarNav: FC = () => {
    const { isOpen, closeModal, openModal } = useGlobalModalStore((state) => ({
        isOpen: state.isOpen,
        closeModal: state.closeModal,
        openModal: state.openModal,
    }));

    return (
        <>
            <Button onClick={() => openModal()} variant="secondary" size="medium">
                Create new trip
            </Button >
            <Modal isOpen={isOpen} header={<TripFormHeader title='Create a Trip' />} onClose={closeModal} >
                <TripForm />
            </Modal >
        </>
    );
};

export default NavbarNav;
