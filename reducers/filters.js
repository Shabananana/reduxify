import { SET_VISIBILITY_FILTER } from '../constants/ActionTypes';
import { VisibilityFilters } from '../actions/UgcActions';
const { SHOW_NFL } = VisibilityFilters;

export default function visibilityFilter(state = SHOW_NFL, action) {
  switch (action.type) {
  case SET_VISIBILITY_FILTER:
    return action.filter;
  default:
    return state;
  }
}
