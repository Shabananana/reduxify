import React, { Component, PropTypes } from 'react';
import { VisibilityFilters } from '../actions/UgcActions';

export default class DraftGroup extends Component {
  static propTypes = {
    contestType: PropTypes.oneOf([
      'SHOW_H2H',
      'SHOW_LEAGUE'
    ]).isRequired,
    onSwitchClick: PropTypes.func.isRequired
  }

  constructor(props, context) {
    super(props, context);
  }

  render() {
    var { contestType, onSwitchClick } = this.props;

    return (
      <div>
      <h3>Contest Type Picker</h3>
        <ul>
          <li className={contestType === VisibilityFilters.SHOW_H2H ? 'selected' : 'unselected'}>
            <span onClick={() => onSwitchClick(VisibilityFilters.SHOW_H2H)}>Head to Head</span>
          </li>
          <li className={contestType === VisibilityFilters.SHOW_LEAGUE ? 'selected' : 'unselected'}>
            <span onClick={() => onSwitchClick(VisibilityFilters.SHOW_LEAGUE)} >League</span>
          </li>
        </ul>
      </div>
    );
  }
}
