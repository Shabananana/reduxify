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

class UgcApp_copy extends Component {
  static propTypes = {
    sports_copy: PropTypes.array.isRequired,
    draftGroups_copy: PropTypes.array.isRequired,
    entries_copy: PropTypes.array.isRequired,
    leagueEntry_copy: PropTypes.object.isRequired,
    users_copy: PropTypes.array.isRequired,
    searchedUsers_copy: PropTypes.array.isRequired,
    sportFilter_copy: PropTypes.oneOf([
      'SHOW_NFL',
      'SHOW_MLB',
      'SHOW_NBA'
    ]).isRequired,
    contestTypeFilter_copy: PropTypes.oneOf([
      'SHOW_H2H',
      'SHOW_LEAGUE'
    ]).isRequired,
    accessTypeFilter_copy: PropTypes.oneOf([
      'SHOW_PRIVATE',
      'SHOW_PUBLIC'
    ]).isRequired
  }

  submitEntries = () => {
    const { sports_copy, draftGroups_copy, entries_copy, dispatch_copy } = this.props;
    let formattedData = {
      sportId: sports_copy.filter(sport => sport.selected)[0].id,
      entries: entries_copy.filter(entry => entry.quantity > 0),
      draftGroupId: draftGroups_copy.filter(draftGroup => draftGroup.selected)[0].id
    };
    console.log('*****');
    console.log('submission...');
    console.dir(formattedData);
    console.log('*****');
    dispatch(clearEntries(formattedData.sportId));
  }

  render() {
    const { sports_copy, draftGroups_copy, entries_copy, users_copy, searchedUsers_copy, newUser_copy, leagueEntry_copy, sportFilter_copy, contestTypeFilter_copy, accessTypeFilter_copy, dispatch } = this.props;

    return (
      <div>
        <Link to="test">Go to ExampleRouteComponent!</Link>
        <Link to="/">Go to Regular UGC App!</Link>
        <SportPicker sports={sports_copy} onSwitchClick={ id => dispatch(switchSport(id)) }/>
        <DraftGroupPicker draftGroups={draftGroups_copy} onSwitchClick={ (id, sportId) => dispatch(switchDraftGroup(id, sportId)) } />
        <ContestType contestType={contestTypeFilter_copy} onSwitchClick={ (contestType) => dispatch(switchContestType(contestType)) } />
        <AccessType accessType={accessTypeFilter_copy} onSwitchClick={ (accessType) => dispatch(switchAccessType(accessType)) } />
        {accessTypeFilter_copy === VisibilityFilters.SHOW_PRIVATE ?
          <UsersPicker users={users_copy} searchedUsers={searchedUsers_copy} newUser={newUser_copy} fetchUsers={ (userName) => dispatch(fetchUsers(userName)) } onUpdateChange={ (userName) => dispatch(updateUser(userName)) } onAddClick={ (user) => dispatch(createUser(user)) } onRemoveClick={ (id) => dispatch(deleteUser(id)) } /> :
          <span></span>
        }
        {contestTypeFilter_copy === VisibilityFilters.SHOW_H2H ?
          <EntryPicker entries={entries_copy} onUpdateChange={ (id, quantity) => dispatch(updateEntry(id, quantity)) } onClear={ sportId => dispatch(clearEntries(sportId)) } /> :
          <LeagueEntry leagueEntry={leagueEntry_copy} entries={entries_copy} onUpdateChange={ (leagueEntry) => dispatch(updateLeagueEntry(leagueEntry)) }/>
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
    sports_copy: state.sports_copy,
    draftGroups_copy: selectBySport(state.draftGroups_copy, state.sportFilter_copy),
    entries_copy: selectBySport(state.entries_copy, state.sportFilter_copy),
    users_copy: state.users_copy,
    searchedUsers_copy: state.searchedUsers_copy,
    newUser_copy: state.newUser_copy,
    leagueEntry_copy: selectBySport(state.leagueEntries_copy, state.sportFilter_copy)[0],
    sportFilter_copy: state.sportFilter_copy,
    contestTypeFilter_copy: state.contestTypeFilter_copy,
    accessTypeFilter_copy: state.accessTypeFilter_copy
  };
}

export default connect(select)(UgcApp_copy);
