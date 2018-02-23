import { combineReducers } from 'redux';
import sessionReducer from './session';
import sessionErrorsReducer from './session_errors_reducer';

export default combineReducers({
  session: sessionReducer,
  sessionErrors: sessionErrorsReducer
});
