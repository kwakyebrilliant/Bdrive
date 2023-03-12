import React from 'react'
import { FaUsb } from 'react-icons/fa'

const Logo = () => {
  return (
    <nav className='border-gray-200 px-2 py-2.5 rounded dark:bg-gray-800'>
                <div className='flex items-center'>
                <FaUsb className=' text-blue-500 lg:w-[35px] lg:h-[35px]' />
                <h1 className='text-3xl font-bold text-white mr-4 sm:text-4xl'>BDRIVE.</h1>
                </div>

        </nav>
  )
}

export default Logo