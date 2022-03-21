import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer.js'

const CheckOut = () => {
  const navigate = useNavigate()



  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [country, setCountry] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('Paypal')



  const handleSubmit = (e) => {
    console.log(paymentMethod)
    e.preventDefault()
    navigate('/payment')
  }

  return (
      <FormContainer>
        <h1>Shipping</h1>
        <Form onSubmit={handleSubmit}>

          <Form.Group controlId='address'>
            <Form.Label>Address</Form.Label>
            <Form.Control type='text' value={address} autoComplete='nope' onChange={e => setAddress(e.target.value)}></Form.Control>
          </Form.Group>

          <Form.Group controlId='city'>
            <Form.Label>City</Form.Label>
            <Form.Control type='text' value={city} autoComplete='nope' onChange={e => setCity(e.target.value)}></Form.Control> 
          </Form.Group>

          <Form.Group controlId='postalcode'>
            <Form.Label>Postal Code</Form.Label>
            <Form.Control type='text' value={postalCode} autoComplete='nope' onChange={e => setPostalCode(e.target.value)}></Form.Control> 
          </Form.Group>

          <Form.Group controlId='country'>
            <Form.Label>Country</Form.Label>
            <Form.Control type='text' value={country} autoComplete='nope' onChange={e => setCountry(e.target.value)}></Form.Control>        
          </Form.Group>

          <Form.Group>
            <Form.Label as='legend'>Select Payment Method</Form.Label> 
            <Col>
              <Form.Check type='radio' label='PayPal or Credit Card' id='PayPal' name ='paymentMethod' value='PayPal' checked onChange={e => setPaymentMethod(e.target.value)}></Form.Check>
            </Col>
          </Form.Group>

          <Button type='submit' variant='primary'>Continue</Button>
        </Form>
      </FormContainer>

      
    
    
  )
}

export default CheckOut
