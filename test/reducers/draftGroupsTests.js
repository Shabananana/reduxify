import { expect } from 'chai';
import reducer from '../../common/reducers/draftGroups';
import * as types from '../../common/constants/ActionTypes';
import { initialDraftGroups } from '../../common/constants/InitialState';

describe('draftGroups reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).to.deep.equal(initialDraftGroups);
  });

  it('should handle SWITCH_DRAFTGROUP', () => {
    const id = 5;
    const sportId = 2;
    const updatedState = initialDraftGroups.map(draftGroup =>
      draftGroup.sportId === sportId ?
        (draftGroup.id === id ?
          { ...draftGroup, selected: true } :
          { ...draftGroup, selected: false }
        ) :
      { ...draftGroup }
    );
    expect(
      reducer(initialDraftGroups, {
        type: types.SWITCH_DRAFTGROUP,
        id,
        sportId
      })
    ).to.deep.equal(updatedState);
  });
});
