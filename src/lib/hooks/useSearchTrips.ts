import { useEffect, useState } from 'react';
import { deleteTrip, filtersTrip, searchTrips } from '@/components/trips-grid/TripsFilters';
import { Trip } from '../services/mappers/types';
import { TripsFilters } from '@/components/trips-grid/Grid/GridContext';

const useSearchTrips = (filters: TripsFilters, data: Trip[]) => {
  const [trips, setTrips] = useState<Trip[]>(data);
  const { search, status, id } = filters;

  useEffect(() => {
    let filteredTrips = data;

    /*     if (id) {
      filteredTrips = deleteTrip(id, trips);
    } */

    if (search) {
      filteredTrips = searchTrips(search, filteredTrips);
    }

    if (status) {
      filteredTrips = filtersTrip(status, filteredTrips);
    }

    setTrips(filteredTrips);
  }, [search, status, data, trips]);

  return { trips, setTrips };
};

export default useSearchTrips;
