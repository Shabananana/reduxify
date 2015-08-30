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
const searchedUsersSelector = (state) => state.searchedUsers;
const leagueEntriesSelector = (state) => state.leagueEntries;
const sportFilterSelector = (state) => state.sportFilter;
const contestTypeFilterSelector = (state) => state.contestTypeFilter;
const accessTypeFilterSelector = (state) => state.accessTypeFilter;

export const ugcSelector = createSelector(
  [sportsSelector,
    entriesSelector,
    draftGroupsSelector,
    usersSelector,
    newUserSelector,
    searchedUsersSelector,
    leagueEntriesSelector,
    sportFilterSelector,
    contestTypeFilterSelector,
    accessTypeFilterSelector],
  (sports, entries, draftGroups, users, newUser, searchedUsers, leagueEntries, sportFilter, contestTypeFilter, accessTypeFilter) => {
    return {
      sports,
      entries: selectBySport(entries, sportFilter),
      draftGroups: selectBySport(draftGroups, sportFilter),
      sportFilter,
      users,
      newUser,
      searchedUsers,
      leagueEntry: selectBySport(leagueEntries, sportFilter)[0],
      contestTypeFilter,
      accessTypeFilter,
    };
  }
);
