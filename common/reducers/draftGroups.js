import { SWITCH_DRAFTGROUP } from '../constants/ActionTypes';
import { initialDraftGroups } from '../constants/InitialState';

export default function draftGroups(state = initialDraftGroups, action) {
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
