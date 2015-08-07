import React, { Component, PropTypes } from 'react';
import TimeItem from '../components/TimeItem';
import { VisibilityFilters } from '../actions/UgcActions';

function selectDraftGroups(draftGroups, filter) {
  switch (filter) {
  case VisibilityFilters.SHOW_NFL:
    return draftGroups.filter(draftGroup => draftGroup.sportId === 1);
  case VisibilityFilters.SHOW_MLB:
    return draftGroups.filter(draftGroup => draftGroup.sportId === 2);
  case VisibilityFilters.SHOW_NBA:
    return draftGroups.filter(draftGroups => draftGroup.sportId === 3);
  }
}

export default class TimePicker extends Component {
  static propTypes = {
    draftGroups: PropTypes.array.isRequired,
    onSwitchClick: PropTypes.func.isRequired,
    visibilityFilter: PropTypes.oneOf([
      'SHOW_ALL',
      'SHOW_COMPLETED',
      'SHOW_ACTIVE'
    ]).isRequired
  }

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { draftGroups, onSwitchClick, visibilityFilter } = this.props;

    const filteredDraftGroups = selectDraftGroups(draftGroups, visibilityFilter);

    return (
      <ul>
        {filteredDraftGroups.map(draftGroup =>
          <TimeItem key={draftGroup.id} draftGroup={draftGroup} onSwitchClick={onSwitchClick} />
        )}
      </ul>
    );
  }
}
