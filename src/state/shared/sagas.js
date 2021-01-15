import { put, takeLatest, all, call, select, delay } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { signinSuccess } from './actions';

import * as types from './constants';

export function* workerRedirect(action) {
  const { route } = action.payload;
  yield put(push(route));
}

export default function* sharedSagas() {
  yield all([
    yield takeLatest(types.REDIRECT, workerRedirect),
  ]);
}