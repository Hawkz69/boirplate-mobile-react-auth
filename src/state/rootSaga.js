// External
import { all, fork } from 'redux-saga/effects';

// Internal
import authSagas from './auth/sagas';
import sharedSagas from './shared/sagas';

export default function* rootSaga() {
  yield all(
    [
      fork(authSagas),
      fork(sharedSagas),
    ],
  );
}
