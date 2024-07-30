import { Status } from '@/lib/services/providers/types';

/**
 * Status action to show on trip details
 */
enum StatusAction {
  PENDING = 'Mark as completed',
  COMPLETE = 'Completed',
}

/**
 * Map status in it action
 */
const mapStatusToAction = (status: Status): string => {
  const status_ = status;
  let action = 'Unknow status';
  if (status_ === Status.DONE) {
    action = StatusAction.COMPLETE;
  }
  if (status_ === Status.TODO) {
    action = StatusAction.PENDING;
  }
  return action;
};
export { StatusAction, mapStatusToAction };
