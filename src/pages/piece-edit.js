import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import FormContainer from '../components/FormContainer'


const PieceEdit = () => {
  const navigate = useNavigate()

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

  const [name, setName] = useState('')
  const [artist, setArtist] = useState('')
  const [image, setImage] = useState('')
  const [medium, setMedium] = useState('')
  const [price, setPrice] = useState(0)


  useEffect(() => {
    setName(piece.name)
    setArtist(piece.artist)
    setImage(piece.image)
    setMedium(piece.medium)
    setPrice(piece.price)
  }, [piece])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <Link to={`/pieces/${id}`} className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Piece</h1>
        
        <Form onSubmit={handleSubmit}>

          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              placeholder='Enter name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='artist'>
            <Form.Label>Artist</Form.Label>
            <Form.Control
              type='name'
              placeholder='Enter artist name'
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='image'>
            <Form.Label>Image</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter image url'
              value={image}
              onChange={(e) => setImage(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='medium'>
            <Form.Label>Medium</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter medium'
              value={piece.medium}
              onChange={(e) => setMedium(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='price'>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type='number'
              placeholder='Enter price'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type='submit' variant='primary'>
            Update
          </Button>
        </Form>
        
      </FormContainer>

      {/* <Button variant='danger' onClick={ () => navigate(`/admin/pieces/${id}`) } className='btn-block' type='button'>
        Edit Piece
      </Button> */}
    </>
  )
}

export default PieceEdit