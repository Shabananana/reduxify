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
    const { entry } = this.props;

    return (
      <li>
        <span>{`Id: ${entry.id} - SportId: ${entry.sportId}`}</span>
        <span>{entry.quantity}</span>
        <input type='number' value={entry.quantity} onChange={(e) => this.handleUpdate(e)} />
      </li>
    );
  }
}
