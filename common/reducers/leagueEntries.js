import { UPDATE_LEAGUE_ENTRY } from '../constants/ActionTypes';
import { initialLeagueEntries } from '../constants/InitialState';

export default function leagueEntries(state = initialLeagueEntries, action) {
  switch (action.type) {
    case UPDATE_LEAGUE_ENTRY:
    return state.map(leagueEntry =>
      leagueEntry.sportId === action.leagueEntry.sportId ?
        { ...leagueEntry, ...action.leagueEntry } :
        { ...leagueEntry }
    );

    default:
      return state;
  }
}
