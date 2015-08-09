import { SWITCH_ACCESS_TYPE } from '../constants/ActionTypes';
import { VisibilityFilters } from '../actions/UgcActions';
const { SHOW_PRIVATE, SHOW_PUBLIC} = VisibilityFilters;

export default function accessTypeFilter(state = SHOW_PRIVATE, action) {
  switch (action.type) {
  case SWITCH_ACCESS_TYPE:
    return action.accessType;

  default:
    return state;
  }
}
