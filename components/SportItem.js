import React, { Component, PropTypes } from 'react';

export default class SportItem extends Component {
  static propTypes = {
    sport: React.PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      selected: PropTypes.bool.isRequired
    }),
    onSwitchClick: PropTypes.func.isRequired
  }

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { sport, onSwitchClick } = this.props;

    return (
      <li className={(sport.selected ? 'selected' : 'unselected')} onClick={() => onSwitchClick(sport.id)}>
        <span>{sport.name}</span>
      </li>
    );
  }
}
