import { FailedToFetchError } from '@/lib/constants';
import { TripResponse } from './types';
import fetcher from '../utils/fetcher';
import { TripInput } from '../mappers/types';

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
      const data = await fetcher.put<TripResponse>(`/travels/3`, trip);
      return data;
    } catch (error) {
      console.error('Failed to edit trip:', error);
      throw new Error(FailedToFetchError);
    }
  }

  async deleteTrip(id: number): Promise<TripResponse> {
    try {
      const data = await fetcher.post<TripResponse>(`/travels/?id=${id}`, {});
      return data;
    } catch (error) {
      console.error('Failed to delete trip:', error);
      throw new Error(FailedToFetchError);
    }
  }
}

export default new TripsProvider();
