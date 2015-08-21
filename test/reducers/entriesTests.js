import expect from 'expect';
import reducer from '../../common/reducers/entries';
import * as types from '../../common/constants/ActionTypes';
import { initialEntries } from '../../common/constants/InitialState';

describe('entries reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialEntries);
  });

  it('should handle UPDATE_ENTRY', () => {
    const id = 7;
    const quantity = 31;
    const updatedState = initialEntries.map(entry =>
      entry.id === id ?
        { ...entry, quantity: quantity } :
        { ...entry }
    );
    expect(
      reducer(initialEntries, {
        type: types.UPDATE_ENTRY,
        id,
        quantity
      })
    ).toEqual(updatedState);
  });

  it('should handle CLEAR_ENTRIES', () => {
    const sportId = 2;
    const updatedState = initialEntries.map(entry =>
      entry.sportId === sportId ?
        { ...entry, quantity: 0 } :
        { ...entry }
    );
    expect(
      reducer(initialEntries, {
        type: types.CLEAR_ENTRIES,
        sportId
      })
    ).toEqual(updatedState);
  });
});
