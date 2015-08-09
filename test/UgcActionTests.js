import expect from 'expect';
import * as actions from '../common/actions/UgcActions';
import * as types from '../common/constants/ActionTypes';

describe('actions', () => {
  it('should create an action to switch sports', () => {
    const id = 2;
    const expectedAction = {
      type: types.SWITCH_SPORT,
      id
    };
    expect(actions.switchSport(id)).toEqual(expectedAction);
  });
});
