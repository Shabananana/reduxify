import React, { Component, PropTypes } from 'react';

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
          <button onClick={ () => onRemoveClick(user.id) }>Remove User</button> :
          <button onClick={ () => onAddClick(user) }>Add User</button>
        }
      </li>
    );
  }
}
