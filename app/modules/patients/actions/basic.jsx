import axios from 'axios';

export const TOGGLE_FLAG = 'TOGGLE_FLAG';
export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';

export function toggleFlag() {
	return {
		type: TOGGLE_FLAG
	};
}

export function requestData() {
	return {
		type: REQUEST_DATA
	};
}

export function receiveData() {
	return {
		type: RECEIVE_DATA
	};
}
