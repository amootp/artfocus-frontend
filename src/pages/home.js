import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import HomeCarousel from '../components/HomeCarousel'
import PieceMini from '../components/PieceMini'
import { Button } from 'react-bootstrap'

const Home = () => {
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

  return (
    <>
      {/* <HomeCarousel /> */}
      <h1>Latest Artworks</h1>
      <Row>
        { 
          pieceList.map(p => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <PieceMini piece={p} />
            </Col>)
          ) 
        }
      </Row>
    </>
  )
}

export default Home
