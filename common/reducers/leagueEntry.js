import { UPDATE_LEAGUE_ENTRY } from '../constants/ActionTypes';
import { LeagueEntryPrizeStructures } from '../actions/UgcActions';

const initialState = {
    size: 3,
    price: 5,
    name: '',
    prizeStructure: LeagueEntryPrizeStructures.get('WINNER_TAKES_ALL')
};

export default function entries(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LEAGUE_ENTRY:
    return { ...state, ...action.leagueEntry };

    default:
      return state;
  }
}
