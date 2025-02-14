import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './css/PenanggulanganSinopsis.css'

import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import HomePage from './Pages/HomePage'
import Footer from './Components/Footer'
import PenanggulanganPage from './Pages/PenanggulanganPage'

import './css/readmore.css'
import Testing from './Components/Testing'
import Login from "./components/Logres/Login";
import Register from "./components/Logres/Register";
// import './css/style-penanggulangan.css'

function App() {

  return (
    <>
      <Navbar/>
      {/* <Testing/> */}
      <Routes>
//       <Route path="/home" element={<Login/>} /> 
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<HomePage/>} />
        <Route path='/penanggulangan' element={<PenanggulanganPage/>}/>
        
      </Routes>
      <Footer/>
    </>
  
    )
}

export default App
