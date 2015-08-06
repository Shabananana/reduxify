import React, { Component, PropTypes } from 'react';
import EntryItem from './EntryItem';

export default class EntryPicker extends Component {
  static propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      sportId: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      maxValue: propTypes.number.isRequired
    })),
    updateEntry: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { entries, updateEntry } = this.props;

    return(
      <ul>
        {entries.map(entry => {
          <EntryItem key={entry.id} entry={entry} updateEntry={updateEntry} />
        })}
      </ul>
    );
  }
};
