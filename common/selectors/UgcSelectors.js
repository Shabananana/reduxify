import { createSelector } from 'reselect';
import { VisibilityFilters } from '../constants/Filters';

function selectBySport(items, filter) {
  switch (filter) {
  case VisibilityFilters.SHOW_NFL:
    return items.filter(item => item.sportId === 1);
  case VisibilityFilters.SHOW_MLB:
    return items.filter(item => item.sportId === 2);
  case VisibilityFilters.SHOW_NBA:
    return items.filter(item => item.sportId === 3);
  }
}

const sportsSelector = (state) => state.sports;
const entriesSelector = (state) => state.entries;
const draftGroupsSelector = (state) => state.draftGroups;
const usersSelector = (state) => state.users;
const newUserSelector = (state) => state.newUser;
const leagueEntrySelector = (state) => state.leagueEntry;
const sportFilterSelector = (state) => state.sportFilter;
const contestTypeFilterSelector = (state) => state.contestTypeFilter;
const accessTypeFilterSelector = (state) => state.accessTypeFilter;

export const ugcSelector = createSelector(
  [sportsSelector,
    entriesSelector,
    draftGroupsSelector,
    usersSelector,
    newUserSelector,
    leagueEntrySelector,
    sportFilterSelector,
    contestTypeFilterSelector,
    accessTypeFilterSelector],
  (sports, entries, draftGroups, users, newUser, leagueEntry, sportFilter, contestTypeFilter, accessTypeFilter) => {
    return {
      sports,
      entries: selectBySport(entries, sportFilter),
      draftGroups: selectBySport(draftGroups, sportFilter),
      sportFilter,
      users,
      newUser,
      leagueEntry,
      contestTypeFilter,
      accessTypeFilter,
    };
  }
);
