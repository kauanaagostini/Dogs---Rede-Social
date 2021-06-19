import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import { UserStorage } from './Context/UserContext'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login/*" element={<Login />}/>
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  )
}

export default App

