import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Favoritos from '../pages/Favoritos'
import Details from '../pages/Details'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Miperfil from '../pages/Miperfil'

const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='favoritos' element={<Favoritos />} />
            <Route path='product/:id' element={<Details />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='/miperfil' element={<Miperfil/>} />
        </Routes>
    </div>
  )
}

export default AppRouter