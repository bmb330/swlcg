/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  locationBeforeTransitions: null,
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload,
      });
    default:
      return state;
  }
}

import { OPEN_DRAWER, CLOSE_DRAWER, OPEN_SEARCH, CLOSE_SEARCH } from './actions';

const appInitialState = fromJS({
  drawerOpen: false,
  searchOpen: false,
});

function appReducer(state = appInitialState, action) {
  switch (action.type) {
    case OPEN_DRAWER:
      return { ...state, drawerOpen: true };
    case CLOSE_DRAWER:
      return { ...state, drawerOpen: false };
    case OPEN_SEARCH:
      return { ...state, searchOpen: true };
    case CLOSE_SEARCH:
      return { ...state, searchOpen: false };
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  return combineReducers({
    route: routeReducer,
    app: appReducer,
    ...asyncReducers,
  });
}
