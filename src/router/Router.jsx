import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Create from '../pages/Create'
import Read from '../pages/Read'
import Update from '../pages/Update'
import NotFound from '../pages/NotFound'
import { data } from 'autoprefixer'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create' element={<Create />} />
      <Route path='/reade/:id' element={<Read />} />
      <Route path='/update/:id' element={<Update />} />
      
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Router