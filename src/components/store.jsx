import React, { useEffect } from 'react'
import { RiArrowUpSLine } from 'react-icons/ri'
import DownloadButton from './DownloadButton';

const Results = ({ results }) => {

    useEffect(() => {
        if (results == null) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        } else {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth',
            });
        }
    }, []);


    return (
        <div
            className='w-full relative h-screen flex justify-start items-start lg:px-32 md:px-12 px-5 py-5 md:py-12 lg:py-12 bg-gradient-to-br from-indigo-300 via-indigo-200 to-white flex-col'
        >
            <div className='w-full flex flex-col lg:flex-row'>
                <div className='flex flex-col justify-center gap-5 items-center py-2 w-[60%] h-auto relative overflow-hidden'>
                    <div className='w-[640px] h-[480px]'>
                        <img
                            src={`${results?.featured_thumbnail}`}
                            alt={results?.title}
                            className='w-full h-full object-cover'
                        />
                    </div>

                    <div
                        className='w-full  font-medium text-center'
                    >
                        <h3 className='text-2xl font-serif text-gray-800'>{results?.title}</h3>
                    </div>

                    <div className='w-full'>
                        <span className='p-2 gap-10 rounded-full text-xl font-medium justify-center items-center flex '>
                            <div className='flex justify-center items-center'>
                                <span className='text-gray-600 text-sm'>time: </span>
                                <span>{results?.duration}sec</span>
                            </div>
                            <div className='flex justify-center items-center'>
                                <span>{results?.views} </span>
                                <span className='text-gray-600 text-sm'> views</span>
                            </div>
                        </span>
                    </div>
                </div>

                <div className=' w-[40%]  p-5'>
                    <div className='w-full flex flex-col gap-5 justify-between items-start bottom-0'>


                        <div className='w-full h-full p-5'>
                            <div className='p-5 flex justify-center items-center border- '>
                                <h4 className='text-xl font-medium'>Download Here</h4>
                            </div>
                            <div className='w-full h-full flex flex-col gap-10'>

                                {results?.qualities.map((quality) => (
                                    <div key={quality?.resolution} className='w-full flex justify-between items-center'>
                                        <div className='flex gap-2 justify-center items-center'>
                                            <div className='w-[120px] h-[90px]'>
                                                <img
                                                    src={`${results?.featured_thumbnail}`}
                                                    alt={results?.title}
                                                    className='w-auto h-auto object-cover'
                                                />
                                            </div>
                                            <div className='flex flex-col justify-center items-center'>
                                                <p className='font-medium text-sm'>
                                                    Quality
                                                </p>
                                                <p className='font-medium text-xl font-serif'>
                                                    {quality?.resolution}
                                                </p>
                                            </div>
                                        </div>
                                        <DownloadButton quality={quality} results={results} />
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button
                className='absolute top-12 right-5 p-2 bg-indigo-300 rounded-full'
                onClick={
                    () => (
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth',
                        })
                    )
                }
            >
                <RiArrowUpSLine fontSize={30} className='text-white' />
            </button>
        </div>
    )
}

export default Results