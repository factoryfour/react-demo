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
			// return {...state, isFetching: true, error: null}
      return {isFetching: true, error: null}
    case ActionTypes.LOGIN_SUCCESS:
		console.log('LOGIN_SUCCESS');
			// return {...state, isFetching: false, isAuthenticated: true, profile: action.profile}
      return {isFetching: false, isAuthenticated: true, profile: action.profile}
    case ActionTypes.LOGIN_ERROR:
			// return {...state, isFetching: false, isAuthenticated: false, profile: {}, error: action.error}
      return {isFetching: false, isAuthenticated: false, profile: {}, error: action.error}
    case ActionTypes.LOGOUT_SUCCESS:
			// return {...state, isAuthenticated: false, profile: {}}
      return {isAuthenticated: false, profile: {}}
    default:
      return state
  }
}