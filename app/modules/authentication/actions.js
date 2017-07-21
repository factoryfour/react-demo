export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function login(profile, token) {
	return {
		type: LOGIN,
		profile,
		token
	};
}

export function logout() {
	return {
		type: LOGOUT
	};
}
