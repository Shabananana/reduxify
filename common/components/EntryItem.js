import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { styles } from '../../styles/input';

@Radium
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
    if(typeof quantity === 'number' && quantity <= this.props.entry.maxEntries && quantity >= 0) {
      this.props.onUpdateChange(this.props.entry.id, quantity);
    }
  }

  render() {
    const { entry, onUpdateChange } = this.props;
    const maxEntriesReached = entry.quantity === entry.maxEntries

    return (
      <li>
        <span>{`Id: ${entry.id} - SportId: ${entry.sportId} Quantity: ${entry.quantity} Price: $${entry.price} `}</span>
        <input type='number' style={[styles.base, maxEntriesReached && styles.filled]} value={entry.quantity} onChange={this.handleUpdate} />
      </li>
    );
  }
}
