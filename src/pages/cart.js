import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'


const CartPage = () => {
  const navigate = useNavigate()

  const [pieceList, setPieceList] = useState([])

  useEffect(() => {
    const fetchPieces = async () => {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const { data } = await axios.get('/api/pieces', config)
      setPieceList(data)
    }
    fetchPieces()
  }, [])

  // useEffect(() => {
  //   const localCart = localStorage.getItem('cart')
  //   if (localCart) {
  //     setCart(JSON.parse(localCart))
  //   }
  // }, [cart])
  
  
  const handleRemoveFromCart = () => {
    console.log('remove from cart')
  }



  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        { 
          pieceList.length === 0 ? 
            <Message>
              Your cart is empty <Link to='/'>Go Back</Link>
            </Message> :
            <ListGroup variant='flush'>
              {
              pieceList.map((piece) => {
                return (
                  <ListGroup.Item key={piece._id}>
                    <Row>
                      <Col md={2}>
                        <Image src={piece.image} alt={piece.name} fluid rounded />
                      </Col>
                      <Col md={3}>
                        <Link to={`/pieces/${piece._id}`}>{piece.name}</Link>
                      </Col>
                      <Col md={2}>${piece.price}</Col>
                      <Col md={2}>
                        <Button
                          type='button'
                          variant='light'
                          onClick={() => handleRemoveFromCart(piece.piece)}
                        >
                          <i className='fas fa-trash'></i>
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )
              })
              }
            </ListGroup>
        }
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>
                Subtotal ({pieceList.length}) artworks
              </h2>
              ${pieceList.reduce((total, piece) => total + piece.price, 0).toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button type='button' className='btn-block' disabled={pieceList.length === 0} onClick={() => navigate('/checkout')}>
                Check Out
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default CartPage
