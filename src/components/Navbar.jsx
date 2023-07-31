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
        <div className='absolute top-0 z-50 flex items-center justify-between w-full h-auto px-5 py-5 mt-10 bg-transparent md:px-12 lg:px-32'>
            <div>
                <h1 className='hidden font-sans text-xl font-semibold tracking-wide text-white md:block'>WiseDownloader Pro</h1>
                <h1 className='block font-sans text-xl font-semibold tracking-wide text-white md:hidden'>WDPro</h1>
            </div>
            {/* <div className='items-center justify-center hidden gap-5 md:flex'>
                <NavigationLinks to={'/'} label={'Home'} />
                <NavigationLinks to={'/language'} label={'Languages'} />
                <NavigationLinks to={'/about'} label={'About'} />
            </div> */}
            <div>
                <button
                    className='px-4 py-3 text-sm font-medium tracking-wider text-white transition-colors duration-100 ease-in-out rounded-lg shadow-lg md:py-4 md:px-8 hover:bg-indigo-600 bg-gradient-to-r shadow-black/20 from-indigo-100 to-indigo-400 md:rounded-2xl'
                >
                    Learn more
                </button>
            </div>
        </div>
    )
}

export default Navbar