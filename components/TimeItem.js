import React, { Component, PropTypes } from 'react';

export default class TimeItem extends Component {
  static propTypes = {
    draftgroup: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      selected: PropTypes.bool.isRequired
    },
    switchDraftgroup: PropTypes.func.isRequired
  }

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { draftgroup, switchDraftgroup } = this.props;

    return (
      <li className={(draftgroup.selected ? 'selected' : 'unselected')} onClick={() => switchDraftgroup(draftgroup.id)}>
        <span>{draftgroup.name}</span>
      </li>
    );
  }
}
