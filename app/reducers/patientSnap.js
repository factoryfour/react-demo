import update from 'immutability-helper';

const patientSnap = (state = initialState, action) => {
	switch (action.type) {
	case 'SELECT_PATIENT':
		console.log(action);
		return update(state, {
			patID: { $set: action.id }
		});
	case 'CANCEL_SNAPSHOT':
		return update(state, {
			patID: { $set: action.id }
		});
	default :
		return state;
	}
};

export default patientSnap;
