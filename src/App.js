import React, { useState, useEffect } from 'react'
import Layout from './hocs/Layout';
import Navbar from './app/components/Navbar';
import Hero from './app/components/Hero';
import Results from './app/components/Results';

const App = () => {

  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState('');

  return (
    <Layout>
      <Navbar />
      <Hero results={results} setResults={setResults} setIsLoading={setIsLoading} />
      <Results results={results} isLoading={isLoading} />
    </Layout>
  )
}

export default App