import React, { useState } from 'react'
import axios from 'axios'

const SearchBar = () => {

    const [youtubeURL, setYoutubeURL] = useState('');

    const handleFormSubmit = async (e) => {

        e.preventDefault();

        if (youtubeURL === '') {
            console.log('empty')
        } else {
            const res = await axios.get('https://you-tube-downloader-api.vercel.app/download', {
                params: {
                  link: `${youtubeURL}`,
                }
              })
                // .then(response => {
                //   // handle success
                // })
                // .catch(error => {
                //   // handle error
                // });
            console.log(res)
        }
    }

    return (
        <div className='md:max-w-[800px] md:min-w-[700px] lg:max-w-[1000px] lg:min-w-[900px] p-12 rounded-3xl shadow-xl'>

            <form className='relative flex md:block flex-col gap-3' onSubmit={handleFormSubmit}>
                <input
                    type='text'
                    placeholder={`Paste video url here . . . `}
                    className='p-8 text-base w-full text-gray-600 font-medium outline-none rounded-lg md:rounded-full bg-gradient-to-r from-slate-50 to-slate-200'
                    value={youtubeURL}
                    onChange={e => setYoutubeURL(e.target.value)}
                />
                <button
                    className='py-4 md:absolute bg-gradient-to-r px-10 shadow-lg shadow-black/20 from-indigo-100 to-indigo-400  right-10 top-4 text-white font-medium rounded-2xl'
                >
                    Download
                </button>
            </form>
        </div>
    )
}

export default SearchBar