import React from 'react'
import Navbar from '../shared/Navbar'
import Hero from './Hero'
import AppSection from './AppSection'
import Footer from './Footer'


const HomePage = () => {
  return (
    <div className='homepage-container'>
        <Navbar />
        <Hero />
        <AppSection />
        <Footer />
    </div>
  )
}

export default HomePage