import expect from 'expect';
import * as actions from '../common/actions/UgcActions';
import * as types from '../common/constants/ActionTypes';
describe('actions', () => {
  it('should create an action to update an entry', () => {
    const id = 67;
    const quantity = 0;
    const expectedAction = {
      type: types.UPDATE_ENTRY,
      id,
      quantity
    };
    expect(actions.updateEntry(id, quantity)).toEqual(expectedAction);
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
    expect(actions.updateLeagueEntry(leagueEntry)).toEqual(expectedAction);
  });

  it('should create an action to clear entries', () => {
    const sportId = 1;
    const expectedAction = {
      type: types.CLEAR_ENTRIES,
      sportId
    };
    expect(actions.clearEntries(sportId)).toEqual(expectedAction);
  });

  it('should create an action to switch sports', () => {
    const id = 2;
    const expectedAction = {
      type: types.SWITCH_SPORT,
      id
    };
    expect(actions.switchSport(id)).toEqual(expectedAction);
  });

  it('should create an action to switch draftGroups', () => {
    const id = 2;
    const sportId = 3;
    const expectedAction = {
      type: types.SWITCH_DRAFTGROUP,
      id,
      sportId
    };
    expect(actions.switchDraftGroup(id, sportId)).toEqual(expectedAction);
  });

  it('should create an action to switch contest types', () => {
    const contestType = 'Test Contest Type';
    const expectedAction = {
      type: types.SWITCH_CONTEST_TYPE,
      contestType
    };
    expect(actions.switchContestType(contestType)).toEqual(expectedAction);
  });

  it('should create an action to switch access types', () => {
    const accessType = 'Test Access Type';
    const expectedAction = {
      type: types.SWITCH_ACCESS_TYPE,
      accessType
    };
    expect(actions.switchAccessType(accessType)).toEqual(expectedAction);
  });

  it('should create an action to create a user', () => {
    const user = {
      id: 5,
      userName: 'Test User 5'
    };
    const expectedAction = {
      type: types.CREATE_USER,
      user
    };
    expect(actions.createUser(user)).toEqual(expectedAction);
  });

  it('should create an action to delete a user', () => {
    const id = 5;
    const expectedAction = {
      type: types.DELETE_USER,
      id
    };
    expect(actions.deleteUser(id)).toEqual(expectedAction);
  });

  it('should create an action to update a user', () => {
    const userName ='Updated Test UserName';
    const expectedAction = {
      type: types.UPDATE_USER,
      userName
    };
    expect(actions.updateUser(userName)).toEqual(expectedAction);
  });
});
