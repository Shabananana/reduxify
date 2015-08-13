import expect from 'expect';
import reducer from '../../common/reducers/leagueEntries';
import * as types from '../../common/constants/ActionTypes';
import { LeagueEntryPrizeStructures } from '../../common/constants/StaticData';

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

const initialState = [ initialNflLeagueEntry, initialMlbLeagueEntry, initialNbaLeagueEntry ];

describe('leagueEntries reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle UPDATE_LEAGUE_ENTRY', () => {
    const leagueEntry = {
      size: 3,
      sportId: 3,
      price: 99,
      name: 'I am an UPDATED NBA League!',
      prizeStructure: LeagueEntryPrizeStructures.get('TOP_2_WIN')

    };
    const updatedState = initialState.map(entry =>
      entry.sportId === leagueEntry.sportId ?
        { ...entry, ...leagueEntry } :
        { ...entry }
    );
    expect(
      reducer(initialState, {
        type: types.UPDATE_LEAGUE_ENTRY,
        leagueEntry
      })
    ).toEqual(updatedState);
  });
});
