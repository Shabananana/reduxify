import { CREATE_USER_copy, DELETE_USER_copy } from '../constants/ActionTypes';

export default function users(state = [], action) {
  switch (action.type) {
    case CREATE_USER_copy:
      return [ ...state, action.user ];

    case DELETE_USER_copy:
      return state.filter(user =>
        user.id !== action.id
      );

    default:
      return state;
  }
}
