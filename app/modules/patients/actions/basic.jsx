import axios from 'axios';

export const TOGGLE_FLAG = 'TOGGLE_FLAG';
export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';

export function toggleFlag() {
	return {
		type: TOGGLE_FLAG
	};
}

function requestData() {
	return {
		type: REQUEST_DATA
	};
}

function receiveData(response) {
	return {
		type: RECEIVE_DATA,
		status: response
	};
}

export function fetchData() {
	return (dispatch) => {
		dispatch(requestData);

		return axios.get('https://api-dev.factoryfour.com/patients/health/status')
			.then(response => response.data, (error) => {
				console.error(error);
			})
			.then(response => dispatch(receiveData(response)));
	};
}
