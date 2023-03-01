import React from 'react'
import Navigation from './Navigation'

import bg from '../assets/bg.jpg'
import img1 from '../assets/img1.jpg'
import supportImg from '../assets/support.jpeg'

import { Link } from 'react-router-dom'
import {
    ChipIcon, 
    SupportIcon
  } from '@heroicons/react/solid'
  import { 
    PhoneIcon, 
    ArrowSmRightIcon, 
    MicrophoneIcon,
    VideoCameraIcon,
    DocumentIcon
} from '@heroicons/react/outline';

export default function HomePage() {
  return (
    <div>
        <Navigation />

        <div className='w-full h-screen px-20 bg-white flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <h1 className='py-3 text-4xl md:text-6xl font-bold'>Secure <strong className="font-extrabold text-blue-700 sm:block">Contents</strong></h1>
                <p className='max-w-lg sm:leading-relaxed sm:text-xl'>Store, share, and collaborate on files </p>
                <p className='max-w-lg sm:leading-relaxed sm:text-xl'>with everything running on the blockchain.</p>
                <div className="flex flex-wrap gap-4 mt-8 text-center">
                <a className="group relative inline-flex items-center overflow-hidden rounded bg-blue-700 px-8 py-3 text-white focus:outline-none focus:ring active:bg-blue-700" href="/">
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
                    Get Started
                </span>
                </a>

                <a data-role="smoothscroll" className="group relative inline-block overflow-hidden border border-blue-700 px-8 py-3 focus:outline-none focus:ring" href="#about">
                <span className="absolute inset-x-0 top-0 h-[2px] bg-blue-700 transition-all group-hover:h-full group-active:bg-blue-700"></span>

                <span className="relative text-sm font-medium text-blue-700 transition-colors group-hover:text-white">
                    Learn More
                </span>
                </a>
                </div>

            </div>
            
            <div className='mx-auto max-w-lg text-center lg:mx-0 lg:text-left'>
                <img className='w-full justify-center' src={bg} alt="/" />
            </div>
           

           
        </div>

        <div className="relative ">
        <div className="absolute inset-0 flex items-center">
            <div className="w-full border-b border-gray-300"></div>
        </div>
        </div>

    </div>



    <section>
  <div id="about" className="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
    <div
      className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
    >
      <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
        <img className='w-full justify-center' src={img1} alt="/" />
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">

        <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-blue-300 hover:ring-1 hover:ring-blue-300 focus:outline-none focus:ring" href="#nothing">
          <span className="inline-block rounded-lg bg-gray-50 p-3">
          <MicrophoneIcon className='h-6 w-6' />
          </span>

          <h2 className="mt-2 font-bold">Audio</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-blue-300 hover:ring-1 hover:ring-blue-300 focus:outline-none focus:ring" href="#noting">
          <span className="inline-block rounded-lg bg-gray-50 p-3">
          <VideoCameraIcon className='h-6 w-6' />
          </span>

          <h2 className="mt-2 font-bold">Video</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-blue-300 hover:ring-1 hover:ring-blue-300 focus:outline-none focus:ring" href="/accountant">
          <span className="inline-block rounded-lg bg-gray-50 p-3">
          <DocumentIcon className='h-6 w-6' />
          </span>

          <h2 className="mt-2 font-bold">PDF</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="/accountant">
          <span className="inline-block rounded-lg bg-gray-50 p-3">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 className="mt-2 font-bold">Accountant</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="/accountant">
          <span className="inline-block rounded-lg bg-gray-50 p-3">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 className="mt-2 font-bold">Accountant</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="/accountant">
          <span className="inline-block rounded-lg bg-gray-50 p-3">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 className="mt-2 font-bold">Accountant</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="/accountant">
          <span className="inline-block rounded-lg bg-gray-50 p-3">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 className="mt-2 font-bold">Accountant</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="/accountant">
          <span className="inline-block rounded-lg bg-gray-50 p-3">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 className="mt-2 font-bold">Accountant</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="/accountant">
          <span className="inline-block rounded-lg bg-gray-50 p-3">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 className="mt-2 font-bold">Accountant</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>
      

       

       
      </div>
    </div>
  </div>
</section>


<div className='w-full mt-24'>

<div className='w-full h-[700px] bg-gray-900/90 absolute'>
    <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
</div>

<div className='max-w-[1240px] mx-auto text-white relative'>
    <div className='px-4 py-12'>
      <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
      <h3 className='text-5xl font-bold py-6 text-center'>Got Questions?</h3>
      <p className='py-4 text-3xl text-slate-300 text-center'>
        We have a reliable team available to assist you in all your questions and help you go about your 
        activities on the platform. Remember we are here to serve you to get the best of deals available on
        this platform.
    </p>
    </div>

    <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>

    <div className="relative hover:shadow-lg block bg-white p-8 overflow-hidden border border-gray-100 rounded-lg">
            <span
                className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-blue-300 via-blue-500 to-purple-600"
            ></span>

            <div className="justify-between sm:flex">
                <div>
                <h5 className="text-2xl font-bold text-gray-900">
                    Sales
                </h5>
                <p className="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
                </div>

                <div className="flex-shrink-0 hidden ml-3 sm:block">
                <PhoneIcon className='w-16 h-16 p-4 object-cover bg-blue-700 shadow-2xl text-white rounded-lg' />
                </div>
            </div>

            <div className="mt-4 sm:pr-8">
                <p className="text-sm text-gray-500">
                We have a reliable team on standby ready to provide answers to all questions
                with regards to how to navigate your way on the platform.
                </p>
            </div>

            <dl className="flex mt-6">
                <div className="flex flex-col-reverse">
                <Link to="#faqs">
                <dt className="text-sm font-medium flex text-blue-700">Continue <ArrowSmRightIcon className='w-5 ml-2' /></dt>
                    </Link>
                <dd className="text-xs text-gray-500">Continue on FAQ's</dd>
                </div>

            </dl>
            </div>

            <div className="relative hover:shadow-lg block bg-white p-8 overflow-hidden border border-gray-100 rounded-lg">
            <span
                className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-blue-300 via-blue-500 to-purple-600"
            ></span>

            <div className="justify-between sm:flex">
                <div>
                <h5 className="text-2xl font-bold text-gray-900">
                Technical Support
                </h5>
                <p className="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
                </div>

                <div className="flex-shrink-0 hidden ml-3 sm:block">
                <SupportIcon className='w-16 h-16 p-4 object-cover bg-blue-600 shadow-2xl text-white rounded-lg' />
                </div>
            </div>

            <div className="mt-4 sm:pr-8">
                <p className="text-sm text-gray-500">
                We have a reliable team on standby ready to assist you on how
                to use the platform to acquire a secure contents and use them at any time.
                </p>
            </div>

            <dl className="flex mt-6">
                <div className="flex flex-col-reverse">
                <Link to="#faqs">
                <dt className="text-sm font-medium flex text-blue-700">Continue <ArrowSmRightIcon className='w-5 ml-2' /></dt>
                    </Link>
                <dd className="text-xs text-gray-500">Continue on FAQ's</dd>
                </div>

            </dl>
            </div>

            <div className="relative hover:shadow-lg block bg-white p-8 overflow-hidden border border-gray-100 rounded-lg">
            <span
                className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-blue-300 via-blue-500 to-purple-600"
            ></span>

            <div className="justify-between sm:flex">
                <div>
                <h5 className="text-2xl font-bold text-gray-900">
                    Media Inquiries
                </h5>
                <p className="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
                </div>

                <div className="flex-shrink-0 hidden ml-3 sm:block">
                <ChipIcon className='w-16 h-16 p-4 object-cover bg-blue-700 shadow-2xl text-white rounded-lg' />
                </div>
            </div>

            <div className="mt-4 sm:pr-8">
                <p className="text-sm text-gray-500">
                We have a reliable team on standby ready to provide you with more
                media regarding your content on the platform. 
                </p>
            </div>

            <dl className="flex mt-6">
                <div className="flex flex-col-reverse">
                <Link to="#faqs">
                <dt className="text-sm font-medium flex text-blue-700">Continue <ArrowSmRightIcon className='w-5 ml-2' /></dt>
                    </Link>
                <dd className="text-xs text-gray-500">Continue on FAQ's</dd>
                </div>

            </dl>
            </div>

            
    </div>    

</div>

</div>

<footer aria-label="Site Footer" className="bg-white">
  <div className="max-w-screen-xl px-4 pt-16 pb-8 mx-auto sm:px-6 lg:px-8 lg:pt-24">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">
        Every Other Contents
      </h2>

      <p className="max-w-sm mx-auto mt-4 text-gray-500">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum maiores
        ipsum eos temporibus ea nihil.
      </p>

      <a href="#" className="inline-block px-12 py-3 mt-8 text-sm font-medium text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring active:bg-blue-700">
        Get Started
      </a>
    </div>

    <div
      className="pt-8 mt-16 border-t border-gray-100 sm:flex sm:items-center sm:justify-between lg:mt-24"
    >
      <nav aria-label="Footer Navigation - Support">
        <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75">
              Terms & Conditions
            </a>
          </li>

          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75">
              Privacy Policy
            </a>
          </li>

          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75">
              Cookies
            </a>
          </li>
        </ul>
      </nav>

      <ul className="flex justify-center gap-6 mt-8 sm:mt-0 lg:justify-end">
        <li>
          <a
            href="/"
            rel="noreferrer"
            target="_blank"
            className="text-gray-700 transition hover:opacity-75"
          >
            <span className="sr-only">Facebook</span>

            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="/"
            rel="noreferrer"
            target="_blank"
            className="text-gray-700 transition hover:opacity-75"
          >
            <span className="sr-only">Instagram</span>

            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="/"
            rel="noreferrer"
            target="_blank"
            className="text-gray-700 transition hover:opacity-75"
          >
            <span className="sr-only">Twitter</span>

            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="/"
            rel="noreferrer"
            target="_blank"
            className="text-gray-700 transition hover:opacity-75"
          >
            <span className="sr-only">GitHub</span>

            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="/"
            rel="noreferrer"
            target="_blank"
            className="text-gray-700 transition hover:opacity-75"
          >
            <span className="sr-only">Dribbble</span>

            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
</footer>

  
        
    </div>
  )
}
