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
            className='relative flex flex-col items-start justify-start w-full h-screen gap-10 px-32 py-5 md:py-12 lg:py-12 bg-gradient-to-br from-indigo-300 via-indigo-200 to-white'
        >
            <div className='flex items-center justify-start w-full gap-5 p-4 font-serif border border-gray-700'>
                <span>Title:</span>
                <h3 className='text-xl'>
                    {results?.title}
                </h3>
            </div>
            <div className='flex items-start justify-between w-full'>
                <div className='w-[320px] h-[180px] flex-none'>
                    <img
                        src={` ${results?.featured_thumbnail}`}
                    />
                </div>
                <div className='w-full px-5 md:px-12 lg:px-32'>
                    <div className='w-full'>
                        <div className='flex w-full'>
                            <div className='w-auto px-6 py-4 font-serif text-xl font-medium text-white border border-b-0 bg-gradient-to-r from-indigo-400 to-indigo-600'>
                                .Mp4
                            </div>
                        </div>
                        <div className='flex flex-col w-full border'>
                            {results?.qualities && results?.qualities.map((quality) => (
                                <div className='flex items-center justify-between w-full p-4 border-b'>
                                    <div className=''>
                                        <span>
                                           {quality?.resolution}
                                        </span>
                                    </div>
                                    <div className=''>
                                        <span>
                                           .Mp4 type
                                        </span>
                                    </div>
                                    <div>
                                        <DownloadButton quality={quality} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Results