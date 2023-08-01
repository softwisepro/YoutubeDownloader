import React, { useState, useEffect } from 'react'
import Layout from './hocs/Layout';
import Navbar from './app/components/Navbar';
import Hero from './app/components/Hero';
import Results from './app/components/Results';
import History from './app/components/History';

const App = () => {

  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState('');
  const [history, setHistory ] = useState(null)

  return (
    <Layout>
      <Navbar />
      <Hero results={results} setResults={setResults} setIsLoading={setIsLoading} setHistory={setHistory} />
      <Results results={results} isLoading={isLoading} />
      <History history={history} />
    </Layout>
  )
}

export default App