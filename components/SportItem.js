import React, { Component, PropTypes } from 'react';

export default class SportItem extends Component {
  static propTypes = {
    sport: React.PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      selected: PropTypes.bool.isRequired
    },
    switchSport: PropTypes.func.isRequired
  }

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { sport, switchSport } = this.props;

    return (
      <li className={(sport.selected ? 'selected' : 'unselected')} onClick={() => switchSport(sport.id)}>
        <span>{sport.name}</span>
      </li>
    );
  }
}
