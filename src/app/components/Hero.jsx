import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Hero = ({ setResults, results, setIsLoading, setHistory }) => {

    const [youtubeURL, setYoutubeURL] = useState('');
    const [videoError, setVideoError] = useState('')

    const handleFormSubmit = async (e) => {

        e.preventDefault();

        if (youtubeURL === '') {
            document.getElementById('input').classList.add('border-2')
            document.getElementById('input').classList.add('border-red-500')
        } else {
            setIsLoading(true)
            await axios.get('https://you-tube-downloader-api.vercel.app/video', {
                params: {
                    link: `${youtubeURL}`,
                }
            })
                .then(response => {
                    setResults(response.data.data)
                    localStorage.setItem('WDP', `${youtubeURL}`)
                    setIsLoading(false)
                })
                .catch(error => {
                    setIsLoading(false)
                    setVideoError('Try again, Enter a valid YouTube video Link')
                    setYoutubeURL('')
                    setTimeout(() => {
                        setVideoError('')
                    }, 10000);
                });
        }
    }


    useEffect(() => {
        const url = localStorage.getItem('WDP');
        if (url) {
            (async () => {
                await axios.get('https://you-tube-downloader-api.vercel.app/video', {
                    params: {
                        link: `${url}`,
                    }
                })
                    .then(response => {
                        setHistory(response.data.data)
                        setIsLoading(false)
                    })
                    .catch(error => {
                        setIsLoading(false)
                        setVideoError('Try again, Enter a valid YouTube video Link')
                    });
            })();
        } else {
            console.log('nothing')
        }
    }, [])


    return (
        <div className='flex flex-col items-center justify-center w-full h-full px-32 py-20 gap-y-12'>
            <h2
                className='text-2xl font-medium'
            >
                Download YouTube Videos For Free
            </h2>


            <div className='w-full'>
                {videoError !== '' ? (
                    <div className='flex items-center justify-center w-full p-1 text-xl font-bold tracking-widest text-red-600 transition-all duration-100 ease-in-out '>
                        {videoError}
                    </div>
                ) : (<></>)}
                <form onSubmit={handleFormSubmit} className='flex items-center justify-center w-full p-1 bg-indigo-600'>
                    <input
                        id='input'
                        type='text'
                        placeholder='Paste youtube video url here'
                        className='w-full p-4 border outline-none'
                        value={youtubeURL}
                        onChange={e => setYoutubeURL(e.target.value)}
                        required
                        autoComplete='off'
                    />
                    <button
                        className='p-4 font-medium text-white'
                    >
                        Download
                    </button>
                </form>
                <div className='w-full p-1'>
                    <p className='text-sm'>Very fast, secure and no scam</p>
                </div>
            </div>

        </div>
    )
}

export default Hero