import * as types from './constants';

export const signin = data => ({
  type: types.SIGNIN_USER,
  payload: {
    data,
    message: {
      show: false,
      type: '',
      msg: '',
    },
    isLoading: true
  }
});

export const signinSuccess = (token, user) => ({
  type: types.SIGNIN_USER_SUCCESS,
  payload: {
    token,
    user,
    message: {
      show: true,
      type: 'success',
      msg: '',
    },
    isLoading: false
  },
});

export const signinFailure = (data) => ({
  type: types.SIGNIN_USER_FAILURE,
  payload: {
    message: {
      show: true,
      type: 'error',
      msg: data.msg,
    },
    isLoading: false
  },
});

////// SIGNUP ///////
export const signup = data => ({
  type: types.SIGNUP_USER,
  payload: {
    data,
    message: {
      show: false,
      type: '',
      msg: '',
    },
    isLoading: true
  }
});

export const signupSuccess = (data) => ({
  type: types.SIGNUP_USER_SUCCESS,
  payload: {
    message: {
      show: true,
      type: 'success',
      msg: data.msg,
    },
    isLoading: false
  },
});

export const signupFailure = (data) => ({
  type: types.SIGNUP_USER_FAILURE,
  payload: {
    message: {
      show: true,
      type: 'error',
      msg: data.msg,
    },
    isLoading: false
  },
});


////// CONFIRM_REGISTER ///////
export const confirmRegister = code => ({
  type: types.CONFIRM_REGISTER,
  payload: {
    code,
    message: {
      show: false,
      type: '',
      msg: '',
    },
    isLoading: true
  }
});

export const confirmRegisterSuccess = (data) => ({
  type: types.CONFIRM_REGISTER_SUCCESS,
  payload: {
    message: {
      show: true,
      type: 'success',
      msg: data.msg,
    },
    isLoading: false
  },
});

export const confirmRegisterFailure = (data) => ({
  type: types.CONFIRM_REGISTER_FAILURE,
  payload: {
    message: {
      show: true,
      type: 'error',
      msg: data.msg,
    },
    isLoading: false
  },
});


////// SIGNOUT ///////
export const signout = () => ({
  type: types.SIGNOUT,
  payload: {
    message: {
      show: false,
      type: '',
      msg: '',
    },
    isLoading: false
  }
});


////// REMENBER_PASSWORD ///////
export const rememberPassword = mobile => ({
  type: types.REMEMBER_PASSWORD,
  payload: {
    mobile,
    message: {
      show: false,
      type: '',
      msg: '',
    },
    isLoading: true
  }
});

export const rememberPasswordSuccess = () => ({
  type: types.REMEMBER_PASSWORD_SUCCESS,
  payload: {
    message: {
      show: true,
      type: 'success',
      msg: '',
    },
    isLoading: false
  },
});

export const rememberPasswordFailure = (data) => ({
  type: types.REMEMBER_PASSWORD_FAILURE,
  payload: {
    message: {
      show: true,
      type: 'error',
      msg: data.msg,
    },
    isLoading: false
  },
});


////// RESET_PASSWORD ///////
export const resetPassword = (code, newPassword) => ({
  type: types.RESET_PASSWORD,
  payload: {
    code,
    newPassword,
    message: {
      show: false,
      type: '',
      msg: '',
    },
    isLoading: true
  }
});

export const resetPasswordSuccess = () => ({
  type: types.RESET_PASSWORD_SUCCESS,
  payload: {
    message: {
      show: true,
      type: 'success',
      msg: '',
    },
    isLoading: false
  },
});

export const resetPasswordFailure = (data) => ({
  type: types.RESET_PASSWORD_FAILURE,
  payload: {
    message: {
      show: true,
      type: 'error',
      msg: data.msg,
    },
    isLoading: false
  },
});

////// CHANGE_TAB ///////
export const changeTab = tab => ({
  type: types.CHANGE_TAB,
  payload: {
    tab,
    message: {
      show: false,
      type: '',
      msg: '',
    },
    isLoading: false
  }
});

////// CLEAR_STATE ///////
export const clearState = () => ({
  type: types.CLEAR_STATE,
  payload: {
    message: {
      show: false,
      type: '',
      msg: '',
    },
    isLoading: false
  }
});
