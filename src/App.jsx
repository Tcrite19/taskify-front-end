import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ProfilePage from './components/Profile/profile-page'
import Homepage from './components/HomePage/homepage'

const App = () => {4

  return (
    <>
      <Routes>
        <Route path='/profile' element={<ProfilePage />}/>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </>
  )
}

export default App
