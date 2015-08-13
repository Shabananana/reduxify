import expect from 'expect';
import reducer from '../../common/reducers/entries';
import * as types from '../../common/constants/ActionTypes';

const initialNbaEntries = [
  {
    id: 8,
    sportId: 3,
    quantity: 0,
    price: 15,
    maxEntries: 50
  },
  {
    id: 7,
    sportId: 3,
    quantity: 0,
    price: 40,
    maxEntries: 50
  }
];

const initialMlbEntries = [
  {
    id: 5,
    sportId: 2,
    quantity: 0,
    price: 0,
    maxEntries: 50
  },
  {
    id: 6,
    sportId: 2,
    quantity: 0,
    price: 1,
    maxEntries: 50
  },
  {
    id: 7,
    sportId: 2,
    quantity: 0,
    price: 200,
    maxEntries: 50
  }
];

const initialNflEntries = [
  {
    id: 1,
    sportId: 1,
    quantity: 3,
    price: 0,
    maxEntries: 50
  },
  {
    id: 2,
    sportId: 1,
    quantity: 6,
    price: 1,
    maxEntries: 50
  },
  {
    id: 3,
    sportId: 1,
    quantity: 0,
    price: 5,
    maxEntries: 50
  },
  {
    id: 4,
    sportId: 1,
    quantity: 3,
    price: 10,
    maxEntries: 50
  }
];

const initialState = [...initialNflEntries, ...initialMlbEntries, ...initialNbaEntries];

describe('entries reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle UPDATE_ENTRY', () => {
    const id = 7;
    const quantity = 31;
    const updatedState = initialState.map(entry =>
      entry.id === id ?
        { ...entry, quantity: quantity } :
        { ...entry }
    );
    expect(
      reducer(initialState, {
        type: types.UPDATE_ENTRY,
        id,
        quantity
      })
    ).toEqual(updatedState);
  });

  it('should handle CLEAR_ENTRIES', () => {
    const sportId = 2;
    const updatedState = initialState.map(entry =>
      entry.sportId === sportId ?
        { ...entry, quantity: 0 } :
        { ...entry }
    );
    expect(
      reducer(initialState, {
        type: types.CLEAR_ENTRIES,
        sportId
      })
    ).toEqual(updatedState);
  });
});
