import React, { Component, PropTypes } from 'react';
import { VisibilityFilters } from '../actions/UgcActions';

export default class AccessType extends Component {
  static propTypes = {
    accessType: PropTypes.oneOf([
      'SHOW_PRIVATE',
      'SHOW_PUBLIC'
    ]).isRequired,
    onSwitchClick: PropTypes.func.isRequired
  }

  constructor(props, context) {
    super(props, context);
  }

  render() {
    var { accessType, onSwitchClick } = this.props;

    return (
      <div>
      <h3>Access Type Picker</h3>
        <ul>
          <li className={accessType === VisibilityFilters.SHOW_PRIVATE ? 'selected' : 'unselected'}>
            <span onClick={() => onSwitchClick(VisibilityFilters.SHOW_PRIVATE)}>Private</span>
          </li>
          <li className={accessType === VisibilityFilters.SHOW_PUBLIC ? 'selected' : 'unselected'}>
            <span onClick={() => onSwitchClick(VisibilityFilters.SHOW_PUBLIC)} >Public</span>
          </li>
        </ul>
      </div>
    );
  }
}
