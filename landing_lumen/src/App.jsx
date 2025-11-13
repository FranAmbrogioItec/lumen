import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import HowWeWork from './components/HowWeWork/HowWeWork'
import Portfolio from './components/Portfolio/Portfolio'
import FAQ from './components/FAQ/FAQ'
import Meeting from './components/Meeting/Meeting'
import Footer from './components/Footer/Footer'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
import ThemeToggle from './components/ThemeToggle/ThemeToggle'


function App() {
  return (
    <div className="App">
{/*   <ThemeToggle /> */}      
    <Header />
      <Hero />
      <About />
      <HowWeWork />
      <Portfolio />
      <FAQ />
      <Meeting />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App