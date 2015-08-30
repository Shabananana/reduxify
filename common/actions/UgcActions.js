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

export function receiveUsers(json) {
  return {
    type: types.RECEIVE_USERS,
    users: _.shuffle(json.data.children).slice(0, 4).map(child => { return { id: child.data.id, userName: child.data.author } })
  };
}

export function fetchUsers(userName) {
  return dispatch => {
    dispatch(updateUser(userName))
    if(userName.trim().length > 2) {
      return fetch('http://www.reddit.com/r/hearthstone.json')
        .then(req => req.json())
        .then(json => dispatch(receiveUsers(json)));
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

export function updateEntry_copy(id, quantity) {
  return {
    type: types.UPDATE_ENTRY_copy,
    id,
    quantity
  };
}

export function updateLeagueEntry_copy(leagueEntry) {
  return {
    type: types.UPDATE_LEAGUE_ENTRY_copy,
    leagueEntry
  }
}

export function clearEntries_copy(sportId) {
  return {
    type: types.CLEAR_ENTRIES_copy,
    sportId
  };
}

export function switchSport_copy(id) {
  return {
    type: types.SWITCH_SPORT_copy,
    id
  };
}

export function switchDraftGroup_copy(id, sportId) {
  return {
    type: types.SWITCH_DRAFTGROUP_copy,
    id,
    sportId
  };
}

export function switchContestType_copy(contestType) {
  return {
    type: types.SWITCH_CONTEST_TYPE_copy,
    contestType
  }
}

export function switchAccessType_copy(accessType) {
  return {
    type: types.SWITCH_ACCESS_TYPE_copy,
    accessType
  }
}

export function createUser_copy(user) {
  return {
    type: types.CREATE_USER_copy,
    user
  };
}

export function receiveUsers_copy(json) {
  return {
    type: types.RECEIVE_USERS_copy,
    users: _.shuffle(json.data.children).slice(0, 4).map(child => { return { id: child.data.id, userName: child.data.author } })
  };
}

export function deleteUser_copy(id) {
  return {
    type: types.DELETE_USER_copy,
    id
  }
}

export function updateUser_copy(userName) {
  return {
    type: types.UPDATE_USER_copy,
    userName
  }
}
