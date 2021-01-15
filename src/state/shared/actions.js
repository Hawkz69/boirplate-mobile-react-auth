import * as types from './constants';

////// REDIRECT ///////
export const redirect = (route) => ({
  type: types.REDIRECT,
  payload: {
    route,
    message: {
      show: false,
      type: '',
      msg: '',
    },
    isLoading: false
  }
});