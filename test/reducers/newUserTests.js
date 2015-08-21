import expect from 'expect';
import reducer from '../../common/reducers/newUser';
import * as types from '../../common/constants/ActionTypes';
import { initialUser } from '../../common/constants/InitialState';

describe('newUser reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialUser);
  });

  it('should handle CREATE_USER', () => {
    const user = {
      id: 2,
      userName: 'FakeShabananana'
    };
    const updatedState = [...initialUser, user];
    expect(
      reducer(initialUser, {
        type: types.CREATE_USER,
        user
      })
    ).toEqual(initialUser);
  });

  it('should handle UPDATE_USER', () => {
    const userName = 'FakeShabananana';
    const updatedState = { ...initialUser, userName };
    expect(
      reducer(initialUser, {
        type: types.UPDATE_USER,
        userName
      })
    ).toEqual(updatedState);
  });
});
