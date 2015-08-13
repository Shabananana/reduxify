import { SWITCH_SPORT } from '../constants/ActionTypes';
import { VisibilityFilters } from '../constants/Filters';

const initialState = [
  {
    id: 1,
    name: 'NFL',
    selected: true
  },
  {
    id: 2,
    name: 'MLB',
    selected: false
  },
  {
    id: 3,
    name: 'NBA',
    selected: false
  }
];

export default function sports(state = initialState, action) {
  switch (action.type) {
    case SWITCH_SPORT:
      return state.map(sport =>
        sport.id === action.id ?
          { ...sport, selected: true } :
          { ...sport, selected: false }
      );

    default:
      return state;
  }
}
