import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between w-full p-5 px-32 border-b'>
        <h1
        className='text-3xl font-normal'
        >WiseDownloaderPro</h1>
        <Link>
            Help
        </Link>
    </div>
  )
}

export default Navbar