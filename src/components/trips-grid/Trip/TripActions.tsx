'use client'

import { LinkButton } from "@/components/ui/Buttons/LinkButton/";
import { deleteTrip } from "@/lib/services/api/trips";
import { FC, useContext } from "react";
import { styled } from "styled-components";
import { GridContext } from "../Grid";
import TripContext from "./TripContext";

type TripActionsProps = {
    link: string;
}

const ActionsRoot = styled.div`
    display: flex;
    justify-content: space-between;
`

const ActionsContainer = styled.div`
    flex: 0 0 50%;
    display: flex;
    justify-content: flex-end;
    * {
        margin-right: 16px;
    }
    :last-child {
        margin-right: 0;
    }
`

const TripActions: FC<TripActionsProps> = ({ link }) => {
    const { api } = useContext(TripContext)
    const { handleDetails, handleEdit } = api
    const { trip } = useContext(TripContext)
    const { setFilters } = useContext(GridContext)

    const handleOpenDetails = () => {
        handleDetails()
    }

    const handleOpenEdit = () => {
        handleEdit()
    }

    const handleDelete = async (id: number) => {
        if (id) {
            const response = await deleteTrip(id)
            if (response) {
                setFilters(prevFilters => ({ ...prevFilters, id: id }));
            }
        }
    }

    return (
        <ActionsRoot>
            <LinkButton onClick={handleOpenDetails} variant={'outlined'}>See trip details</LinkButton>
            <ActionsContainer>
                <LinkButton onClick={handleOpenEdit} variant={'outlined'}>Edit</LinkButton>
                <LinkButton onClick={() => handleDelete(trip.id)} variant={"error"}>Delete</LinkButton>
            </ActionsContainer>
        </ActionsRoot >
    )
}

export default TripActions;  