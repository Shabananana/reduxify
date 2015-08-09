import { SWITCH_SPORT } from '../constants/ActionTypes';
import { VisibilityFilters } from '../actions/UgcActions';
const { SHOW_NFL, SHOW_MLB, SHOW_NBA } = VisibilityFilters;
const filterMap = {
  1: SHOW_NFL,
  2: SHOW_MLB,
  3: SHOW_NBA
};

export default function sportsFilter(state = SHOW_NFL, action) {
  switch (action.type) {
  case SWITCH_SPORT:
    return filterMap[action.id];

  default:
    return state;
  }
}
