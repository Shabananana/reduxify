import React, { Component, PropTypes } from 'react';

export default class SportItem extends Component {
  static propTypes = {
    user: React.PropTypes.shape({
      id: PropTypes.number.isRequired,
      userName: PropTypes.string.isRequired
    }),
    onRemoveClick: PropTypes.func.isRequired
  }

  render() {
    const { user, onRemoveClick } = this.props;

    return (
      <li>
        <span>{user.userName}</span>
        <button onClick={ () => onRemoveClick(user.id) }>Remove User</button>
      </li>
    );
  }
}
