/* eslint-disable no-unused-vars */


import Navbar from '../Navbar'
import {Route, Routes, useLocation } from 'react-router-dom'
import Users from '../Users'
import Home from './Home'
import Userslogin from '../Userslogin'
import Userdetails from '../Userdetails'

const Adminportal = () => {
  let path = useLocation().pathname.endsWith('/adminportal/userslogin/userdetails/:id')
  return (
    <>
    <Navbar />
   <Routes>
    <Route element={<Home />} path='/' />
    <Route element={<Users />} path='/users' />
    <Route element={<Userslogin />} path='/userslogin/:id'/>
    <Route element={<Userdetails />} path='/userslogin/userdetails/:id' />
   </Routes>

    </>
  )
}

export default Adminportal
