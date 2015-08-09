import React, { Component, PropTypes } from 'react';
import { LeagueEntrySizes, LeagueEntryFees, LeagueEntryPrizeStructures } from '../actions/UgcActions';

export default class LeagueEntry extends Component {
  static propTypes = {
    leagueEntry: PropTypes.shape({
      name: PropTypes.string.isRequired,
      size: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      prizeStructure: PropTypes.string.isRequired
    }).isRequired,
    onUpdateChange: PropTypes.func.isRequired
  }

  constructor(props, context) {
    super(props, context);
  }

  handleUpdate = (e) => {
    let updatedEntry = { ...this.props.leagueEntry };
    let updatedValue = e.target.value;
    if(!isNaN(parseInt(e.target.value))) {
      updatedValue = parseInt(e.target.value);
    }
    updatedEntry[(e.target.name)] = updatedValue;
    this.props.onUpdateChange(updatedEntry);
  }

  render() {
    const { leagueEntry, onUpdateChange, entries } = this.props;
    const sizesOptions = LeagueEntrySizes.map(size => <option key={size}>{size}</option>);
    const feeOptions = entries.map(entry => <option key={entry.price}>{entry.price}</option>);
    let prizeStructureOptions = [];
    for(let [key, value] of LeagueEntryPrizeStructures) {
      prizeStructureOptions.push(<option key={key}>{value}</option>);
    }

    return (
      <div>
        <h3>League Entry Picker</h3>
        <div>
          <input type='text' value={leagueEntry.name} name='name' onChange={this.handleUpdate} placeholder='Enter a league name!' />
          <select value={leagueEntry.size} name='size' onChange={this.handleUpdate}>
            {sizesOptions}
          </select>
          <select value={leagueEntry.price} name='fee' onChange={this.handleUpdate}>
            {feeOptions}
          </select>
          <select value={leagueEntry.prizeStructure} name='prizeStructure' onChange={this.handleUpdate}>
            {prizeStructureOptions}
          </select>
        </div>
      </div>
    );
  }
}
