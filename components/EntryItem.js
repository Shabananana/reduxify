import React, { Component, PropTypes } from 'react';

export default class EntryItem extends Component {
  static propTypes = {
    entry: PropTypes.shape({
      id: PropTypes.number.isRequired,
      sportId: propTypes.number.isRequired,
      value: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      maxEntries: PropTypes.number.isRequired
    },
    updateEntry: PropTypes.func.isRequired
  }

  constructor(props, context) {
    super(props, context);
  }

  handleUpdate = (e) => {
    if(e.target.value <= maxEntries) {
      this.props.updateEntry(this.props.entry.id, e.target.value);
    }
  }

  render() {
    const { entry, updateEntry } = this.props;

    return (
      <li>
        <span>{entry.value}</span>
        <input type='number' value={entry.value} onChange={(e) => this.handleUpdate(e)}>
      </li>
    );
  }
}
