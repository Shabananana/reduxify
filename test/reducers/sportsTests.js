import expect from 'expect';
import reducer from '../../common/reducers/sports';
import * as types from '../../common/constants/ActionTypes';
import { initialSports } from '../../common/constants/InitialState';

describe('sports reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialSports);
  });

  it('should handle SWITCH_SPORT', () => {
    const updatedState = [
      {
        id: 1,
        name: 'NFL',
        selected: false
      },
      {
        id: 2,
        name: 'MLB',
        selected: false
      },
      {
        id: 3,
        name: 'NBA',
        selected: true
      }
    ];
    expect(
      reducer(initialSports, {
        type: types.SWITCH_SPORT,
        id: 3
      })
    ).toEqual(updatedState);
  });
});
