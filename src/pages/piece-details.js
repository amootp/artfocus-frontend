import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, Container } from 'react-bootstrap'
import CartButton from '../components/CartButton'

const PieceDetails = () => {

  const { id } = useParams()

  const [piece, setPiece] = useState([])

  useEffect(() => {
    const fetchPiece = async () => {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const { data } = await axios.get(`/api/pieces/${id}`, config)
      setPiece(data)
    }
    fetchPiece()
  }, [])


  // const navigate = useNavigate()


  const handleAddToCart = () => {

    // navigate(`/cart`)
  }

  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>
     
      <Link className='btn btn-dark my-3' to={`/pieces/${id}/edit`}>
        Edit
      </Link>
      <Row>
        <Col md={4} xl={6}>
          <Image src={piece.image} alt={piece.artistName} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{piece.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Artist: {piece.artist}
            </ListGroup.Item>
            <ListGroup.Item>
              Technique: {piece.medium}
            </ListGroup.Item>
            <ListGroup.Item>
              Price: ${piece.price}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                <Col>Price:</Col> 
                <Col>
                  <strong>${piece.price}</strong>
                </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                <Col>Status:</Col> 
                <Col>
                  In Stock
                </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <CartButton pieceId={id} />
                {/* <Button onClick={handleAddToCart} className='btn-block' type='button'>
                  Add To Cart
                </Button> */}
                {/* <CartButton pieceId={id} /> */}
              </ListGroup.Item>
              <ListGroup.Item>
                {/* <Button variant='danger' onClick={ () => navigate(`/`) } className='btn-block' type='button'>
                  Edit Piece
                </Button> */}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default PieceDetails
