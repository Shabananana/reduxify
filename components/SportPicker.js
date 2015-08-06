import React, { Component, PropTypes } from 'react';
import SportItem from './SportItem';

export default class SportPicker extends Component {
  static propTypes = {
    sports: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      selected: PropTypes.bool.isRequired
    })),
    switchSport: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { sports, switchSport } = this.props;

    return(
      <ul>
        {sports.map(sport => {
          <SportItem key={sport.id} sport={sport} switchSport={switchSport} />
        })}
      </ul>
    );
  }
};
