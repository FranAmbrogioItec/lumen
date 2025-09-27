import React, { useEffect, useRef } from 'react'
import styles from './components/About/About.module.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Process from './components/Process/Process'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Process />
      <Footer />
    </div>
  )
}

export default App