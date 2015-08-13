import expect from 'expect';
import reducer from '../../common/reducers/draftGroups';
import * as types from '../../common/constants/ActionTypes';

const initialNflDraftGroups = [
  {
    id: 1,
    sportId: 1,
    name: 'Early-NFL',
    selected: true
  },
  {
    id: 2,
    sportId: 1,
    name: 'Midday-NFL',
    selected: false
  },
  {
    id: 3,
    sportId: 1,
    name: 'Late-NFL',
    selected: false
  }
];

const initialMlbDraftGroups = [
  {
    id: 4,
    sportId: 2,
    name: 'Early-MLB',
    selected: true
  },
  {
    id: 5,
    sportId: 2,
    name: 'Late-MLB',
    selected: false
  }
];

const initialNbaDraftGroups = [
  {
    id: 6,
    sportId: 3,
    name: 'Midday-NBA',
    selected: true
  },
  {
    id: 7,
    sportId: 3,
    name: 'Late-NBA',
    selected: false
  }
];

const initialState = [ ...initialNflDraftGroups, ...initialMlbDraftGroups, ...initialNbaDraftGroups ];

describe('draftGroups reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle SWITCH_DRAFTGROUP', () => {
    const id = 5;
    const sportId = 2;
    const updatedState = initialState.map(draftGroup =>
      draftGroup.sportId === sportId ?
        (draftGroup.id === id ?
          { ...draftGroup, selected: true } :
          { ...draftGroup, selected: false }
        ) :
      { ...draftGroup }
    );
    expect(
      reducer(initialState, {
        type: types.SWITCH_DRAFTGROUP,
        id,
        sportId
      })
    ).toEqual(updatedState);
  });
});
