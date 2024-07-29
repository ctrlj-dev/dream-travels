'use client'

import { FC } from 'react';
import { Button } from '../Buttons/Button';
import { useStore } from 'zustand';
import { useGlobalModalStore } from '@/lib/store';
import { Modal } from '../Modal';
import { TripForm } from '@/components/trips-grid/TripForm';
import TripFormHeader from '@/components/trips-grid/TripForm/TripFormHeader';

const NavbarNav: FC = () => {
    const { openModal } = useGlobalModalStore((state) => ({
        openModal: state.openModal,
    }));

    return (
        <>
            <Button onClick={() => openModal()} variant="secondary" size="medium">
                Create new trip
            </Button >
        </>
    );
};

export default NavbarNav;
