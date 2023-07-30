import React from 'react'
import SearchBar from './SearchBar'

const HeroSection = () => {
    return (
        <div
            className='w-full h-screen flex justify-center items-center bg-gradient-to-br from-indigo-300 via-indigo-200 to-white flex-col'
        >
            <div className='w-full flex flex-col gap-5 justify-center items-center px-5'>
                <h2
                className='text-2xl md:text-3xl lg:text-5xl text-center font-bold tracking-wide text-indigo-400'
                >Paste YouTube Video URL here!</h2>
                <p 
                className='text-center text-sm md:text-2xl font-semibold text-gray-600'
                >Paste a yt video,<br /> link you want to dowload.</p>
            </div>
            <SearchBar />
            <div className='w-full flex justify-center items-center mt-5'>
                <p className='text-sm font-normal text-gray-600'>use it! it's easy, fast and secuder</p>
            </div>
        </div>
    )
}

export default HeroSection