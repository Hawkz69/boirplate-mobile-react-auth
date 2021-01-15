// External
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from 'routes/history';

// Internal
import authReducer from './auth/reducer';
import sharedReducer from './shared/reducer';

const rootReducer = combineReducers({
  // modals
  router: connectRouter(history),
  auth: authReducer,
  shared: sharedReducer,

});

export default rootReducer;