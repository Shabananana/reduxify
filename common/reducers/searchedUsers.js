import { RECEIVE_USERS, CREATE_USER } from '../constants/ActionTypes';

export default function searchedUsers(state = [], action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return [ ...action.users ];

    case CREATE_USER:
      return [];

    default:
      return state;
  }
}
