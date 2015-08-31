import { SWITCH_SPORT } from '../constants/ActionTypes';
import { initialSports } from '../constants/InitialState';

export default function sports(state = initialSports, action) {
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
