import { createStore } from 'redux'
import updateQuantity from "./ShopReducer"
const store = createStore(updateQuantity)
export default store;
