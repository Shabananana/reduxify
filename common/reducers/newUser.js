import { CREATE_USER, UPDATE_USER } from '../constants/ActionTypes';
import { initialUser } from '../constants/InitialState';

export default function newUser(state = initialUser, action) {
  switch (action.type) {
    case CREATE_USER:
      return { ...initialUser };

    case UPDATE_USER:
      return { ...state, userName: action.userName };

    default:
      return state;
  }
}
