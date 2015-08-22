import React, { Component, PropTypes } from 'react';
import UserItem from '../components/UserItem';

export default class UsersPicker extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
    searchedUsers: PropTypes.array.isRequired,
    newUser: PropTypes.shape({
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
        {searchedUsers.length ?
          <div>
            <p>Search Results</p>
            {searchedUsers.map(searchedUser => <UserItem key={searchedUser.id} user={searchedUser} onAddClick={onAddClick} />)}
          </div> :
          null
        }
        {users.length ?
          <div>
            <p>Added Users</p>
            <ul>
              {users.map(user => <UserItem key={user.id} user={user} onRemoveClick={onRemoveClick} />)}
            </ul>
          </div> :
          null
        }
      </div>
    );
  }
}
