import { useState } from 'react'
import './App.css'
import Topbar from './component/Topbar/Topbar'
import Profile from './component/Profile/Profile'
import Works from "./component/Works/Works"
import Skills from './component/Skills/Skills'
import Home from './component/Home/Home'

function App() {

  return (
    <>
      <Topbar></Topbar>
      <div id="top">
        <Home />
      </div>
      <div id="profile">
        <Profile />
      </div>
      <div id="works">
        <Works />
      </div>
      <div id="skills">
        <Skills />
      </div>
    </>
  )
}

export default App
