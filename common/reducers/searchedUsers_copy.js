import { RECEIVE_USERS_copy, CREATE_USER_copy } from '../constants/ActionTypes';

export default function searchedUsers(state = [], action) {
  switch (action.type) {
    case RECEIVE_USERS_copy:
      return [ ...action.users ];

    case CREATE_USER_copy:
      return [];

    default:
      return state;
  }
}
