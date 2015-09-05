import Controller from 'cerebral';
import Model from 'cerebral-baobab';
import * as initialState from '../constants/InitialState';
import { VisibilityFilters } from '../constants/Filters';
const { SHOW_NFL, SHOW_H2H, SHOW_PRIVATE } = VisibilityFilters;
import fetch from 'isomorphic-fetch';

// Baobab specific options
const options = {};

// The initial state of the application
const state = {
  sports: initialState.initialSports,
  draftGroups: initialState.initialDraftGroups,
  entries: initialState.initialEntries,
  users: [],
  searchedUsers: [],
  newUser: initialState.initialUser,
  leagueEntry: initialState.initialLeagueEntries[0],
  sportFilter: SHOW_NFL,
  contestTypeFilter: SHOW_H2H,
  accessTypeFilter: SHOW_PRIVATE
};

// Instantiate the model
const model = Model(state, options);

// Any services you want each action to receive. In this
// example we pass in superagent ajax library
const services = {
  fetch: fetch
};

// Instantiate the controller
export default Controller(model, services);
