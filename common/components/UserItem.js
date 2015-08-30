import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { styles } from '../../styles/button';

@Radium
export default class UserItem extends Component {
  static propTypes = {
    user: React.PropTypes.shape({
      id: PropTypes.string.isRequired,
      userName: PropTypes.string.isRequired
    }),
    onRemoveClick: PropTypes.func,
    onAddClick: PropTypes.func
  }

  render() {
    const { user, onRemoveClick, onAddClick } = this.props;

    return (
      <li>
        <span>{user.userName}</span>
        {onRemoveClick !== undefined ?
          <button style={[styles.base, styles.remove]} onClick={ () => onRemoveClick(user.id) }>Remove User</button> :
          <button style={styles.base} onClick={ () => onAddClick(user) }>Add User</button>
        }
      </li>
    );
  }
}
