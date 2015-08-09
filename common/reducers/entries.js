import { UPDATE_ENTRY, CLEAR_ENTRIES } from '../constants/ActionTypes';
import { VisibilityFilters } from '../constants/Filters';

const initialNbaEntries = [
  {
    id: 8,
    sportId: 3,
    quantity: 0,
    price: 15,
    maxEntries: 50
  },
  {
    id: 7,
    sportId: 3,
    quantity: 0,
    price: 40,
    maxEntries: 50
  }
];

const initialMlbEntries = [
  {
    id: 5,
    sportId: 2,
    quantity: 0,
    price: 0,
    maxEntries: 50
  },
  {
    id: 6,
    sportId: 2,
    quantity: 0,
    price: 1,
    maxEntries: 50
  },
  {
    id: 7,
    sportId: 2,
    quantity: 0,
    price: 200,
    maxEntries: 50
  }
];

const initialNflEntries = [
  {
    id: 1,
    sportId: 1,
    quantity: 3,
    price: 0,
    maxEntries: 50
  },
  {
    id: 2,
    sportId: 1,
    quantity: 6,
    price: 1,
    maxEntries: 50
  },
  {
    id: 3,
    sportId: 1,
    quantity: 0,
    price: 5,
    maxEntries: 50
  },
  {
    id: 4,
    sportId: 1,
    quantity: 3,
    price: 10,
    maxEntries: 50
  }
];

const initialState = [...initialNflEntries, ...initialMlbEntries, ...initialNbaEntries];

export default function entries(state = initialState, action) {
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
