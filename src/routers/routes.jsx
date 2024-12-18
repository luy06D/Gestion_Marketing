import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Inicio} from '../pages/Inicio'
import {Proyectos} from '../pages/Proyectos'
import {Tareas} from '../pages/Tareas'
import {Sidebar} from '../components/Sidebar'

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Sidebar/>
        <Routes>
            <Route path='/' element={<Inicio />}/>
            <Route path='/proyectos' element={<Proyectos />}/>
            <Route path='/tareas' element={<Tareas />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes