export enum Status {
  TODO = 'todo',
  DONE = 'done',
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
  introduction?: string;
  photo_url: string;
  status: Status;
  itinerary?: ItineraryResponse[];
}
