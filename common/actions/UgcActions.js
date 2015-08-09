import * as types from '../constants/ActionTypes';

export const VisibilityFilters = {
  SHOW_NFL: 'SHOW_NFL',
  SHOW_MLB: 'SHOW_MLB',
  SHOW_NBA: 'SHOW_NBA',
  SHOW_H2H: 'SHOW_H2H',
  SHOW_LEAGUE: 'SHOW_LEAGUE',
  SHOW_PRIVATE: 'SHOW_PRIVATE',
  SHOW_PUBLIC: 'SHOW_PUBLIC'
};

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
