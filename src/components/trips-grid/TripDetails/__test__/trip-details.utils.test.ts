import { Status } from '@/lib/services/providers/types';
import { StatusAction, mapStatusToAction } from '../trip-details.utils';

describe('mapStatusToAction', () => {
  it('should return "Mark as completed" for TODO status', () => {
    const result = mapStatusToAction(Status.TODO);
    expect(result).toBe(StatusAction.PENDING);
  });

  it('should return "Completed" for DONE status', () => {
    const result = mapStatusToAction(Status.DONE);
    expect(result).toBe(StatusAction.COMPLETE);
  });

  it('should return "Unknow status" for an unknown status', () => {
    const unknownStatus = 'UNKNOWN_STATUS' as Status;
    const result = mapStatusToAction(unknownStatus);
    expect(result).toBe('Unknow status');
  });
});
