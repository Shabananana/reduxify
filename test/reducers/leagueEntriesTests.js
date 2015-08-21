import expect from 'expect';
import reducer from '../../common/reducers/leagueEntries';
import * as types from '../../common/constants/ActionTypes';
import { LeagueEntryPrizeStructures } from '../../common/constants/StaticData';
import { initialLeagueEntries } from '../../common/constants/InitialState';

describe('leagueEntries reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialLeagueEntries);
  });

  it('should handle UPDATE_LEAGUE_ENTRY', () => {
    const leagueEntry = {
      size: 3,
      sportId: 3,
      price: 99,
      name: 'I am an UPDATED NBA League!',
      prizeStructure: LeagueEntryPrizeStructures.get('TOP_2_WIN')

    };
    const updatedState = initialLeagueEntries.map(entry =>
      entry.sportId === leagueEntry.sportId ?
        { ...entry, ...leagueEntry } :
        { ...entry }
    );
    expect(
      reducer(initialLeagueEntries, {
        type: types.UPDATE_LEAGUE_ENTRY,
        leagueEntry
      })
    ).toEqual(updatedState);
  });
});
