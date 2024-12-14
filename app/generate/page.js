'use client'
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {

    const searchParams = useSearchParams();
    const [links, setLinks] = useState([{ linktext: "", link: "" }]);

    const [handle, sethandle] = useState(searchParams.get('handle') || "")
    const [imageLink, setimageLink] = useState("")
    const [description, setdescription] = useState("")

    const handleChange = (index, linktext, link) => {
        setLinks((initialLinks) => {
            return initialLinks.map((item, i) => {
                if (i == index) {
                    return { linktext, link };
                } else {
                    return item
                }
            });
        });
    };


    const addLinks = () => {
        setLinks(links.concat([{ link: "", linktext: "" }]))
    }

    const createTree = async () => {
        const response = await fetch("http://localhost:3000/api/add", {
            method: "POST",
            body: JSON.stringify({ handle, links, imageLink, description }),
        });
        const res = await response.json()
        if (res.success) {
            toast.success(res.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        } else {
            toast.error(res.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
    }
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className='bg-[#225ABF] min-h-screen grid grid-cols-2'>
                <div className='col1 flex flex-col items-center justify-center'>
                    <div className='flex flex-col gap-5 my-8'>
                        <h1 className='font-bold text-white text-4xl'>Create your BiTree</h1>

                        <div className='item'>
                            <h2 className='font-semibold text-2xl text-white'>Step 1: Claim Your Handle</h2>
                            <div className='mx-4'>
                                <input value={handle || ""} onChange={e => { sethandle(e.target.value) }} className='px-4 py-2 my-2 focus:outline-green-500 rounded-full' type="text" placeholder='Choose a handle' />
                            </div>
                        </div>

                        <div className='item'>
                            <h2 className='font-semibold text-2xl text-white'>Step 2: Add links</h2>
                            {links && links.map((item, index) => {
                                return <div key={index} className="mx-4">
                                    <input
                                        value={item.linktext || ""}
                                        onChange={e => handleChange(index, e.target.value, item.link)}
                                        className="px-4 py-2 mr-2 my-2 focus:outline-green-500 rounded-full"
                                        type="text"
                                        placeholder="Enter link text"
                                    />
                                    <input
                                        value={item.link || ""}
                                        onChange={e => handleChange(index, item.linktext, e.target.value)}
                                        className="px-4 py-2 my-2 mr-2 focus:outline-green-500 rounded-full"
                                        type="text"
                                        placeholder="Enter link"
                                    />
                                </div>
                            })}

                            <div className='button flex items-center justify-center'><button onClick={() => addLinks()} className="py-2 px-5 bg-slate-900 text-white font-bold rounded-3xl transform transition-transform duration-300 hover:scale-105">
                                Add Link
                            </button></div>

                        </div>
                        <div className='item'>
                            <h2 className='font-semibold text-2xl text-white'>Step 3: Add Picture and finalize</h2>
                            <div className='mx-4 flex flex-col justify-center'>
                                <input value={imageLink || ""} onChange={e => { setimageLink(e.target.value) }} className='px-4 py-2 mr-2 my-2 focus:outline-green-500 rounded-full' type="text" placeholder='Enter link to your picture' />
                                <textarea
                                    value={description || ""}
                                    onChange={e => { setdescription(e.target.value) }}
                                    className="px-4 py-2 mr-2 my-2 focus:outline-green-500 rounded-xl"
                                    placeholder="Enter your BiTree description"
                                    rows="4"
                                ></textarea>
                                <div className='flex items-center justify-center'>
                                    <button disabled={handle == "" || imageLink == "" || links[0].linktext == "" || links[0].link == "" || description == ""} onClick={() => createTree()} className="disabled:bg-slate-500 disabled:transition-none disabled:transform-none py-2 px-5 bg-slate-900 text-white font-bold rounded-3xl transform transition-transform duration-300 hover:scale-105">
                                        {handle == "" || imageLink == "" || links[0].linktext == "" || links[0].link == "" || description == "" ? "Fill all blocks" : "Create Your BiTree"}
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
        </>
    )
}

export default page
