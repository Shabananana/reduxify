import React, { Component, PropTypes } from 'react';

export default class EntryItem extends Component {
  static propTypes = {
    entry: PropTypes.shape({
      id: PropTypes.number.isRequired,
      sportId: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      maxEntries: PropTypes.number.isRequired
    }),
    onUpdateChange: PropTypes.func.isRequired
  }

  constructor(props, context) {
    super(props, context);
  }

  handleUpdate = (e) => {
    let quantity = parseInt(e.target.value);
    if(quantity <= this.props.entry.maxEntries) {
      this.props.onUpdateChange(this.props.entry.id, quantity);
    }
  }

  render() {
    const { entry, onUpdateChange } = this.props;
    const maxEntriesReached = entry.quantity === entry.maxEntries

    return (
      <li>
        <span>{`Id: ${entry.id} - SportId: ${entry.sportId} Quantity: ${entry.quantity}`}</span>
        <input type='number' className={maxEntriesReached ? 'filled' : 'unfilled'} value={entry.quantity} onChange={this.handleUpdate} />
      </li>
    );
  }
}
