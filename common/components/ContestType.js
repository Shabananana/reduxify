import React, { Component, PropTypes } from 'react';
import { VisibilityFilters } from '../constants/Filters';
import Radium from 'radium';
import { styles } from '../../styles/listItem';

@Radium
export default class DraftGroup extends Component {
  static propTypes = {
    contestType: PropTypes.oneOf([
      VisibilityFilters.SHOW_H2H,
      VisibilityFilters.SHOW_LEAGUE
    ]).isRequired,
    onSwitchClick: PropTypes.func.isRequired
  }

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { contestType, onSwitchClick } = this.props;

    return (
      <div>
      <h3>Contest Type Picker</h3>
        <ul>
          <li style={[styles.base, contestType === VisibilityFilters.SHOW_H2H && styles.selected]}>
            <span onClick={() => onSwitchClick(VisibilityFilters.SHOW_H2H)}>Head to Head</span>
          </li>
          <li style={[styles.base, contestType === VisibilityFilters.SHOW_LEAGUE && styles.selected]}>
            <span onClick={() => onSwitchClick(VisibilityFilters.SHOW_LEAGUE)} >League</span>
          </li>
        </ul>
      </div>
    );
  }
}
