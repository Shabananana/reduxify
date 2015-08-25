import React, { Component, PropTypes } from 'react';
import SportItem from '../components/SportItem';

export default class SportPicker extends Component {
  static propTypes = {
    sports: PropTypes.array.isRequired,
    onSwitchClick: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { sports, onSwitchClick } = this.props;

    return(
      <div>
      <h3>Sport Picker</h3>
        <ul>
          {sports.map(sport =>
            <SportItem key={sport.id} sport={sport} onSwitchClick={onSwitchClick} />
          )}
        </ul>
      </div>
    );
  }
}
