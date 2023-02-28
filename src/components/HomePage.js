import React from 'react'
import Navigation from './Navigation'

export default function HomePage() {
  return (
    <div>
        <Navigation />

        <div className='w-full'>
            <div className='max-w-[1240px] mx-auto'>

            <div className='text-center pt-40'>
                <h1 className='text-5xl font-bold'>Secure All Your Contents On The Block</h1>
                <p className=' text-xl py-6 text-gray-500'>
                Store, share, and collaborate on files and folders from your mobile device, tablet, or computer
                </p>

                <div className="flex flex-wrap justify-center gap-4 mt-8 text-center">
                <a class="group relative inline-flex items-center overflow-hidden rounded bg-blue-700 px-8 py-3 text-white focus:outline-none focus:ring active:bg-blue-700" href="/">
                <span class="absolute left-0 -translate-x-full transition-transform group-hover:translate-x-4">
                    <svg
                    class="h-5 w-5"
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

                <span class="text-sm font-medium transition-all group-hover:ml-4">
                    Get Started
                </span>
                </a>

                <a class="group relative inline-block overflow-hidden border border-blue-700 px-8 py-3 focus:outline-none focus:ring" href="/">
                <span class="absolute inset-x-0 top-0 h-[2px] bg-blue-700 transition-all group-hover:h-full group-active:bg-blue-700"></span>

                <span class="relative text-sm font-medium text-blue-700 transition-colors group-hover:text-white">
                    Learn More
                </span>
                </a>
                </div>
                
            </div>

            </div>
        </div>
        
    </div>
  )
}
