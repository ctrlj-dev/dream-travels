'use client'

import { FC, useContext } from "react";
import { Trip } from "../Trip";
import { TripWrapper } from "../Trip/TripContext";
import { GridContext } from './GridContext';
import GridNotFound from "./GridNotFound";
import GridRow from "./GridRow";
import { Modal } from "@/components/ui/Modal";
import { TripForm } from "../TripForm";
import { useGlobalModalStore } from "@/lib/store";
import TripFormHeader from "../TripForm/TripFormHeader";

const GridContent: FC = () => {
    const { trips } = useContext(GridContext)
    const { isOpen, closeModal } = useGlobalModalStore((state) => ({
        isOpen: state.isOpen,
        closeModal: state.closeModal,
    }));

    if (!trips || trips.length === 0) {
        return (
            <GridNotFound />
        )
    }

    return (
        <>
            {trips?.map(trip => (
                <GridRow key={`${trip.id}-{${trip.title}}`}>
                    <TripWrapper trip={trip}>
                        <Trip truncate />
                    </TripWrapper>
                </GridRow>
            ))
            }
            <Modal isOpen={isOpen} header={<TripFormHeader title='Create a Trip' />} onClose={closeModal} >
                <TripForm />
            </Modal >
        </ >

    )
}

export default GridContent