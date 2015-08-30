import { UPDATE_ENTRY_copy, CLEAR_ENTRIES_copy } from '../constants/ActionTypes';
import { VisibilityFilters } from '../constants/Filters';
import { initialEntries } from '../constants/InitialState';

export default function entries(state = initialEntries, action) {
  switch (action.type) {
    case UPDATE_ENTRY_copy:
      return state.map(entry =>
        entry.id === action.id ?
          { ...entry, quantity: action.quantity } :
          { ...entry }
      );

    case CLEAR_ENTRIES_copy:
      return state.map(entry =>
        entry.sportId === action.sportId ?
          { ...entry, quantity: 0 } :
          { ...entry }
      );

    default:
      return state;
  }
}
