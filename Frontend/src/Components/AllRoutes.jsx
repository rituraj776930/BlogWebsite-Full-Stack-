import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from '../Pages/Blog'
import Home from '../Pages/Blog'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import PrivateAuth from './PrivateAuth'

function AllRoutes() {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/blog' element={
                <PrivateAuth>
                <Blog/>
                </PrivateAuth>
            }
            />
        </Routes>
    </div>
  )
}

export default AllRoutes