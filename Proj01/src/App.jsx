import React from 'react'
import './App.css'
import Navbar from './components/navbar/navbar';
import Herto from './components/Navbar/Hero/Herto';
import Profile from './components/Navbar/Profile/Profile';
import Hire from './components/Navbar/Hire/Hire';
import { Pic } from './components/Navbar/Pic/Pic';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='App-Container'>
        <div className='Left'>
          <Herto />
          <div className='Buttons'>
            <Profile />
            <Hire />
          </div>
        </div>
        <div className='Right'>
          <Pic />
        </div>
      </div>
    </>
  )
}

export default App;