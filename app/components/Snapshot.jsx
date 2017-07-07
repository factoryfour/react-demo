import React from 'react';
import PropTypes from 'prop-types';
import SelectedOrderList from '../containers/SelectedOrderList.jsx';
import OrderList from '../components/OrderList.jsx';
 // /app/modules/orders/containers/SelectedOrderList.jsx
 // app/modules/patients/components/Snapshot.jsx
const Snapshot = () => {
	const divstyle = {
		border: '1px solid red',
		height: 500,
		padding: 15
	};
	return (<div
  className="col-xs-4"
  style={divstyle}
	>
		<h1><center>Snapshot!</center></h1>
		<SelectedOrderList />
	</div>
	);
};

export default Snapshot;
