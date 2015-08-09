import { CREATE_USER, DELETE_USER } from '../constants/ActionTypes';

export default function users(state = [], action) {
  switch (action.type) {
    case CREATE_USER:
      return [ ...state, action.user ];

    case DELETE_USER:
      return state.filter(user =>
        user.id !== action.id
      );

    default:
      return state;
  }
}
