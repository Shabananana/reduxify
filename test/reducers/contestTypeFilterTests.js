import { expect } from 'chai';
import reducer from '../../common/reducers/contestTypeFilter';
import * as types from '../../common/constants/ActionTypes';
import { VisibilityFilters } from '../../common/constants/Filters';
const { SHOW_H2H, SHOW_LEAGUE } = VisibilityFilters;

const initialState = SHOW_H2H;

describe('contestTypeFilter reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).to.deep.equal(initialState);
  });

  it('should handle SWITCH_CONTEST_TYPE', () => {
    const contestType = SHOW_LEAGUE;
    expect(
      reducer(initialState, {
        type: types.SWITCH_CONTEST_TYPE,
        contestType
      })
    ).to.deep.equal(contestType);
  });
});
