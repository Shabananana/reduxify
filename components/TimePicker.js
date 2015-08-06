import React, { Component, PropTypes } from 'react';
import TimeItem from './TimeItem';

export default class TimePicker extends Component {
  static propTypes = {
    draftGroups: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      selected: PropTypes.bool.isRequired
    })),
    switchDraftGroup: PropTypes.func.isRequired
  }

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { draftGroups, switchDraftGroup } = this.props;

    return (
      <ul>
        {draftGroups.map(draftGroup => {
          <TimeItem key={draftgroup.id} draftGroup={draftGroup} switchDraftGroup={switchDraftGroup} />
        })}
      </ul>
    );
  }
}
