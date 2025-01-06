import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from '../pages/Inicio'
import Proyectos from '../pages/Proyectos'
import Tareas from '../pages/Tareas'
import Ajustes from '../pages/Ajustes'
import Ayuda from '../pages/Ayuda'
import Reportes from '../pages/Reportes'
import Usuarios from '../pages/Usuarios'

const MyRoutes = () => {
  return (

        <Routes>
            <Route path='/' element={<Inicio />}/>
            <Route path='/proyectos' element={<Proyectos />}/>
            <Route path='/tareas' element={<Tareas />}/>
            <Route path='/reportes' element={<Reportes />}/>
            <Route path='/usuarios' element={<Usuarios />}/>
            <Route path='/Ajustes' element={<Ajustes />}/>
            <Route path='/Ayuda' element={<Ayuda />}/>
        </Routes>
  )
}

export default MyRoutes