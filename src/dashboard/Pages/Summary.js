import React, {useState} from 'react'
import PartialNavbar from "../Partials/PartialNavbar";
import Sidebar from '../Partials/Sidebar';

function Summary() {
    const [showModal, setShowModal] = useState(false);
  return (
    <div className='text-black'>
        <>
        <div className='flex flex-auto'>
            <Sidebar />
            <div className='grow'>
                <PartialNavbar />

                <div className='m-5'>
            
                    <header className="rounded-2xl inset-x-0 bottom-0 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
                        <div className="sm:justify-between sm:items-center sm:flex">
                        <div className="text-center sm:text-left">
                            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                            Welcome Back, Brilliant!
                            </h1>

                            <p className="mt-1.5 text-sm text-gray-900">
                            Check your statistics on BDRIVE. 🎉
                            </p>
                        </div>

                        
                        </div>
                    </div>
                    </header>
                
                </div>


                {showModal ? (
                                <>
                                <div
                                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                >
                                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    {/*content*/}
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        {/*header*/}
                                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-xl font-semibold">
                                            Upload File
                                        </h3>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                            </span>
                                        </button>
                                        </div>
                                        {/*body*/}
                                        <div className="relative space-y-4 p-6 flex-auto">
                                        

                                    <p className='text-md font-medium'>
                                        File Name
                                    </p> 

                                    <div>
                                        <label className="sr-only" for="address">Name</label>
                                        <input
                                        className="w-96 rounded-lg border border-gray-300 focus:outline-none focus:ring active:bg-gray-300 p-3 text-sm"
                                        placeholder="eg. Doe's CV"
                                        type="text"
                                        id="name"
                                        />
                                    </div>

                                    <div className="flex items-center justify-center w-full">
                                        <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                            </div>
                                            <input id="dropzone-file" type="file" className="hidden" />
                                        </label>
                                    </div> 

                                    <a className="group w-full relative inline-flex items-center overflow-hidden rounded bg-blue-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-green-600" href="/">
                                        <span className="absolute left-0 -translate-x-full transition-transform group-hover:translate-x-4">
                                            <svg
                                            className="h-5 w-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                            </svg>
                                        </span>

                                        <span className="text-sm font-medium transition-all group-hover:ml-4">
                                            Submit
                                        </span>
                                        </a>

                                        </div>
                                        {/*footer*/}
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                </>
                            ) : null}

                <div className='w-full'>

                <div className='p-8'>
                <a onClick={() => setShowModal(true)} data-role="smoothscroll" className="group relative inline-block overflow-hidden border border-green-600 px-8 py-3 focus:outline-none focus:ring" href="#nothing">
                    <span className="absolute inset-x-0 bottom-0 h-[2px] bg-green-600 transition-all group-hover:h-full group-active:bg-green-600"></span>

                    <span className="relative text-sm font-medium text-green-600 transition-colors group-hover:text-white">
                        Upload File
                    </span>
                    </a>
                </div>

                    <div className='relative mx-10 mt-8 mb-20 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16'>

                    <a className="group relative block rounded-3xl border-4 border-black bg-white pt-12 transition hover:bg-blue-200 sm:pt-16 lg:pt-24">
                        <span
                            className="absolute inset-0 -z-10 -translate-x-2 -translate-y-2 rounded-3xl bg-white ring-4 ring-black"
                        ></span>

                        <span
                            className="absolute inset-0 -z-20 -translate-x-4 -translate-y-4 rounded-3xl bg-white ring-4 ring-black"
                        ></span>

                        <div className="p-4 sm:p-6 lg:p-8">
                            <p className="text-lg font-bold">Files Uploaded</p>

                            <p className="mt-1 font-mono text-xs">14 files</p>
                        </div>
                    </a>

                    <a className="group relative block rounded-3xl border-4 border-black bg-white pt-12 transition hover:bg-blue-200 sm:pt-16 lg:pt-24">
                        <span
                            className="absolute inset-0 -z-10 -translate-x-2 -translate-y-2 rounded-3xl bg-white ring-4 ring-black"
                        ></span>

                        <span
                            className="absolute inset-0 -z-20 -translate-x-4 -translate-y-4 rounded-3xl bg-white ring-4 ring-black"
                        ></span>

                        <div className="p-4 sm:p-6 lg:p-8">
                            <p className="text-lg font-bold">Shared With Me</p>

                            <p className="mt-1 font-mono text-xs">7 files</p>
                        </div>
                    </a>

                    <a className="group relative block rounded-3xl border-4 border-black bg-white pt-12 transition hover:bg-blue-200 sm:pt-16 lg:pt-24">
                        <span
                            className="absolute inset-0 -z-10 -translate-x-2 -translate-y-2 rounded-3xl bg-white ring-4 ring-black"
                        ></span>

                        <span
                            className="absolute inset-0 -z-20 -translate-x-4 -translate-y-4 rounded-3xl bg-white ring-4 ring-black"
                        ></span>

                        <div className="p-4 sm:p-6 lg:p-8">
                            <p className="text-lg font-bold">Favorite Uploads</p>

                            <p className="mt-1 font-mono text-xs">3 Files</p>
                        </div>
                    </a>


                    </div>

                </div>


            </div>

        </div>
        </>
    </div>
  )
}

export default Summary