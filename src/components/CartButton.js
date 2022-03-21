import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../redux/cart/cart.actions'

const CartButton = ({ pieceId }) => {
  const cart = useSelector(state => state.cart)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const inCart = cart.find(id => id === pieceId)

  const handleAdd = () => { 
    navigate('/cart')
    dispatch(addToCart(pieceId))
    
  }
  const handleRemove = () => {
    dispatch(removeFromCart(pieceId))
  }
  
  return (
    <Button onClick={ inCart ? handleRemove : handleAdd } className='btn-block' type='button'>
      { inCart ? 'Remove from Cart' : 'Add to Cart' }
    </Button>
  )
}

export default CartButton;
