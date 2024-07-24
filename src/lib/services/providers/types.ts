export enum Status {
  TODO = 'TODO',
  DONE = 'DONE',
}

export interface ItineraryResponse {
  day: number;
  location: string;
  description: string;
}

export interface TripResponse {
  id: number;
  title: string;
  description: string;
  photo_url: string;
  status: Status;
  itinerary?: ItineraryResponse[];
}
