
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landingpage from './components/Landingpage'
import Adminportal from './components/adminportal/Adminportal'


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route element={<Landingpage />} path="/"/>
        <Route element={<Adminportal />} path="/adminportal/*"/>
        {/* <Route element={<Userportal />} path="/userportal/*"/>
        <Route element={<Register />} path="/register"/> */}
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
