import { Trip } from '@/lib/services/mappers/types';
import { Status } from '@/lib/services/providers/types';

/**
 * Search trips by title and description on client side
 */
export const searchTrips = (searchValue: string, trips: Trip[]): Trip[] => {
  return trips.filter(
    (trip) =>
      trip.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      trip.desc.toLowerCase().includes(searchValue.toLowerCase()),
  );
};

/**
 * Filters trips by status
 */
export const filtersTrip = (status: Status, trips: Trip[]): Trip[] => {
  return trips.filter((trip) => trip.status.toUpperCase() === status);
};

/**
 * Remove trip by id
 */
export const deleteTrip = (id: number, trips: Trip[]): Trip[] => {
  return trips.filter((trip) => trip.id !== id);
};
