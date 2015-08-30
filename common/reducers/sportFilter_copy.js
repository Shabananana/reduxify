import { SWITCH_SPORT_copy } from '../constants/ActionTypes';
import { VisibilityFilters } from '../constants/Filters';
import { SportFilterMap } from '../constants/StaticData';
const { SHOW_NFL } = VisibilityFilters;

export default function sportsFilter(state = SHOW_NFL, action) {
  switch (action.type) {
    case SWITCH_SPORT_copy:
      return SportFilterMap[action.id];

    default:
      return state;
  }
}
