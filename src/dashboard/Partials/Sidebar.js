import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { BsArrowLeftCircle } from 'react-icons/bs'
import { AiFillPieChart, AiFillUsb } from 'react-icons/ai'
import { FaUsb, FaPeopleArrows, FaHeart, FaClock } from 'react-icons/fa'

const Sidebar = () => {
    const [open, setOpen] = useState(false)
    const location = useLocation()

    const Menus = [
        { title: 'Summary', path: '/summary', src: <AiFillPieChart /> },
        { title: 'My Drive', path: '/mydrive', src: <AiFillUsb /> },
        { title: 'Shared', path: '/shared', src: <FaPeopleArrows /> },
        // { title: 'Recent', path: '/Recent', src: <FaClock /> },
        // { title: 'Favorite', path: '/favorite', src: <FaHeart /> },
    ]

    return (
        <>
            <div
                className={`${
                    open ? 'w-60' : 'w-fit'
                } hidden max-h-max sm:block relative duration-300 bg-black border-r border-gray-200 p-5`}
            >
                <BsArrowLeftCircle
                    className={`${
                        !open && 'rotate-180'
                    } absolute text-3xl bg-white fill-slate-800  rounded-full cursor-pointer top-9 -right-4 dark:fill-gray-400 dark:bg-gray-800`}
                    onClick={() => setOpen(!open)}
                />
                <Link to='/'>
                    <div className={`flex ${open && 'gap-x-4'} items-center`}>
                    <FaUsb className=' text-blue-500 lg:w-[35px] lg:h-[35px]' />
                        {open && (
                            <span className='text-xl font-medium whitespace-nowrap dark:text-white'>
                                BDRIVE.
                            </span>
                        )}
                    </div>
                </Link>

                <ul className='pt-6'>
                    {Menus.map((menu, index) => (
                        <Link to={menu.path} key={index}>
                            <li
                                className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-blue-500
                        ${menu.gap ? 'mt-9' : 'mt-2'} ${
                                    location.pathname === menu.path &&
                                    'bg-gray-200 dark:bg-gray-700'
                                }`}
                            >
                                <span className='text-2xl'>{menu.src}</span>
                                <span
                                    className={`${
                                        !open && 'hidden'
                                    } origin-left duration-300 hover:block`}
                                >
                                    {menu.title}
                                </span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Sidebar
