import * as types from '../constants/ActionTypes';

export const LeagueEntrySizes = [
  3,
  4,
  5,
  6,
  7,
  8
];

export const LeagueEntryPrizeStructures = new Map([
  [ 'WINNER_TAKES_ALL', 'Winner takes all' ],
  [ 'TOP_2_WIN', 'Top 2 win' ]
]);

export function createUser(user) {
  return {
    type: types.CREATE_USER,
    user
  };
}

export function deleteUser(id) {
  return {
    type: types.DELETE_USER,
    id
  }
}

export function updateUser(userName) {
  return {
    type: types.UPDATE_USER,
    userName
  }
}

export function updateEntry(id, quantity) {
  return {
    type: types.UPDATE_ENTRY,
    id,
    quantity
  };
}

export function clearEntries(sportId) {
  return {
    type: types.CLEAR_ENTRIES,
    sportId
  };
}

export function updateLeagueEntry(leagueEntry) {
  return {
    type: types.UPDATE_LEAGUE_ENTRY,
    leagueEntry
  }
}

export function switchContestType(contestType) {
  return {
    type: types.SWITCH_CONTEST_TYPE,
    contestType
  }
}

export function switchAccessType(accessType) {
  return {
    type: types.SWITCH_ACCESS_TYPE,
    accessType
  }
}

export function switchSport(id) {
  return {
    type: types.SWITCH_SPORT,
    id
  };
}

export function switchDraftGroup(id, sportId) {
  return {
    type: types.SWITCH_DRAFTGROUP,
    id,
    sportId
  };
}
