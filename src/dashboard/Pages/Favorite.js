import React from 'react'
import PartialNavbar from "../Partials/PartialNavbar";
import Sidebar from '../Partials/Sidebar';

function Favorite() {
  return (
    <div className='text-black'>
        <>
        <div className='flex flex-auto'>
            <Sidebar />
            <div className='grow'>
                <PartialNavbar />
                
                Favorite

            </div>

        </div>
        </>
    </div>
  )
}

export default Favorite