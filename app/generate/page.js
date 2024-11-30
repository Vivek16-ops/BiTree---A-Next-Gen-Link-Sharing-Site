import React from 'react'

const page = () => {
    return (
        <div className='bg-[#225ABF] min-h-screen grid grid-cols-2'>
            <div className='col1 flex flex-col items-center justify-center'>
                <div className='flex flex-col gap-5 my-8'>
                    <h1 className='font-bold text-white text-4xl'>Create your BiTree</h1>

                    <div className='item'>
                        <h2 className='font-semibold text-2xl text-white'>Step 1: Claim Your Handle</h2>
                        <div className='mx-4'>
                            <input className='px-4 py-2 my-2 focus:outline-green-500 rounded-full' type="text" placeholder='Choose a handle' />
                        </div>
                    </div>

                    <div className='item'>
                        <h2 className='font-semibold text-2xl text-white'>Step 2: Add links</h2>
                        <div className='mx-4'>
                            <input className='px-4 py-2 mr-2 my-2  focus:outline-green-500 rounded-full' type="text" placeholder='Enter link text' />
                            <input className='px-4 py-2 my-2 mr-2  focus:outline-green-500 rounded-full' type="text" placeholder='Enter link' />
                            <button className="py-2 px-5 bg-slate-900 text-white font-bold rounded-3xl transform transition-transform duration-300 hover:scale-105">
                                Add Link
                            </button>
                        </div>
                    </div>
                    <div className='item'>
                        <h2 className='font-semibold text-2xl text-white'>Step 3: Add Picture and finalize</h2>
                        <div className='mx-4 flex flex-col justify-center'>
                            <input className='px-4 py-2 mr-2 my-2 focus:outline-green-500 rounded-full' type="text" placeholder='Enter link to your picture' />
                            <div className='flex items-center justify-center'>
                                <button className="py-2 px-5 bg-slate-900 text-white font-bold rounded-3xl transform transition-transform duration-300 hover:scale-105">
                                    Finish
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='col2 w-full h-screen'>
                <img className='h-screen' src='https://assets.production.linktr.ee/auth/1979/media/banner-login-desktop.5084c2cf19da310f7e78.png' />
            </div>
        </div>
    )
}

export default page
