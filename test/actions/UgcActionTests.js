import { expect } from 'chai';
import * as actions from '../../common/actions/UgcActions';
import * as types from '../../common/constants/ActionTypes';
describe('actions', () => {
  it('should create an action to update an entry', () => {
    const id = 67;
    const quantity = 0;
    const expectedAction = {
      type: types.UPDATE_ENTRY,
      id,
      quantity
    };
    expect(actions.updateEntry(id, quantity)).to.deep.equal(expectedAction);
  });

  it('should create an action to update a league entry', () => {
    const leagueEntry = {
      name: 'Test League Entry',
      size: 5,
      price: 6.67,
      prizeStructure: 'Test Prize Structure'
    };
    const expectedAction = {
      type: types.UPDATE_LEAGUE_ENTRY,
      leagueEntry
    };
    expect(actions.updateLeagueEntry(leagueEntry)).to.deep.equal(expectedAction);
  });

  it('should create an action to clear entries', () => {
    const sportId = 1;
    const expectedAction = {
      type: types.CLEAR_ENTRIES,
      sportId
    };
    expect(actions.clearEntries(sportId)).to.deep.equal(expectedAction);
  });

  it('should create an action to switch sports', () => {
    const id = 2;
    const expectedAction = {
      type: types.SWITCH_SPORT,
      id
    };
    expect(actions.switchSport(id)).to.deep.equal(expectedAction);
  });

  it('should create an action to switch draftGroups', () => {
    const id = 2;
    const sportId = 3;
    const expectedAction = {
      type: types.SWITCH_DRAFTGROUP,
      id,
      sportId
    };
    expect(actions.switchDraftGroup(id, sportId)).to.deep.equal(expectedAction);
  });

  it('should create an action to switch contest types', () => {
    const contestType = 'Test Contest Type';
    const expectedAction = {
      type: types.SWITCH_CONTEST_TYPE,
      contestType
    };
    expect(actions.switchContestType(contestType)).to.deep.equal(expectedAction);
  });

  it('should create an action to switch access types', () => {
    const accessType = 'Test Access Type';
    const expectedAction = {
      type: types.SWITCH_ACCESS_TYPE,
      accessType
    };
    expect(actions.switchAccessType(accessType)).to.deep.equal(expectedAction);
  });

  it('should create an action to create a user', () => {
    const user = {
      id: 'awef_f$',
      userName: 'Test User 5'
    };
    const expectedAction = {
      type: types.CREATE_USER,
      user
    };
    expect(actions.createUser(user)).to.deep.equal(expectedAction);
  });

  it('should create an action to receive users', () => {
    //mock formatted data as Reddit API returns
    const users = [
      { data:
        {
          id: 'a',
          author: 'Test User 1'
        }
      },
      { data:
        {
          id: 'b',
          author: 'Test User 2'
        }
      },
      { data:
        {
          id: 'c',
          author: 'Test User 3'
        }
      },
      {
        data: {
          id: 'd',
          author: 'Test User 4'
        }
      },
      {
        data: {
          id: 'e',
          author: 'Test User 5'
        }
      }
    ];
    const json = {
      data: {
        children: [ ...users ]
      }
    };

    const expectedAction = {
      type: types.RECEIVE_USERS,
      users
    };
    const result = actions.receiveUsers(json);
    expect(result).to.have.property('users').with.length(4);
    expect(result).to.have.property('type').and.equal(types.RECEIVE_USERS);
  });

  it('should create an action to delete a user', () => {
    const id = 5;
    const expectedAction = {
      type: types.DELETE_USER,
      id
    };
    expect(actions.deleteUser(id)).to.deep.equal(expectedAction);
  });

  it('should create an action to update a user', () => {
    const userName ='Updated Test UserName';
    const expectedAction = {
      type: types.UPDATE_USER,
      userName
    };
    expect(actions.updateUser(userName)).to.deep.equal(expectedAction);
  });
});
