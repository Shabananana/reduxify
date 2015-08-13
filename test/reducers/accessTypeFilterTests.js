import expect from 'expect';
import reducer from '../../common/reducers/accessTypeFilter';
import * as types from '../../common/constants/ActionTypes';
import { VisibilityFilters } from '../../common/constants/Filters';
const { SHOW_PRIVATE, SHOW_PUBLIC } = VisibilityFilters;

const initialState = SHOW_PRIVATE;

describe('accessTypeFilter reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle SWITCH_ACCESS_TYPE', () => {
    const accessType = SHOW_PUBLIC;
    expect(
      reducer(initialState, {
        type: types.SWITCH_ACCESS_TYPE,
        accessType
      })
    ).toEqual(accessType);
  });
});
