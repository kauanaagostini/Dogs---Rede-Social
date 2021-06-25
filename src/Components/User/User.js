import React from 'react'
import UserHeader from './UserHeader'
import { Routes, Route} from 'react-router-dom'
import Feed from '../Feed/Feed'
import UserPhotoPost from './UserPhotoPost'
import UserStats from './UserStats'
import { UserContext } from '../../Context/UserContext'
import Page404 from '../Page404/Page404'

const User = () => {
  const { data } = React.useContext(UserContext)
  
  return (
    <section className="container">
      <UserHeader/>
      <Routes>
        <Route path='/' element={<Feed user={data.id}/>} />
        <Route path='postar' element={<UserPhotoPost />}/> 
        <Route path='estatisticas' element={<UserStats />}/> 
        <Route path="*" element={<Page404 />}/>
      </Routes>
    </section>
  )
}

export default User
