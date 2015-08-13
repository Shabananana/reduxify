import { UPDATE_LEAGUE_ENTRY } from '../constants/ActionTypes';
import { LeagueEntryPrizeStructures } from '../constants/StaticData';

const initialNflLeagueEntry = {
    size: 3,
    sportId: 1,
    price: 5,
    name: '',
    prizeStructure: LeagueEntryPrizeStructures.get('WINNER_TAKES_ALL')
};

const initialMlbLeagueEntry = {
    size: 4,
    sportId: 2,
    price: 200,
    name: 'Test MLB Entry!',
    prizeStructure: LeagueEntryPrizeStructures.get('WINNER_TAKES_ALL')
};

const initialNbaLeagueEntry = {
    size: 5,
    sportId: 3,
    price: 15,
    name: 'I am an NBA League!',
    prizeStructure: LeagueEntryPrizeStructures.get('WINNER_TAKES_ALL')
};

const initialLeagueEntries = [ initialNflLeagueEntry, initialMlbLeagueEntry, initialNbaLeagueEntry ];

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
