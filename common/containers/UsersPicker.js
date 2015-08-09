import React, { Component, PropTypes } from 'react';
import UserItem from '../components/UserItem';

export default class UsersPicker extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
    newUser: PropTypes.shape({
      id: PropTypes.number.isRequired,
      userName: PropTypes.string.isRequired
    }),
    onAddClick: PropTypes.func.isRequired,
    onRemoveClick: PropTypes.func.isRequired,
    onUpdateChange: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  addUser = (e) => {
    const { newUser, users, onAddClick } = this.props;

    if(newUser.userName.trim()) {
      onAddClick({ id: (users.length + 1), userName: newUser.userName });
    }
  }

  render() {
    const { users, newUser, onAddClick, onRemoveClick, onUpdateChange } = this.props;

    return (
      <div>
        <h3>User Picker</h3>
        <hr />
        <div>
          <input type="text" value={newUser.userName} onChange={ (e) => onUpdateChange(e.target.value) }/>
          <button onClick={this.addUser}>Add User</button>
        </div>
        <ul>
          {users.map(user => <UserItem key={user.id} user={user} onRemoveClick={onRemoveClick} />)}
        </ul>
      </div>
    );
  }
}
