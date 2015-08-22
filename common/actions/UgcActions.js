import * as types from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';
import _ from 'lodash';

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

export function requestUsers(user) {
  return {
    type: types.REQUEST_USERS,
    user
  };
}

export function receiveUsers(userName, json) {
  return {
    type: types.RECEIVE_USERS,
    userName,
    users: _.shuffle(json.data.children).slice(0, 4).map(child => { return { id: child.data.id, userName: child.data.author } }),
    receivedAt: Date.now()
  };
}

export function fetchUsers(userName) {
  return dispatch => {
    dispatch(updateUser(userName))
    if(userName.trim().length > 2) {
      dispatch(requestUsers(userName));
      return fetch('http://www.reddit.com/r/hearthstone.json')
        .then(req => req.json())
        .then(json => dispatch(receiveUsers(userName, json)));
    }
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
