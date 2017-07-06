// Action types

export const SELECT_PATIENT = 'SELECT_PATIENT';
export const CANCEL_SNAPSHOT = 'CANCEL_SNAPSHOT';

// Action creators
export function selectPatient(id) {
	return {
		type: SELECT_PATIENT, id
	};
}

export function cancelSnapshot() {
	return {
		type: CANCEL_SNAPSHOT
	};
}
