import React, { Component } from 'react';
import { connect } from 'react-redux';
import SportPicker from './SportPicker';
import TimePicker from './TimePicker';
import EntryPicker from './EntryPicker';
import { switchSport, switchDraftGroup, updateEntry, clearEntries } from '../actions/UgcActions';

class UgcApp extends Component {
  render() {
    const { sports, draftGroups, entries, visibilityFilter, dispatch } = this.props;
    return (
      <div>
        <SportPicker sports={sports} onSwitchClick={ id => dispatch(switchSport(id)) }/>
        <TimePicker draftGroups={draftGroups} visibilityFilter={visibilityFilter} onSwitchClick={ (id, sportId) => dispatch(switchDraftGroup(id, sportId)) } />
        <EntryPicker entries={entries} visibilityFilter={visibilityFilter} onUpdateChange={ (id, sportId) => dispatch(updateEntry(id, sportId)) } onClear={ sportId => dispatch(clearEntries(sportId)) } />
      </div>
    );
  }
}

function select(state) {
  return {
    sports: state.sports,
    draftGroups: state.draftGroups,
    entries: state.entries
  };
}

export default connect(select)(UgcApp);
