import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Container } from 'react-bootstrap'

const PieceMini = ({ piece }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/pieces/${piece._id}`}>
        <Card.Img src={piece.image} variant='top' />
      </Link>

      <Card.Body>
      <Link to={`/pieces/${piece._id}`}>  
          <Card.Title className='justify-content-md-center'>
            {piece.name}
          </Card.Title>
      </Link>
        
        <Card.Text as='h3'>${piece.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default PieceMini