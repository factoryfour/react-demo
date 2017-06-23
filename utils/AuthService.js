/* global window*/
import Auth0Lock from 'auth0-lock';
import jwtDecode from 'jwt-decode';
import config from './config';

export default class AuthService {
	constructor() {
		// Configure Auth0 lock
		this.lock = new Auth0Lock(config.clientId, config.domain, {
			auth: {
				redirect: false,
				responseType: 'token'
			},
			theme: {
				logo: config.icon,
				primaryColor: config.primaryColor
			},
			languageDictionary: {
				title: config.title
			},
			rememberLastLogin: false,
			autofocus: true,
			avatar: null,
			closable: false,
			signUpLink: config.signupLink
		});
		// binds login functions to keep this context
		this.login = this.login.bind(this);
	}

	// ======================================================
	// Public methods
	// ======================================================
	login() {
		// Call the show method to display the widget.
		this.lock.show();
	}

	// ======================================================
	// Static methods
	// ======================================================
	static loggedIn() {
		// Checks if there is a saved token and it's still valid
		const token = AuthService.getToken();
		const profile = AuthService.getProfile();
		console.log(profile);
		return token && profile && !AuthService.isTokenExpired(token);
	}

	static logout() {
		// Clear user token and profile data from window.localStorage
		window.localStorage.removeItem('idToken');
		window.localStorage.removeItem('profile');
	}

	static getProfile() {
		// Retrieves the profile data from window.localStorage
		const profile = window.localStorage.getItem('profile');
		return profile ? JSON.parse(window.localStorage.profile) : {};
	}

	static setProfile(profile) {
		// Saves profile data to window.localStorage
		window.localStorage.setItem('profile', JSON.stringify(profile));
		// Triggers profile_updated event to update the UI
	}

	static setToken(idToken) {
		// Saves user token to window.localStorage
		window.localStorage.setItem('idToken', idToken);
	}

	static getToken() {
		// Retrieves the user token from window.localStorage
		return window.localStorage.getItem('idToken');
	}

	static getTokenExpirationDate() {
		const token = AuthService.getToken();
		const decoded = jwtDecode(token);
		if (!decoded.exp) {
			return null;
		}

		const date = new Date(0); // The 0 here is the key, which sets the date to the epoch
		date.setUTCSeconds(decoded.exp);
		return date;
	}

	static isTokenExpired() {
		const token = AuthService.getToken();
		if (!token) return true;
		const date = AuthService.getTokenExpirationDate(token);
		const offsetSeconds = 0;
		if (date === null) {
			return false;
		}
		return !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
	}
}
