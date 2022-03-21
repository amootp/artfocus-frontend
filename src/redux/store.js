import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { cartReducer } from './cart/cart.reducers'


const reducer = combineReducers({
  cart: cartReducer,
})

const initialState = {
  cart: [],
}

const middlewares = [
  thunk,
]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
)

export default store