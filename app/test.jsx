import { toggleFlag } from './modules/patients/actions/basic.jsx';

export default function test(store) {
	console.log(store.getState());

	const unsubscribe = store.subscribe(() =>
		console.log(store.getState())
	);

	store.dispatch(toggleFlag());

	unsubscribe();
}
