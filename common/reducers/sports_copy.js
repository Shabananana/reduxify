import { SWITCH_SPORT_copy } from '../constants/ActionTypes';
import { VisibilityFilters } from '../constants/Filters';
import { initialSports } from '../constants/InitialState';

export default function sports(state = initialSports, action) {
  switch (action.type) {
    case SWITCH_SPORT_copy:
      return state.map(sport =>
        sport.id === action.id ?
          { ...sport, selected: true } :
          { ...sport, selected: false }
      );

    default:
      return state;
  }
}
