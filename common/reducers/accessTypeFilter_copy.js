import { SWITCH_ACCESS_TYPE_copy } from '../constants/ActionTypes';
import { VisibilityFilters } from '../constants/Filters';
const { SHOW_PRIVATE, SHOW_PUBLIC} = VisibilityFilters;

export default function accessTypeFilter(state = SHOW_PRIVATE, action) {
  switch (action.type) {
    case SWITCH_ACCESS_TYPE_copy:
      return action.accessType;

    default:
      return state;
  }
}
