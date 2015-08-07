import React, { Component, PropTypes } from 'react';

export default class TimeItem extends Component {
  static propTypes = {
    draftGroup: PropTypes.shape({
      id: PropTypes.number.isRequired,
      sportId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      selected: PropTypes.bool.isRequired
    }),
    onSwitchClick: PropTypes.func.isRequired
  }

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { draftGroup, onSwitchClick } = this.props;

    return (
      <li className={(draftGroup.selected ? 'selected' : 'unselected')} onClick={() => onSwitchClick(draftGroup.id, draftGroup.sportId)}>
        <span>{draftGroup.name}</span>
      </li>
    );
  }
}
