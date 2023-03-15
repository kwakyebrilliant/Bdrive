import React from 'react'
import PartialNavbar from "../Partials/PartialNavbar";
import Sidebar from '../Partials/Sidebar';

function Summary() {
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

                <div className='w-full'>

                <div className='p-8'>
                <a data-role="smoothscroll" className="group relative inline-block overflow-hidden border border-green-600 px-8 py-3 focus:outline-none focus:ring" href="#nothing">
                    <span className="absolute inset-x-0 bottom-0 h-[2px] bg-green-600 transition-all group-hover:h-full group-active:bg-green-600"></span>

                    <span className="relative text-sm font-medium text-green-600 transition-colors group-hover:text-white">
                        Upload Action
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