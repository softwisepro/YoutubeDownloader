import React from 'react'
import { Link } from 'react-router-dom'
import { useResolvedPath } from 'react-router-dom'

const NavigationLinks = ({ to, className = '', label }) => {

    const router = useResolvedPath();

    return (
        <Link
            to={to}
            className={`${className} group tracking-wide text-white  text-sm font-medium relative gap-1 flex flex-col justify-center items-center`}
        >
            <span>{label}</span>
            <span className={`bg-white group-hover:w-full transition-all ease-linear duration-100 h-[2px] ${router.pathname === to ? 'w-full' : 'w-0'}`} />
        </Link>
    )
}

const Navbar = () => {
    return (
        <div className='w-full absolute top-0 mt-10 h-auto py-5 px-5 md:px-12 lg:px-32 flex justify-between items-center bg-transparent'>
            <div>
                <h1 className='text-xl text-white font-semibold font-sans tracking-wide hidden md:block'>WiseDownloader Pro</h1>
                <h1 className='text-xl text-white font-semibold font-sans tracking-wide block md:hidden'>WDPro</h1>
            </div>
            <div className='justify-center items-center gap-5 hidden md:flex'>
                <NavigationLinks to={'/'} label={'Home'} />
                <NavigationLinks to={'/language'} label={'Languages'} />
                <NavigationLinks to={'/about'} label={'About'} />
            </div>
            <div>
                <button
                    className='py-3 md:py-4 px-4 md:px-8 hover:bg-indigo-600 tracking-wider transition-colors ease-in-out duration-100 text-white font-medium text-sm bg-gradient-to-r shadow-lg shadow-black/20 from-indigo-100 to-indigo-400 rounded-lg md:rounded-2xl'
                >
                    Learn more
                </button>
            </div>
        </div>
    )
}

export default Navbar