import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
// import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
// import { listTopArtistss } from '../actions/artistActions'

const ArtistsCarousel = () => {
  // const dispatch = useDispatch()

  // const artistTopRated = useSelector((state) => state.artistTopRated)
  // const { loading, error, artists } = artistTopRated

  

  // useEffect(() => {
  //   dispatch(listTopArtistss())
  // }, [dispatch])

  return (
    <Carousel pause='hover' className='bg-dark'>
      <Carousel.Item key='yoav'>
        <Link to='/artists/yoav'>
          <Image src='/images/yoav_artist.jpg' alt='Yoav' fluid />
          <Carousel.Caption className='carousel-caption'>
            <h2>
              Yoav
            </h2>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>

      <Carousel.Item key='yuvi'>
        <Link to='/artists/yuvi'>
          <Image src='/images/yuvi_artist.jpg' alt='Yuvi' fluid />
          <Carousel.Caption className='carousel-caption'>
            <h2>
              YUVI
            </h2>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>

      {/* <Carousel.Item key='kadishman'>
        <Link to='/artists/yuvi'>
          <Image src='/images/yoav_artist.jpg' alt='yoav' fluid />
          <Carousel.Caption className='carousel-caption'>
            <h2>
              Yoav
            </h2>
          </Carousel.Caption>
        </Link>
      </Carousel.Item> */}



      {/* {artists.map((artist) => (
        <Carousel.Item key={artist.id}>
          <Link to={`/artists/${artist.name}`}>
            <Image src={artist.image} alt={artist.name} fluid />
            <Carousel.Caption className='carousel-caption'>
              <h2>
                {artist.name}
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))} */}
    </Carousel>
  )
}

export default ArtistsCarousel
