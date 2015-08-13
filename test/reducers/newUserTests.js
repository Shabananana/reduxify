import expect from 'expect';
import reducer from '../../common/reducers/newUser';
import * as types from '../../common/constants/ActionTypes';

const initialState = {
  id: 0,
  userName: ''
};

describe('newUser reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle CREATE_USER', () => {
    const user = {
      id: 2,
      userName: 'FakeShabananana'
    };
    const updatedState = [...initialState, user];
    expect(
      reducer(initialState, {
        type: types.CREATE_USER,
        user
      })
    ).toEqual(initialState);
  });

  it('should handle UPDATE_USER', () => {
    const userName = 'FakeShabananana';
    const updatedState = { ...initialState, userName };
    expect(
      reducer(initialState, {
        type: types.UPDATE_USER,
        userName
      })
    ).toEqual(updatedState);
  });
});
