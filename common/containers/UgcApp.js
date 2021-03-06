import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import SportPicker from './SportPicker';
import DraftGroupPicker from './DraftGroupPicker';
import EntryPicker from './EntryPicker';
import UsersPicker from './UsersPicker';
import LeagueEntry from '../components/LeagueEntry';
import ContestType from '../components/ContestType';
import AccessType from '../components/AccessType';
import { VisibilityFilters } from '../constants/Filters';
import { switchSport, switchContestType, switchAccessType, switchDraftGroup, updateEntry, updateLeagueEntry, clearEntries, updateUser, fetchUsers, createUser, deleteUser } from '../actions/UgcActions';

class UgcApp extends Component {
  static propTypes = {
    sports: PropTypes.array.isRequired,
    draftGroups: PropTypes.array.isRequired,
    entries: PropTypes.array.isRequired,
    leagueEntry: PropTypes.object.isRequired,
    users: PropTypes.array.isRequired,
    searchedUsers: PropTypes.array.isRequired,
    sportFilter: PropTypes.oneOf([
      VisibilityFilters.SHOW_NFL,
      VisibilityFilters.SHOW_MLB,
      VisibilityFilters.SHOW_NBA
    ]).isRequired,
    contestTypeFilter: PropTypes.oneOf([
      VisibilityFilters.SHOW_H2H,
      VisibilityFilters.SHOW_LEAGUE
    ]).isRequired,
    accessTypeFilter: PropTypes.oneOf([
      VisibilityFilters.SHOW_PRIVATE,
      VisibilityFilters.SHOW_PUBLIC
    ]).isRequired
  }

  submitEntries = () => {
    const { sports, draftGroups, entries, dispatch } = this.props;
    let formattedData = {
      sportId: sports.filter(sport => sport.selected)[0].id,
      entries: entries.filter(entry => entry.quantity > 0),
      draftGroupId: draftGroups.filter(draftGroup => draftGroup.selected)[0].id
    };
    console.log('*****');
    console.log('submission...');
    console.dir(formattedData);
    console.log('*****');
    dispatch(clearEntries(formattedData.sportId));
  }

  render() {
    const { sports, draftGroups, entries, users, searchedUsers, newUser, leagueEntry, sportFilter, contestTypeFilter, accessTypeFilter, dispatch } = this.props;

    return (
      <div>
        <Link to="test">Go to ExampleRouteComponent!</Link>
        <SportPicker sports={sports} onSwitchClick={ id => dispatch(switchSport(id)) }/>
        <DraftGroupPicker draftGroups={draftGroups} onSwitchClick={ (id, sportId) => dispatch(switchDraftGroup(id, sportId)) } />
        <ContestType contestType={contestTypeFilter} onSwitchClick={ (contestType) => dispatch(switchContestType(contestType)) } />
        <AccessType accessType={accessTypeFilter} onSwitchClick={ (accessType) => dispatch(switchAccessType(accessType)) } />
        {accessTypeFilter === VisibilityFilters.SHOW_PRIVATE ?
          <UsersPicker users={users} searchedUsers={searchedUsers} newUser={newUser} fetchUsers={ (userName) => dispatch(fetchUsers(userName)) } onUpdateChange={ (userName) => dispatch(updateUser(userName)) } onAddClick={ (user) => dispatch(createUser(user)) } onRemoveClick={ (id) => dispatch(deleteUser(id)) } /> :
          <span></span>
        }
        {contestTypeFilter === VisibilityFilters.SHOW_H2H ?
          <EntryPicker entries={entries} onUpdateChange={ (id, quantity) => dispatch(updateEntry(id, quantity)) } onClear={ sportId => dispatch(clearEntries(sportId)) } /> :
          <LeagueEntry leagueEntry={leagueEntry} entries={entries} onUpdateChange={ (leagueEntry) => dispatch(updateLeagueEntry(leagueEntry)) }/>
        }
        <button onClick={this.submitEntries}>Submit Entries</button>
      </div>
    );
  }
}

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

function select(state) {
  return {
    sports: state.sports,
    draftGroups: selectBySport(state.draftGroups, state.sportFilter),
    entries: selectBySport(state.entries, state.sportFilter),
    users: state.users,
    searchedUsers: state.searchedUsers,
    newUser: state.newUser,
    leagueEntry: selectBySport(state.leagueEntries, state.sportFilter)[0],
    sportFilter: state.sportFilter,
    contestTypeFilter: state.contestTypeFilter,
    accessTypeFilter: state.accessTypeFilter
  };
}

export default connect(select)(UgcApp);
