import React, { Component, PropTypes } from 'react';
import EntryItem from '../components/EntryItem';
import { SHOW_NFL, SHOW_MLB, SHOW_NBA } from '../constants/UgcFilters';

const SPORT_FILTERS = {
  [SHOW_NFL]: entry => entry.sportId === 1,
  [SHOW_MLB]: entry => entry.sportId === 2,
  [SHOW_NBA]: entry => entry.sportId === 3
};

export default class EntryPicker extends Component {
  static propTypes = {
    entries: PropTypes.array.isRequired,
    onUpdateChange: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.state = { filter: SHOW_NFL };
  }

  render() {
    const { entries, onUpdateChange, clearEntries } = this.props;
    const { filter } = this.state;

    const filteredEntries = entries.filter(SPORT_FILTERS[filter]);

    return(
      <div>
      <h3>Entry Picker</h3>
      <span onClick={() => onClear(filteredEntries[0].sportId)}>Clear All</span>
        <ul>
          {filteredEntries.map(entry =>
            <EntryItem key={entry.id} entry={entry} onUpdateChange={onUpdateChange} />
          )}
        </ul>
      </div>
    );
  }
};
