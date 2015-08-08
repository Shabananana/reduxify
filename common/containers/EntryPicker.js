import React, { Component, PropTypes } from 'react';
import EntryItem from '../components/EntryItem';

export default class EntryPicker extends Component {
  static propTypes = {
    entries: PropTypes.array.isRequired,
    onUpdateChange: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { entries, onUpdateChange, onClear } = this.props;

    return(
      <div>
      <h3>Entry Picker</h3>
      <strong>Total Price: ${entries.reduce((a, b) =>  a + (b.quantity * b.price), 0)}</strong>
      <br />
      <button onClick={() => onClear(entries[0].sportId)}>Clear All</button>
        <ul>
          {entries.map(entry =>
            <EntryItem key={entry.id} entry={entry} onUpdateChange={onUpdateChange} />
          )}
        </ul>
      </div>
    );
  }
};
