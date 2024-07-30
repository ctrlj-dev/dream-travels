import { Trip } from '@/lib/services/mappers/types';
import { Status } from '@/lib/services/providers/types';
import { filtersTrip, searchTrips } from '../trips-filters.utils';

describe('Trip utility functions', () => {
  describe('searchTrips', () => {
    const trip: Trip = {
      id: 1,
      title: 'Adventure in the Alps',
      desc: 'A thrilling experience in the beautiful Alps mountains.',
      status: Status.DONE,
    } as Trip;

    it('should return true if search value is in title', () => {
      expect(searchTrips(trip, 'adventure')).toBe(true);
    });

    it('should return true if search value is in description', () => {
      expect(searchTrips(trip, 'thrilling')).toBe(true);
    });

    it('should return false if search value is not in title or description', () => {
      expect(searchTrips(trip, 'beach')).toBe(false);
    });
  });
});

describe('filtersTrip', () => {
  const trip: Trip = {
    id: 1,
    title: 'Adventure in the Alps',
    desc: 'A thrilling experience in the beautiful Alps mountains.',
    status: Status.DONE,
  } as Trip;

  it('should return true if status matches', () => {
    expect(filtersTrip(trip, Status.DONE)).toBe(true);
    expect(filtersTrip(trip, Status.DONE)).toBe(true);
  });

  it('should return false if status does not match', () => {
    expect(filtersTrip(trip, Status.TODO)).toBe(false);
  });

  it('should return true if no status is provided', () => {
    expect(filtersTrip(trip, undefined)).toBe(true);
  });
});
