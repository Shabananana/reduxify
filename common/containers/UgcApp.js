import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SportPicker from './SportPicker';
import DraftGroupPicker from './DraftGroupPicker';
import EntryPicker from './EntryPicker';
import UsersPicker from './UsersPicker';
import LeagueEntry from '../components/LeagueEntry';
import ContestType from '../components/ContestType';
import AccessType from '../components/AccessType';
import { VisibilityFilters } from '../constants/Filters';
//import { ugcSelector } from '../selectors/UgcSelectors';
import { switchSport, switchContestType, switchAccessType, switchDraftGroup, updateEntry, updateLeagueEntry, clearEntries, updateUser, fetchAndCreateUser, deleteUser } from '../actions/UgcActions';

class UgcApp extends Component {
  static propTypes = {
    sports: PropTypes.array.isRequired,
    draftGroups: PropTypes.array.isRequired,
    entries: PropTypes.array.isRequired,
    leagueEntry: PropTypes.object.isRequired,
    users: PropTypes.array.isRequired,
    sportFilter: PropTypes.oneOf([
      'SHOW_NFL',
      'SHOW_MLB',
      'SHOW_NBA'
    ]).isRequired,
    contestTypeFilter: PropTypes.oneOf([
      'SHOW_H2H',
      'SHOW_LEAGUE'
    ]).isRequired,
    accessTypeFilter: PropTypes.oneOf([
      'SHOW_PRIVATE',
      'SHOW_PUBLIC'
    ]).isRequired
  }

  submitEntries = () => {
    const { sports, draftGroups, entries, dispatch } = this.props;
    let formattedData = {
      sportId: sports.filter(sport => sport.selected)[0].id,
      entries: entries.filter(entry => entry.quantity > 0),
      draftGroupId: draftGroups.filter(draftGroup => draftGroup.selected)[0].id
    };
    console.log(formattedData);
    dispatch(clearEntries(formattedData.sportId));
  }

  render() {
    const { sports, draftGroups, entries, users, newUser, leagueEntry, sportFilter, contestTypeFilter, accessTypeFilter, dispatch } = this.props;
    return (
      <div>
        <SportPicker sports={sports} onSwitchClick={ id => dispatch(switchSport(id)) }/>
        <DraftGroupPicker draftGroups={draftGroups} onSwitchClick={ (id, sportId) => dispatch(switchDraftGroup(id, sportId)) } />
        <ContestType contestType={contestTypeFilter} onSwitchClick={ (contestType) => dispatch(switchContestType(contestType)) } />
        <AccessType accessType={accessTypeFilter} onSwitchClick={ (accessType) => dispatch(switchAccessType(accessType)) } />
        {accessTypeFilter === VisibilityFilters.SHOW_PRIVATE ?
          <UsersPicker users={users} newUser={newUser} onUpdateChange={ (userName) => dispatch(updateUser(userName)) } onAddClick={ (user) => dispatch(fetchAndCreateUser(user)) } onRemoveClick={ (id) => dispatch(deleteUser(id)) } /> :
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
    newUser: state.newUser,
    leagueEntry: selectBySport(state.leagueEntries, state.sportFilter)[0],
    sportFilter: state.sportFilter,
    contestTypeFilter: state.contestTypeFilter,
    accessTypeFilter: state.accessTypeFilter
  };
}

export default connect(select)(UgcApp);
