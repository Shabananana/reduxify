import { CREATE_USER, UPDATE_USER } from '../constants/ActionTypes';

const initialState = {
  id: 0,
  userName: ''
};

export default function newUser(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
      return { ...state, ...initialState };

    case UPDATE_USER:
      return { ...state, userName: action.userName };

    default:
      return state;
  }
}
