type SearchBarState = {
  isFocused: boolean;
  isActive: boolean;
};

export const SearchBarInitialState = {
  isFocused: false,
  isActive: false,
};

export enum SearchBarActionType {
  FOCUS = 'FOCUS',
  BLUR = 'BLUR',
  MOUSE_ENTER = 'MOUSE_ENTER',
  MOUSE_LEAVE = 'MOUSE_LEAVE',
  MOUSE_DOWN = 'MOUSE_DOWN',
  MOUSE_UP = 'MOUSE_UP',
}

export type SearchBarAction =
  | { type: SearchBarActionType.FOCUS }
  | { type: SearchBarActionType.BLUR }
  | { type: SearchBarActionType.MOUSE_DOWN }
  | { type: SearchBarActionType.MOUSE_UP };

export const searchBarReducer = (state: SearchBarState, action: SearchBarAction) => {
  switch (action.type) {
    case 'FOCUS':
      return { ...state, isFocused: true };
    case 'BLUR':
      return { ...state, isFocused: false };
    case 'MOUSE_DOWN':
      return { ...state, isActive: true };
    case 'MOUSE_UP':
      return { ...state, isActive: false };
    default:
      return state;
  }
};
