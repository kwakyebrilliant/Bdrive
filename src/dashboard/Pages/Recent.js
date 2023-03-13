import React from 'react'
import PartialNavbar from "../Partials/PartialNavbar";
import Sidebar from '../Partials/Sidebar';

function Recent() {
  return (
    <div className='text-black'>
        <>
        <div className='flex flex-auto'>
            <Sidebar />
            <div className='grow'>
                <PartialNavbar />
                
                Recent

            </div>

        </div>
        </>
    </div>
  )
}

export default Recent