import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import { useState } from 'react'

export default function Rotas() {
  const [dataPokemons, setDataPokemons] = useState([])

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home setDataPokemons={setDataPokemons}/>}/>
            <Route path='/profile' element={<Profile dataPokemons={dataPokemons}/>}/>
        </Routes>
    </BrowserRouter>
  )
}
