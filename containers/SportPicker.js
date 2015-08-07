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
      <ul>
        {sports.map(sport =>
          <SportItem key={sport.id} sport={sport} onSwitchClick={onSwitchClick} />
        )}
      </ul>
    );
  }
};
