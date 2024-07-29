import { Trip } from '@/lib/services/mappers/types';
import { Status } from '@/lib/services/providers/types';

/**
 * Search trips by title and description on client side
 */

export const searchTrips = (trip: Trip, searchValue: string): boolean => {
  return (
    trip.title.toLowerCase().includes(searchValue) || trip.desc.toLowerCase().includes(searchValue)
  );
};

/**
 * Filters trips by status
 */
export const filtersTrip = (trip: Trip, status: Status | undefined): boolean => {
  return status ? trip.status.toUpperCase() === status.toUpperCase() : true;
};

/**
 * Remove trip by id
 */
export const deleteTrip = (id: number, trips: Trip[]): Trip[] => {
  return trips.filter((trip) => trip.id !== id);
};
