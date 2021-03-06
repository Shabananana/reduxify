import { expect } from 'chai';
import reducer from '../../common/reducers/users';
import * as types from '../../common/constants/ActionTypes';

const initialState = [];

describe('users reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).to.deep.equal(initialState);
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
    ).to.deep.equal(updatedState);
  });

  it('should handle DELETE_USER', () => {
    const id = 2;
    const user = {
      id,
      userName: 'FakeShabananana'
    };
    const interactedState = [...initialState, user];
    expect(
      reducer(interactedState, {
        type: types.DELETE_USER,
        id
      })
    ).to.deep.equal(initialState);
  });
});
