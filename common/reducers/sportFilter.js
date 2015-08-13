import { SWITCH_SPORT } from '../constants/ActionTypes';
import { VisibilityFilters } from '../constants/Filters';
import { SportFilterMap } from '../constants/StaticData';
const { SHOW_NFL, SHOW_MLB, SHOW_NBA } = VisibilityFilters;


export default function sportsFilter(state = SHOW_NFL, action) {
  switch (action.type) {
    case SWITCH_SPORT:
      return SportFilterMap[action.id];

    default:
      return state;
  }
}
