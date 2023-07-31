import React, { useState, useEffect } from 'react'
import { HeroSection, Navbar, Results } from './components'

const App = () => {

  const [results, setResults] = useState(null);

  useEffect(() => {
    document.body.classList.add('overflow-hidden')
  }, []);

  return (
    <div className='w-full h-full'>
      <div className='w-full h-screen'>
        <Navbar  />
        <HeroSection setResults={setResults} results={results}/>
      </div>
      <div className='w-full h-screen'>
        <Results results={results} />
      </div>
    </div>
  )
}

export default App