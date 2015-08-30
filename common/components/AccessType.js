import React, { Component, PropTypes } from 'react';
import { VisibilityFilters } from '../constants/Filters';
import Radium from 'radium';
import { styles } from '../../styles/listItem';

@Radium
export default class AccessType extends Component {
  static propTypes = {
    accessType: PropTypes.oneOf([
      VisibilityFilters.SHOW_PRIVATE,
      VisibilityFilters.SHOW_PUBLIC
    ]).isRequired,
    onSwitchClick: PropTypes.func.isRequired
  }

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { accessType, onSwitchClick } = this.props;

    return (
      <div>
        <h3>Access Type Picker</h3>
        <ul>
          <li style={[styles.base, accessType === VisibilityFilters.SHOW_PRIVATE && styles.selected]}>
            <span onClick={() => onSwitchClick(VisibilityFilters.SHOW_PRIVATE)}>Private</span>
          </li>
          <li style={[styles.base, accessType === VisibilityFilters.SHOW_PUBLIC && styles.selected]}>
            <span onClick={() => onSwitchClick(VisibilityFilters.SHOW_PUBLIC)} >Public</span>
          </li>
        </ul>
      </div>
    );
  }
}
