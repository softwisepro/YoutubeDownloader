import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className='container px-5 mx-auto md:px-12 lg:px-32'>
        { children }
    </div>
  )
}

export default Layout