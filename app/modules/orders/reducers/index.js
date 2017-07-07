import { combineReducers } from 'redux'
import { orders, loading } from './orders'

const ordersApp  = combineReducers({
	orders,
	loading
})

export default ordersApp