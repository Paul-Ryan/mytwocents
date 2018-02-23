import { combineReducers } from 'redux';
import sessionReducer from './session';
import errorReducer from './session_errors_reducer';
import userReducer from './user';
import LocationReducer from './location_reducer';
import reviewReducer from './review_reducer.js';

export default combineReducers({
  session: sessionReducer,
  errors: errorReducer,
  users: userReducer,
  locations: LocationReducer,
  reviews: reviewReducer
});
