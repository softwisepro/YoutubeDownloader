import React, { useState } from 'react'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'

const Results = ({ results, isLoading }) => {

    const [dropDown, setDropDown] = useState(false);

    const handleDownload = (videoUrl) => {
        const link = document.createElement('a');
        link.href = videoUrl;
        link.download = 'WiseDownloaderPro.mp4';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    if (isLoading) {
        return (
            <div className='flex items-center justify-center w-full h-full'>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-repeat animate-spin" viewBox="0 0 16 16">
                    <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                    <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
                </svg>
            </div>
        )
    }

    if (!results) {
        return (
            <div className='w-full h-full px-32'>
                <div className='flex items-center justify-center'>
                    <p>Try to paste a link of a video you want to download from youtube, then click the download button</p>
                </div>
            </div>

        )
    }

    return (
        <div className='w-full h-full px-32'>
            <div className='flex items-center justify-center'>
                <div className='w-[320px] h-[182px] flex-none border'>
                    {results?.featured_thumbnail === null ? (
                        <div className='w-full h-full bg-gray-600 animate-pulse'></div>
                    ) : (
                        <img
                            src={`${results?.featured_thumbnail}`}
                            alt={`${results?.title}`}
                            className='object-cover w-full h-fill '
                        />
                    )}
                </div>

                <div className='w-full min-h-[180px] border border-l-0 p-5 flex flex-col gap-2'>
                    <h4
                        className='text-xl font-light'
                    >{results?.title}</h4>

                    <div className='flex items-center justify-start gap-5'>
                        <span className='text-sm font-extralight'>{results?.views} views</span>
                        <span className='text-sm font-extralight'>{results?.duration}</span>
                    </div>

                    <div className='relative flex items-center justify-center w-full max-mt-5'>
                        <div className='flex items-center justify-between w-full gap-2 p-1 bg-indigo-100'>
                            <div>
                                {results && results?.qualities.slice(0, 1).map((quality) => (
                                    <button onClick={() => handleDownload(quality?.url)} className='px-4 py-2 font-semibold text-gray-700'>
                                        Download
                                    </button>
                                ))}
                            </div>
                            <div className='flex'>
                                {results && results?.qualities.slice(0, 1).map((quality) => (
                                    <button
                                        className='flex-none px-4 py-2 font-semibold text-gray-700 bg-white'
                                    >
                                        Video Quality: &nbsp;&nbsp;<i className='text-green-500'>{quality?.resolution}</i>
                                    </button>
                                ))}
                                <button
                                    className='z-20 px-4 py-2 font-semibold text-gray-700 bg-white'
                                    onClick={() => setDropDown(!dropDown)}
                                >
                                    {dropDown ? (
                                        <RiArrowDropUpLine fontSize={20} />
                                    ) : (
                                        <RiArrowDropDownLine fontSize={20} />
                                    )}
                                </button>

                                <div className='absolute translate-y-10 animated'>
                                    {dropDown && (
                                        <div className='z-10 '>
                                            {results && results?.qualities.slice(1, ).map((quality) => (
                                                <button
                                                    onClick={() => handleDownload(quality?.url)}
                                                    className='flex-none px-4 py-2 font-semibold text-gray-700 bg-white border'
                                                >
                                                    Video Quality: &nbsp;&nbsp;
                                                    <i className='text-green-500'>
                                                        MP4  {quality?.resolution}
                                                    </i>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Results