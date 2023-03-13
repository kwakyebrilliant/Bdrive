import React from 'react'
import PartialNavbar from "../Partials/PartialNavbar";
import Sidebar from '../Partials/Sidebar';

function MyDrive() {
  return (
    <div className='text-black'>
        <>
        <div className='flex flex-auto'>
            <Sidebar />
            <div className='grow'>
                <PartialNavbar />

                <div className='m-5'>

                <div className='my-5'>
                  <span className='text-3xl font-medium whitespace-nowrap'>
                    My Drive
                  </span>
                </div>

                <form>   
                    <label for="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="search" className="block w-full p-4 pl-10 text-sm border border-gray-300 rounded-lg bg-blue-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-blue-100 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-600 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>


                {/* Suggested */}
                <div className='mt-10'>
                <p className='text-md'>
                  Suggested
                </p>
                </div>

            
                <div className='w-full'>

                  <div className='relative mt-3 grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-16'>
                 
                  <a href="#nothing" className="relative block overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80)] bg-cover bg-center bg-no-repeat"
                  >
                    <div className="absolute inset-0 bg-black/25"></div>

                    <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                      <div className="sm:pt-18 pt-12 text-white lg:pt-24">
                        <h3 className="text-xl font-bold sm:text-2xl">Rome</h3>

                        <p className="text-sm">2 minutes ago</p>
                      </div>

                      <span
                        className="inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white"
                      >
                        PNG

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-yellow-300"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                      </span>
                    </div>
                  </a>

                  <a href="#nothing" className="relative block overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80)] bg-cover bg-center bg-no-repeat"
                  >
                    <div className="absolute inset-0 bg-black/25"></div>

                    <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                      <div className="sm:pt-18 pt-12 text-white lg:pt-24">
                        <h3 className="text-xl font-bold sm:text-2xl">Rome</h3>

                        <p className="text-sm">2 minutes ago</p>
                      </div>

                      <span
                        className="inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white"
                      >
                        PNG

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-yellow-300"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                      </span>
                    </div>
                  </a>

                  <a href="#nothing" className="relative block overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80)] bg-cover bg-center bg-no-repeat"
                  >
                    <div className="absolute inset-0 bg-black/25"></div>

                    <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                      <div className="sm:pt-18 pt-12 text-white lg:pt-24">
                        <h3 className="text-xl font-bold sm:text-2xl">Rome</h3>

                        <p className="text-sm">2 minutes ago</p>
                      </div>

                      <span
                        className="inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white"
                      >
                        PNG

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-yellow-300"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                      </span>
                    </div>
                  </a>

                  <a href="#nothing" className="relative block overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80)] bg-cover bg-center bg-no-repeat"
                  >
                    <div className="absolute inset-0 bg-black/25"></div>

                    <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                      <div className="sm:pt-18 pt-12 text-white lg:pt-24">
                        <h3 className="text-xl font-bold sm:text-2xl">Rome</h3>

                        <p className="text-sm">2 minutes ago</p>
                      </div>

                      <span
                        className="inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white"
                      >
                        PNG

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-yellow-300"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                      </span>
                    </div>
                  </a>

                  </div>

                </div>


                {/* Files */}
                <div className='mt-10'>
                <p className='text-md'>
                  Files
                </p>
                </div>

                <div className='w-full'>
                <div className='relative mt-3 grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-16'>

                <a href="#nothing" class="block">
                  <img
                    alt="Signage"
                    src="https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                    class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                  />

                  <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                    <strong class="font-medium">Company Name</strong>

                    <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                    <p class="mt-0.5 opacity-50 sm:mt-0">Branding / Signage</p>
                  </div>
                </a>


                </div>
                </div>


                </div>
                

            </div>

        </div>
        </>
    </div>
  )
}

export default MyDrive