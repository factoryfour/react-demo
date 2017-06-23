/* eslint-disable*/
import * as ActionTypes from './auth.actions.jsx';
import AuthService from './AuthService';

export default function authReducer(state = {
  isAuthenticated: !AuthService.isTokenExpired(),
  isFetching: false,
  profile: AuthService.getProfile(),
  error: null
}, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
      return {isFetching: true, error: null}
    case ActionTypes.LOGIN_SUCCESS:
      return {isFetching: false, isAuthenticated: true, profile: action.profile}
    case ActionTypes.LOGIN_ERROR:
      return {isFetching: false, isAuthenticated: false, profile: {}, error: action.error}
    case ActionTypes.LOGOUT_SUCCESS:
      return {isAuthenticated: false, profile: null}
    default:
      return state
  }
}
