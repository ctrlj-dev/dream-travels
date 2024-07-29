'use client'

import React, { Dispatch, FC, PropsWithChildren, SetStateAction, useEffect, useMemo, useState } from 'react';
import { Trip } from '@/lib/services/mappers/types';
import { Status } from '@/lib/services/providers/types';
import { searchTrips } from '../TripsFilters';
import { filtersTrip } from '../TripsFilters/trips-filters.utils';

export type TripsFilters = {
    search: string;
    status?: Status;
    id?: number;
};

export const DefaultValues = {
    search: '',
};

export type GridContextValue = {
    filters: TripsFilters,
    setFilters: Dispatch<SetStateAction<TripsFilters>>,
    setTrips: Dispatch<SetStateAction<Trip[]>>,
    trips: Trip[]
};

export const GridContext = React.createContext<GridContextValue>({
    filters: DefaultValues,
    setFilters: () => { },
    setTrips: () => { },
    trips: [],
});

type GridWrapperProps = PropsWithChildren & {
    data: Trip[]
};

export const GridWrapper: FC<GridWrapperProps> = ({ data, children }) => {
    const [filters, setFilters] = useState<TripsFilters>(DefaultValues);
    const [unfilteredTrips, setUnfilteredTrips] = useState<Trip[]>(data);
    const [filteredTrips, setFilteredTrips] = useState<Trip[]>(data);

    // Update the unfiltered trips state whenever data changes
    useEffect(() => {
        setUnfilteredTrips(data);
        setFilteredTrips(data);
    }, [data]);

    // Filter trips based on current filters
    useEffect(() => {
        const { search, status } = filters;

        // Convert search value to lowercase for case-insensitive matching
        const searchValue = search.toLowerCase();

        // Filter trips based on search and status using helper functions
        const updatedFilteredTrips = unfilteredTrips.filter((trip) => {
            return searchTrips(trip, searchValue) && filtersTrip(trip, status);
        });

        setFilteredTrips(updatedFilteredTrips);
    }, [filters, unfilteredTrips]);

    const state: GridContextValue = useMemo(() => {
        return {
            filters,
            setFilters,
            setTrips: (newTrips) => setUnfilteredTrips(newTrips),
            trips: filteredTrips,
        };
    }, [filteredTrips, filters, unfilteredTrips]);

    return <GridContext.Provider value={state}>{children}</GridContext.Provider>;
};

export default GridContext;
