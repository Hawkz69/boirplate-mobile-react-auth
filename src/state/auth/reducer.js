// Internal
import * as types from './constants';

export const initialState = {
  tab: 'signin',
  isConfirmRegister: '',
  isResetPassword: '',
  token: '',
  message: {
    show: false,
    type: '',
    msg: '',
  },
  user: {
    name: '',
  },
  isLoading: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    /// SIGNIN ///
    case types.SIGNIN_USER:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        message: action.payload.message,
      };
    case types.SIGNIN_USER_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        token: action.payload.token,
        user: action.payload.user,
        isLoading: action.payload.isLoading,
        isResetPassword: '',
        isConfirmRegister: ''
      };
    case types.SIGNIN_USER_FAILURE:
      return {
        ...state,
        message: action.payload.message,
        isLoading: action.payload.isLoading,
      };
    /// SIGNUP ///
    case types.SIGNUP_USER:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        message: action.payload.message,
      };
    case types.SIGNUP_USER_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        isLoading: action.payload.isLoading,
      };
    case types.SIGNUP_USER_FAILURE:
      return {
        ...state,
        message: action.payload.message,
        isLoading: action.payload.isLoading,
      };
    /// CONFIRM_REGISTER ///
    case types.CONFIRM_REGISTER:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        message: action.payload.message,
      };
    case types.CONFIRM_REGISTER_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        isLoading: action.payload.isLoading,
        isConfirmRegister: 'ok',
      };
    case types.CONFIRM_REGISTER_FAILURE:
      return {
        ...state,
        message: action.payload.message,
        isLoading: action.payload.isLoading,
        isConfirmRegister: 'fail'
      };
    /// REMEMBER_PASSWORD ///
    case types.REMEMBER_PASSWORD:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        message: action.payload.message,
      };
    case types.REMEMBER_PASSWORD_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        isLoading: action.payload.isLoading,
      };
    case types.REMEMBER_PASSWORD_FAILURE:
      return {
        ...state,
        message: action.payload.message,
        isLoading: action.payload.isLoading,
      };
    /// RESET_PASSWORD ///
    case types.RESET_PASSWORD:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        message: action.payload.message,
      };
    case types.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        isLoading: action.payload.isLoading,
        isResetPassword: 'ok'
      };
    case types.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        message: action.payload.message,
        isLoading: action.payload.isLoading,
        isResetPassword: 'fail',
      };
    /// SIGNOUT ///
    case types.SIGNOUT:
      return {
        ...state,
        message: action.payload.message,
        isLoading: action.payload.isLoading,
        user: {},
      };
    /// CHANGE_TAB ///
    case types.CHANGE_TAB:
      return {
        ...state,
        message: action.payload.message,
        isLoading: action.payload.isLoading,
        tab: action.payload.tab,
      };
    /// CLEAR_STATE ///
    case types.CLEAR_STATE:
      return {
        ...state,
        message: { show: false, type: '', msg: '' },
        isLoading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
