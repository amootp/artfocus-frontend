import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'

// Pages:
import Home from './pages/home' 
import Register from './pages/register'
import PieceDetails from './pages/piece-details'
import Cart from './pages/cart'
import PieceEdit from './pages/piece-edit'
import PieceAdd from './pages/piece-add'
import CheckOut from './pages/checkout'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/pieces/new' element={<PieceAdd />} />
            <Route path='/pieces/:id/edit' element={<PieceEdit />} />
            <Route path='/pieces/:id' element={<PieceDetails />} />
            <Route path='/register' element={<Register />} />            
            <Route path='/cart' element={<Cart />} /> 
            <Route path='/register' element={<Register />} />
            <Route path='/checkout' element={<CheckOut />} />
            <Route path='/' element={<Home />} />
            
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
