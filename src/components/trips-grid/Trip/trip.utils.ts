/**
 * Type for trip action state
 */
export type TripActionState = {
  isDetails: boolean;
  isEdit: boolean;
  isCreate: boolean;
  isDelete: boolean;
  isOpen: boolean;
};

/**
 * Initial values for trip reducer state
 */
export const TripInitialState = {
  isDetails: false,
  isEdit: false,
  isCreate: false,
  isDelete: false,
  isOpen: false,
};

/**
 * Enum for trip action on reducer
 */
export enum TripActionType {
  OPEN_DETAILS = 'OPEN_DETAILS',
  EDIT = 'EDIT',
  DELETE = 'DELETE',
  RESET_STATE = 'RESET_STATE',
}

/**
 * Type for trip action on reducer
 */
export type TripAction =
  | { type: TripActionType.OPEN_DETAILS }
  | { type: TripActionType.EDIT }
  | { type: TripActionType.DELETE }
  | { type: TripActionType.RESET_STATE };

export type TripApi = {
  handleDetails: () => void;
  handleEdit: () => void;
  handleDelete: () => void;
  handleReset: () => void;
};

/**
 *  Switcher función for trip reducer actions
 */
export const tripReducer = (state: TripActionState, action: TripAction) => {
  switch (action.type) {
    case 'OPEN_DETAILS':
      return { ...state, isDetails: true, isOpen: true };
    case 'EDIT':
      return { ...state, isEdit: true, isOpen: true };
    case 'DELETE':
      return { ...state, isDelete: true, isOpen: true };
    case 'RESET_STATE': {
      return TripInitialState;
    }
    default:
      return state;
  }
};
