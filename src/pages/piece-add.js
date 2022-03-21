import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'

import axios from 'axios'

const PieceCreate = () => {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [artist, setArtist] = useState('')
  const [image, setImage] = useState('')
  const [medium, setMedium] = useState('')
  const [price, setPrice] = useState(0)


  const handleUploadFile = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      const { data } = await axios.post('/api/uploads', formData, config)
      setImage(data)
    } catch (err) {
      console.error(err)
    }
  }
  



  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const piece = {
        name, artist, image, medium, price
      }
      const { data } = await axios.post('/api/pieces', piece)
      navigate('/')
    } catch (err) {
      console.error(err)
    }
  }


  return (
    <>
      
      <FormContainer>
        <h1>Add New Piece</h1>
        
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
            <Form.Control type='file' id='image-file'  label='Choose file' custom onChange={handleUploadFile}
            ></Form.Control>
            
            {/* {uploading && <Loader />} */}
          </Form.Group> 

          <Form.Group controlId='medium'>
            <Form.Label>Medium</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter medium'
              value={medium}
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
            Create
          </Button>
        </Form>
      </FormContainer>

      {/* <Button variant='danger' onClick={ () => navigate(`/admin/pieces/${id}`) } className='btn-block' type='button'>
        Edit Piece
      </Button> */}
    </>
  )
}

export default PieceCreate