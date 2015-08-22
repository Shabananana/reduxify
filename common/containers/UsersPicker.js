import React, { Component, PropTypes } from 'react';
import UserItem from '../components/UserItem';

export default class UsersPicker extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
    searchedUsers: PropTypes.array.isRequired,
    newUser: PropTypes.shape({
      id: PropTypes.number.isRequired,
      userName: PropTypes.string.isRequired
    }),
    onAddClick: PropTypes.func.isRequired,
    onRemoveClick: PropTypes.func.isRequired,
    onUpdateChange: PropTypes.func.isRequired,
    fetchUsers: PropTypes.func.isRequired
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
    const { users, searchedUsers, newUser, onAddClick, onRemoveClick, onUpdateChange, fetchUsers } = this.props;

    return (
      <div>
        <h3>User Picker</h3>
        <hr />
        <div>
          <input type="text" value={newUser.userName} onChange={ (e) => fetchUsers(e.target.value) }/>
          <strong>Search for User</strong>
        </div>
        <div>
          {searchedUsers.map(searchedUser => <p key={searchedUser.userName}>{searchedUser.userName}</p>)}
        </div>
        <ul>
          {users.map(user => <UserItem key={user.id} user={user} onRemoveClick={onRemoveClick} />)}
        </ul>
      </div>
    );
  }
}
