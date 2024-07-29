'use client'

import useSearchTrips from '@/lib/hooks/useSearchTrips';
import { Trip } from '@/lib/services/mappers/types';
import { Status } from '@/lib/services/providers/types';
import React, { Dispatch, FC, PropsWithChildren, SetStateAction, useEffect, useMemo, useState } from 'react';

export type TripsFilters = {
    search: string;
    status?: Status;
    id?: number;
};

export const DefaultValues = {
    search: '',
}

export type GridContextValue = {
    filters: TripsFilters,
    setFilters: Dispatch<SetStateAction<TripsFilters>>,
    setTrips: Dispatch<SetStateAction<Trip[]>>,
    trips: Trip[]
}

export const GridContext = React.createContext<GridContextValue>({
    filters: DefaultValues,
    setFilters: () => { },
    setTrips: () => { },
    trips: [],

})

type GridWrapperProps = PropsWithChildren & {
    data: Trip[]
};

export const GridWrapper: FC<GridWrapperProps> = ({ data, children }) => {
    const [filters, setFilters] = useState<TripsFilters>(DefaultValues);
    const { trips, setTrips } = useSearchTrips(filters, data)

    useEffect(() => {
        if (filters.id) {
            setFilters(prevFilters => ({ ...prevFilters, id: undefined }));
        }
    }, [filters.status, filters.search])

    const state: GridContextValue = useMemo(() => {
        return {
            filters,
            setFilters,
            setTrips,
            trips,
        };
    }, [trips, filters]);

    return <GridContext.Provider value={state}>{children}</GridContext.Provider>;
};

export default GridContext;
