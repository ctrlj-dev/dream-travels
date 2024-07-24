import { searchTrips, filtersTrip, deleteTrip } from '../trips-filters.utils';
import { Trip } from '@/lib/services/mappers/types';
import { Status } from '@/lib/services/providers/types';
import { sampleTrips } from '../../Grid/__test__/__mocks__/Trips';

describe('Trip utility functions', () => {
  describe('searchTrips', () => {
    it('should return trips that match the search value in title or description', () => {
      const searchValue = 'Paris';
      const result = searchTrips(searchValue, sampleTrips);
      expect(result).toEqual([
        {
          id: 1,
          title: 'Trip to Paris',
          desc: 'Enjoy the Eiffel Tower and more',
          image: '/images/paris.jpg',
          status: Status.TODO,
        },
      ]);
    });

    it('should return an empty array if no trips match the search value', () => {
      const searchValue = 'Nonexistent';
      const result = searchTrips(searchValue, sampleTrips);
      expect(result).toEqual([]);
    });

    it('should be case insensitive', () => {
      const searchValue = 'tokyo';
      const result = searchTrips(searchValue, sampleTrips);
      expect(result).toEqual([
        {
          id: 3,
          title: 'Trip to Tokyo',
          desc: 'Experience the culture and technology',
          image: '/images/tokyo.jpg',
          status: Status.TODO,
        },
      ]);
    });
  });

  describe('filtersTrip', () => {
    it('should return trips that match the given status', () => {
      const status = Status.TODO;
      const result = filtersTrip(status, sampleTrips);
      expect(result).toEqual([
        {
          id: 1,
          title: 'Trip to Paris',
          desc: 'Enjoy the Eiffel Tower and more',
          image: '/images/paris.jpg',
          status: Status.TODO,
        },
        {
          id: 3,
          title: 'Trip to Tokyo',
          desc: 'Experience the culture and technology',
          image: '/images/tokyo.jpg',
          status: Status.TODO,
        },
      ]);
    });

    it('should return an empty array if no trips match the given status', () => {
      const status = Status.DONE;
      const result = filtersTrip(status, sampleTrips);
      expect(result).toEqual([
        {
          id: 2,
          title: 'Trip to New York',
          desc: 'Explore the Big Apple',
          image: '/images/newyork.jpg',
          status: Status.DONE,
        },
      ]);
    });
  });

  describe('deleteTrip', () => {
    it('should remove a trip by its id', () => {
      const idToDelete = 2;
      const result = deleteTrip(idToDelete, sampleTrips);
      expect(result).toEqual([
        {
          id: 1,
          title: 'Trip to Paris',
          desc: 'Enjoy the Eiffel Tower and more',
          image: '/images/paris.jpg',
          status: Status.TODO,
        },
        {
          id: 3,
          title: 'Trip to Tokyo',
          desc: 'Experience the culture and technology',
          image: '/images/tokyo.jpg',
          status: Status.TODO,
        },
      ]);
    });

    it('should return the same array if the id to delete does not exist', () => {
      const idToDelete = 999;
      const result = deleteTrip(idToDelete, sampleTrips);
      expect(result).toEqual(sampleTrips);
    });
  });
});
