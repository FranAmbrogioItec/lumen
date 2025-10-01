import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Process from './components/Process/Process'
import Footer from './components/Footer/Footer'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
import ThemeToggle from './components/ThemeToggle/ThemeToggle'

function App() {
  return (
    <div className="App">
      <ThemeToggle />
      <Header />
      <Hero />
      <About />
      <Process />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App