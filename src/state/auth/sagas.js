import { put, takeLatest, all, call, select, delay } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import * as actions from './actions';
import * as sharedActions from 'state/shared/actions';
import * as authApi from 'services/auth'

import * as types from './constants';

export function* workerSignin(action) {
  const { data } = action.payload;
  try {
    const result = yield call(authApi.login, { mobile: data.mobile, password: data.password });
    localStorage.setItem('@allFitnessToken', result.data.token.token);

    yield put(actions.signinSuccess(result.data.token.token, result.data.user));
    yield put(sharedActions.redirect('/home'));
  } catch (e) {
    if (e.response.status === 401)
      yield put(actions.signinFailure({ msg: 'Celular e/ou senha invalidos.' }));
    else {
      yield put(actions.signinFailure({ msg: 'Erro ao logar.' }));
    }
    yield delay(3000);
  }
}

export function* workerSignUp(action) {
  const { data } = action.payload;
  try {
    const result = yield call(authApi.createUser, data);
    yield put(actions.signupSuccess(result.data));
    yield put(actions.changeTab('confirmRegister'));
  } catch (e) {
    console.error("error.");
    yield put(actions.signupFailure(e.response.data.error));
  }
}

export function* workerConfirmRegister(action){
  const { code } = action.payload;
  try {
    yield call(authApi.confirmRegister, {tokenValid: code});
    yield put(actions.confirmRegisterSuccess(true));
    yield delay(2500);
    yield put(actions.changeTab('signin'));

  } catch (e) {
    console.error("error.");
    yield put(actions.confirmRegisterFailure({ msg: ''}));
  }
}

export function* workerRememberPassword(action){
  const { mobile } = action.payload;
  try {
    yield call(authApi.forgotPassword, mobile);
    yield put(actions.rememberPasswordSuccess());
    yield put(actions.changeTab('resetPassword'));

  } catch (e) {
    console.error(e);
    yield put(actions.rememberPasswordFailure({ msg: 'Erro'}));
  }
}

export function* workerResetPassword(action){
  const { code, newPassword } = action.payload;
  try {
    yield call(authApi.resetPassword, {token: code, password: newPassword});
    yield put(actions.resetPasswordSuccess());
    yield delay(2500);
    yield put(actions.changeTab('signin'));

  } catch (e) {
    console.error(e);
    yield put(actions.resetPasswordFailure({ msg: 'Erro'}));
  }
}

export function* workerSignOut(){
  localStorage.clear();
  yield put(sharedActions.redirect('/'));
}

export default function* authSagas() {
  yield all([
    yield takeLatest(types.SIGNIN_USER, workerSignin),
    yield takeLatest(types.SIGNOUT, workerSignOut),
    yield takeLatest(types.SIGNUP_USER, workerSignUp),
    yield takeLatest(types.CONFIRM_REGISTER, workerConfirmRegister),
    yield takeLatest(types.REMEMBER_PASSWORD, workerRememberPassword),
    yield takeLatest(types.RESET_PASSWORD, workerResetPassword),
  ]);
}