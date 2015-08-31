import { SWITCH_ACCESS_TYPE } from '../constants/ActionTypes';
import { VisibilityFilters } from '../constants/Filters';
const { SHOW_PRIVATE } = VisibilityFilters;

export default function accessTypeFilter(state = SHOW_PRIVATE, action) {
  switch (action.type) {
    case SWITCH_ACCESS_TYPE:
      return action.accessType;

    default:
      return state;
  }
}
