import { 
  CART_ADD_ITEM, 
  CART_REMOVE_ITEM,
} from './cart.constants'

export const cartReducer = (state = { cart: [] }, action) => {
  switch (action.type) {      

    case CART_ADD_ITEM:
      const idToAdd = action.payload.id
      return {
        ...state,
        cart: [...state.cart, idToAdd]
      }
      
    
    case CART_REMOVE_ITEM:
      const idToRemove = action.payload.id
      return {
        ...state,
        cart: state.cart.filter(id => id !== idToRemove),
      }
    
    default:
      return state
  }
}