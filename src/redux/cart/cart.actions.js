import { 
  CART_ADD_ITEM, 
  CART_REMOVE_ITEM,
} from './cart.constants'

export const addToCart = (idToAdd) => {
  return {
    type: CART_ADD_ITEM,
    payload: {
      idToAdd
    }
  }
}

export const removeFromCart = (idToRemove) => {
  return {
    type: CART_REMOVE_ITEM,
    payload: {
      idToRemove
    }
  }
}



