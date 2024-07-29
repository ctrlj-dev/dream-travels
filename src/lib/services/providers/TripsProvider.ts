import { FailedToFetchError } from '@/lib/constants';
import { TripInput } from '../mappers/types';
import fetcher from '../utils/fetcher';
import { TripResponse } from './types';

class TripsProvider {
  async getTrips(): Promise<TripResponse[]> {
    try {
      const data = await fetcher.get<TripResponse[]>('/travels');
      return data;
    } catch (error) {
      console.error('Failed to fetch trips:', error);
      throw new Error(FailedToFetchError);
    }
  }

  async createTrip(trip: TripInput): Promise<TripResponse> {
    try {
      const data = await fetcher.post<TripResponse>('/travels', trip);
      return data;
    } catch (error) {
      console.error('Failed to create trip:', error);
      throw new Error(FailedToFetchError);
    }
  }

  async editTrip(trip: TripInput): Promise<TripResponse> {
    try {
      const data = await fetcher.patch<TripResponse>(`/travels/${trip.id}`, { ...trip });
      return data;
    } catch (error) {
      console.error('Failed to edit trip:', error);
      throw new Error(FailedToFetchError);
    }
  }

  async deleteTrip(id: number): Promise<{ id: number }> {
    try {
      // Data return always undefined
      //const data = await fetcher.delete<TripResponse>(`/travels/${id}`);
      return { id };
    } catch (error) {
      console.error('Failed to delete trip:', error);
      throw new Error(FailedToFetchError);
    }
  }
}

export default new TripsProvider();
