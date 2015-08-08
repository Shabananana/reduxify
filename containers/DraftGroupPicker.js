import React, { Component, PropTypes } from 'react';
import DraftGroup from '../components/DraftGroup';

export default class DraftGroupPicker extends Component {
  static propTypes = {
    draftGroups: PropTypes.array.isRequired,
    onSwitchClick: PropTypes.func.isRequired
  }

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { draftGroups, onSwitchClick, visibilityFilter } = this.props;

    return (
      <ul>
        {draftGroups.map(draftGroup =>
          <DraftGroup key={draftGroup.id} draftGroup={draftGroup} onSwitchClick={onSwitchClick} />
        )}
      </ul>
    );
  }
}
