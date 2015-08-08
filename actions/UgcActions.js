import * as types from '../constants/ActionTypes';

export const VisibilityFilters = {
  SHOW_NFL: 'SHOW_NFL',
  SHOW_MLB: 'SHOW_MLB',
  SHOW_NBA: 'SHOW_NBA'
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
