import React from 'react'
import { HeroSection, Navbar, Results } from './components'

const App = () => {
  return (
    <div className='w-full h-full'>
      <div className='w-full h-screen'>
        <Navbar />
        <HeroSection />
      </div>
      <div className='w-full h-screen'>
        <Results />
      </div>
    </div>
  )
}

export default App