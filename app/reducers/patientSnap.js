const patientSnap = (state = [], action) => {
	switch (action.type) {
	case 'SELECT_PATIENT':
		return [
			...state,
			{
				patID: action.id
			}
		];
	case 'CANCEL_SNAPSHOT':
		return [
			...state,
			{
				patID: null
			}
		];
	default :
		return state;
	}
};

export default patientSnap;
