import { ItineraryResponse, TripResponse } from '../providers/types';
import { Itinerary, Trip, TripInput } from './types';

export const itinerayResponseToItinerary = (
  itinerary: ItineraryResponse[] | undefined,
  id: number,
): Itinerary[] => {
  let itinerary_: Itinerary[] = [];

  if (itinerary && itinerary.length > 0) {
    itinerary_ = itinerary.map((item) => ({
      id: `${id}-${item.day}-${item.location}`,
      day: item.day,
      location: item.location,
      desc: item.description,
    }));
  }

  return itinerary_;
};

export const tripResponseToTrip = (response: TripResponse): Trip => {
  return {
    id: response.id,
    title: response.title,
    desc: response.description,
    image: response.photo_url,
    status: response.status,
    itinerary: itinerayResponseToItinerary(response.itinerary, response.id),
  };
};

export const tripsResponseToTrips = (response: TripResponse[]): Trip[] => {
  if (!response) {
    return [];
  }

  const trips: Trip[] = response.map((trip) => ({
    id: trip.id,
    title: trip.title,
    desc: trip.description,
    image: trip.photo_url,
    status: trip.status,
    itinerary: itinerayResponseToItinerary(trip.itinerary, trip.id),
  }));

  return trips;
};

export const itineraryToItineraryResponse = (
  itinerary: Itinerary[] | undefined,
): ItineraryResponse[] => {
  let itinerary_: ItineraryResponse[] = [];

  if (itinerary && itinerary.length > 0) {
    itinerary_ = itinerary.map((item) => ({
      day: item.day,
      location: item.location,
      description: item.desc,
    }));
  }

  return itinerary_;
};

export const tripToTripInput = (trip: Trip): TripInput => {
  let itinerary_:
    | {
        day: number;
        location: string;
        description: string;
      }[]
    | undefined = [];

  if (trip.itinerary && trip.itinerary.length > 0) {
    itinerary_ = trip.itinerary.map((item) => ({
      day: item.day,
      location: item.location,
      description: item.desc,
    }));
  }

  return {
    id: `${trip.id}`,
    title: trip.title,
    introduction: trip.desc,
    description: trip.desc,
    photo_url: trip.image,
    status: trip.status.toLowerCase() as TripInput['status'],
    itinerary: itinerary_,
  };
};
