'use client'

import { Trip } from '@/lib/services/mappers/types';
import React, { Dispatch, FC, PropsWithChildren, SetStateAction, useMemo, useReducer, useState } from 'react';
import { TripActionState, TripActionType, TripApi, TripInitialState, tripReducer } from './trip.utils';

export type TripContextValue = {
    openDetails: boolean,
    setOpenDetails: Dispatch<SetStateAction<boolean>>
    state: TripActionState,
    api: TripApi,
    trip: Trip
}

export const TripContext = React.createContext<TripContextValue>({
    openDetails: false,
    setOpenDetails: () => { },
    state: {} as TripActionState,
    api: {} as TripApi,
    trip: {} as Trip,
} as TripContextValue)

type TripWrapperProps = PropsWithChildren<{ trip: Trip }>;

export const TripWrapper: FC<TripWrapperProps> = ({ trip, children }) => {
    const [openDetails, setOpenDetails] = useState<boolean>(false)
    const [state_, dispatch] = useReducer(tripReducer, TripInitialState)

    const api: TripApi = useMemo(() => {
        return {
            handleDetails() {
                dispatch({ type: TripActionType.OPEN_DETAILS })
            },
            handleEdit() {
                dispatch({ type: TripActionType.EDIT })
            },
            handleCreate() {
                dispatch({ type: TripActionType.CREATE })
            },
            handleDelete() {
                dispatch({ type: TripActionType.DELETE })
            },
            handleReset() {
                dispatch({ type: TripActionType.RESET_STATE })
            },
        }

    }, [])

    const state: TripContextValue = useMemo(() => {
        return {
            openDetails,
            setOpenDetails,
            state: state_,
            api,
            trip,
        };
    }, [trip, state_, api, openDetails]);

    return <TripContext.Provider value={state}>{children}</TripContext.Provider>;
};

export default TripContext;
