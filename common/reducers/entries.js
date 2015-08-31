import { UPDATE_ENTRY, CLEAR_ENTRIES } from '../constants/ActionTypes';
import { initialEntries } from '../constants/InitialState';

export default function entries(state = initialEntries, action) {
  switch (action.type) {
    case UPDATE_ENTRY:
      return state.map(entry =>
        entry.id === action.id ?
          { ...entry, quantity: action.quantity } :
          { ...entry }
      );

    case CLEAR_ENTRIES:
      return state.map(entry =>
        entry.sportId === action.sportId ?
          { ...entry, quantity: 0 } :
          { ...entry }
      );

    default:
      return state;
  }
}
