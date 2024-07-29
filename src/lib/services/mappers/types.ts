import { Status } from '../providers/types';

export type Itinerary = {
  id: string;
  day: number;
  location: string;
  desc: string;
};

export type Trip = {
  id: number;
  title: string;
  desc: string;
  intro: string;
  image: string;
  status: Status;
  itinerary?: Itinerary[];
};

export type TripInput = {
  id: string;
  title: string;
  introduction?: string;
  description?: string;
  photo_url: string;
  status?: 'done' | 'todo';
  itinerary?: {
    day: number;
    location: string;
    description: string;
  }[];
};
