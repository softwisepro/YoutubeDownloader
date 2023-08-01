import React, { useEffect, useState } from 'react'
import { RiArrowDropUpLine, RiArrowDropDownLine } from 'react-icons/ri'

const History = ({ history }) => {

    const [dropDown, setDropDown] = useState(false);
    const [errorHistory, setErrorHistory] = useState(false)

    const handleDownload = (videoUrl) => {
        const link = document.createElement('a');
        link.href = videoUrl;
        link.download = 'WiseDownloaderPro.mp4';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    useEffect(() => {
        const url = localStorage.getItem('WDP')
        if (!url) {
            setErrorHistory(true)
        } else {
            setErrorHistory(false)
        }
    }, []);

    if (errorHistory) return null;


    if (!history) return (
        <div className='w-full h-full px-32 my-10'>
            <div className='relative flex items-center justify-center w-full py-5'>
                <h5
                    className='z-20 px-4 text-xl font-bold tracking-wider bg-white'
                >View Your Last Download history</h5>
                <div className='absolute w-full h-1 bg-gray-300' />
            </div>
            <div className='flex items-center justify-center'>
                <div className='w-[320px] h-[182px] flex-none border bg-gray-500 animate-pulse' />
                <div className='w-full min-h-[180px] border border-l-0 p-5 flex flex-col gap-2 bg-gray-200 animate-pulse'></div>
            </div>
        </div>
    )

    return (
        <div className='w-full h-full px-32 my-10'>
            <div className='relative flex items-center justify-center w-full py-5'>
                <h5
                    className='z-20 px-4 text-xl font-bold tracking-wider bg-white'
                >View Your Last Download history</h5>
                <div className='absolute w-full h-1 bg-gray-300' />
            </div>
            <div className='flex items-center justify-center'>
                <div className='w-[320px] h-[182px] flex-none border'>
                    {history?.featured_thumbnail === null ? (
                        <div className='w-full h-full bg-gray-600 animate-pulse'></div>
                    ) : (
                        <img
                            src={`${history?.featured_thumbnail}`}
                            alt={`${history?.title}`}
                            className='object-cover w-full h-fill '
                        />
                    )}
                </div>

                <div className='w-full min-h-[180px] border border-l-0 p-5 flex flex-col gap-2'>
                    <h4
                        className='text-sm font-light'
                    >{history?.title}</h4>

                    <div className='flex items-center justify-start gap-5'>
                        <span className='text-sm font-extralight'>{history?.views} views</span>
                        <span className='text-sm font-extralight'>{history?.duration}</span>
                    </div>

                    <div className='relative flex items-center justify-center w-full max-mt-5'>
                        <div className='flex items-center justify-between w-full gap-2 p-1 bg-indigo-100'>
                            <div>
                                {history && history?.qualities.slice(0, 1).map((quality) => (
                                    <button key={quality?.url} onClick={() => handleDownload(quality?.url)} className='px-4 py-2 font-semibold text-gray-700'>
                                        Download
                                    </button>
                                ))}
                            </div>
                            <div className='flex'>
                                {history && history?.qualities.slice(0, 1).map((quality) => (
                                    <button
                                        key={quality?.url}
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
                                            {history && history?.qualities.slice(1,).map((quality) => (
                                                <button
                                                    key={quality?.url}
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

export default History