import React from 'react'

import { About, Footer, Header, Work, Skills, Profile } from './container'
import { Navbar } from './components'
import './App.scss'

const App = () => {
  return (
    <div className='app'>
        <Navbar/>
        <Header />
        <Profile />
        <About />
        <Work />
        <Skills />
        <Footer />
    </div>
  )
}

export default App
