import { SWITCH_DRAFTGROUP } from '../constants/ActionTypes';

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

export default function draftGroups(state = initialState, action) {
  switch (action.type) {
    case SWITCH_DRAFTGROUP:
      return state.map(draftGroup =>
        draftGroup.sportId === action.sportId ?
          (draftGroup.id === action.id ?
            { ...draftGroup, selected: true } :
            { ...draftGroup, selected: false }
          ) :
        { ...draftGroup }
      );

    default:
      return state;
    }
}
