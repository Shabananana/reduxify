import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { styles } from '../../styles/listItem';

@Radium
export default class DraftGroup extends Component {
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
      <li style={[styles.base, draftGroup.selected && styles.selected]} onClick={() => onSwitchClick(draftGroup.id, draftGroup.sportId)}>
        <span>{draftGroup.name}</span>
      </li>
    );
  }
}
