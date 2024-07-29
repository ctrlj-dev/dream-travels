'use client'

import { Modal } from "@/components/ui/Modal";
import { tripToTripInput } from "@/lib/services/mappers/trips.mapper";
import { FC, useContext, useEffect } from "react";
import { TripDetails } from "../TripDetails";
import { TripForm } from "../TripForm";
import TripFormHeader from "../TripForm/TripFormHeader";
import TripContext from "./TripContext";

type TripModalProps = {
    isOpen: boolean,
}



const TripModal: FC<TripModalProps> = ({ isOpen }) => {
    const { state, api, trip } = useContext(TripContext)
    const { isEdit, isDetails, isDelete } = state;
    const { handleReset } = api
    const editValues = tripToTripInput(trip)

    const FormTitle = () => {
        let title = 'Form'
        if (isEdit) {
            title = 'Edit Trip'
        }

        if (isDelete) {
            title = 'Delete Trip'
        }
        return title;
    }

    return (
        <Modal isOpen={isOpen} header={!isDetails && <TripFormHeader title={FormTitle()} />} onClose={handleReset} >
            {isDetails && <TripDetails />}
            {isEdit && <TripForm defaultValues={editValues} mode="edit" />}
        </Modal >
    )
}

export default TripModal