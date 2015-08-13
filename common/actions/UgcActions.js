import * as types from '../constants/ActionTypes';

export function updateEntry(id, quantity) {
  return {
    type: types.UPDATE_ENTRY,
    id,
    quantity
  };
}

export function updateLeagueEntry(leagueEntry) {
  return {
    type: types.UPDATE_LEAGUE_ENTRY,
    leagueEntry
  }
}

export function clearEntries(sportId) {
  return {
    type: types.CLEAR_ENTRIES,
    sportId
  };
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
