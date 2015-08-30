import { CREATE_USER_copy, UPDATE_USER_copy } from '../constants/ActionTypes';
import { initialUser } from '../constants/InitialState';

export default function newUser(state = initialUser, action) {
  switch (action.type) {
    case CREATE_USER_copy:
      return { ...initialUser };

    case UPDATE_USER_copy:
      return { ...state, userName: action.userName };

    default:
      return state;
  }
}
