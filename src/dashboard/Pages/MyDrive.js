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
                
                My Drive

            </div>

        </div>
        </>
    </div>
  )
}

export default MyDrive