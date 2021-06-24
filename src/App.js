import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import User from './Components/User/User'
import Login from './Components/Login/Login'
import { UserStorage } from './Context/UserContext'
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import Photo from './Components/Photo/Photo'
import UserProfile from './Components/User/UserProfile'
import Page404 from './Components/Page404/Page404'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="login/*" element={<Login />}/>
            <ProtectedRoute path="conta/*" element={<User />}/>
            <Route path="foto/:id" element={<Photo />}/>
            <Route path="perfil/:user" element={<UserProfile />}/>
            <Route path="*" element={<Page404 />}/>
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  )
}

export default App

