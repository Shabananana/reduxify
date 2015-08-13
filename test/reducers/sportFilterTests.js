import expect from 'expect';
import reducer from '../../common/reducers/sportFilter';
import * as types from '../../common/constants/ActionTypes';
import { VisibilityFilters } from '../../common/constants/Filters';
import { SportFilterMap } from '../../common/constants/StaticData';

const { SHOW_NFL, SHOW_MLB, SHOW_NBA } = VisibilityFilters;

const initialState = SHOW_NFL;

describe('sportFilter reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle SWITCH_SPORT', () => {
    const updatedState = SHOW_NBA;
    const id = 3;
    expect(SportFilterMap[id]).toEqual(updatedState);
    expect(
      reducer(initialState, {
        type: types.SWITCH_SPORT,
        id
      })
    ).toEqual(updatedState);
  });
});
