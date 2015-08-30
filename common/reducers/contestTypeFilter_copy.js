import { SWITCH_CONTEST_TYPE_copy } from '../constants/ActionTypes';
import { VisibilityFilters } from '../constants/Filters';
const { SHOW_H2H, SHOW_LEAGUE } = VisibilityFilters;

export default function contestTypeFilter(state = SHOW_H2H, action) {
  switch (action.type) {
    case SWITCH_CONTEST_TYPE_copy:
      return action.contestType;

    default:
      return state;
  }
}
