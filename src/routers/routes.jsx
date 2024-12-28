import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from '../pages/Inicio'
import Proyectos from '../pages/Proyectos'
import Tareas from '../pages/Tareas'

const MyRoutes = () => {
  return (

        <Routes>
            <Route path='/' element={<Inicio />}/>
            <Route path='/proyectos' element={<Proyectos />}/>
            <Route path='/tareas' element={<Tareas />}/>
        </Routes>
  )
}

export default MyRoutes