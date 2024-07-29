import { tripResponseToTrip, tripsResponseToTrips } from '../mappers/trips.mapper';
import { Trip, TripInput } from '../mappers/types';
import TripsProvider from '../providers/TripsProvider';

export const getTrips = async (): Promise<Trip[]> => {
  const response = await TripsProvider.getTrips();
  let loading = true;
  setTimeout(() => {
    loading = false;
  }, 5000);
  return tripsResponseToTrips(response);
};

export const createTrip = async (trip: TripInput): Promise<Trip> => {
  const response = await TripsProvider.createTrip(trip);
  return tripResponseToTrip(response);
};

export const editTrip = async (trip: TripInput): Promise<Trip> => {
  const response = await TripsProvider.editTrip(trip);
  return tripResponseToTrip(response);
};

export const deleteTrip = async (trip: number): Promise<Trip['id']> => {
  const response = await TripsProvider.deleteTrip(trip);
  return response.id;
};
