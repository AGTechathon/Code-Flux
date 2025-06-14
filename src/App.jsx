import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage/Homepage'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Header/>
        <Routes>
             <Route path='/' element={<Homepage/>}/>
        </Routes>
       <Footer/> 
    </BrowserRouter>
    </>
  )
}

export default App
