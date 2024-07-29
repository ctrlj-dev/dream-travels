import { Trip } from '@/lib/services/mappers/types';
import { Status } from '@/lib/services/providers/types';

const sampleTrips: Trip[] = [
  {
    id: 1,
    title: 'Trip to Paris',
    intro: '',
    desc: 'Enjoy the Eiffel Tower and more',
    image: '/images/paris.jpg',
    status: Status.TODO,
  },
  {
    id: 2,
    intro: '',
    title: 'Trip to New York',
    desc: 'Explore the Big Apple',
    image: '/images/newyork.jpg',
    status: Status.DONE,
  },
  {
    id: 3,
    intro: '',
    title: 'Trip to Tokyo',
    desc: 'Experience the culture and technology',
    image: '/images/tokyo.jpg',
    status: Status.TODO,
  },
];

const sampleTripWithoutItinerary: Trip = {
  id: 1,
  intro: '',
  title: 'Trip to Paris',
  desc: 'Enjoy the Eiffel Tower and more',
  image: '/images/paris.jpg',
  status: Status.TODO,
  itinerary: [],
};

const sampleTripWithItinerary: Trip = {
  id: 1,
  intro: '',
  title: 'Trip to Paris',
  desc: 'Enjoy the Eiffel Tower and more',
  image: '/images/paris.jpg',
  status: Status.TODO,
  itinerary: [
    { id: '1', day: 1, location: 'Eiffel Tower', desc: 'Visit the Eiffel Tower' },
    { id: '2', day: 2, location: 'Louvre Museum', desc: 'Explore the Louvre Museum' },
  ],
};

export { sampleTrips, sampleTripWithItinerary, sampleTripWithoutItinerary };
