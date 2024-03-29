/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect, useRef} from 'react'
import PartialNavbar from "../Partials/PartialNavbar";
import Sidebar from '../Partials/Sidebar';

import { ethers } from 'ethers';
import { Web3Storage } from 'web3.storage';
import BDrive from "../../artifacts/contracts/Bdrive.sol/Bdrive.json";

const bdriveAddress = "0x7b06D17d015500968AA413611f763F5e10F17Df2";

function getAccessToken () {
   
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDE0ZGU4NTUwMjAxMTdENDIyY0IxOTRBREJiZERlOTJGZjBkYzkxNzciLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzkzMTA5MjU2NDcsIm5hbWUiOiJCRHJpdmUifQ.hQVswoHltLw7O53wrarZP5lVW00dTI-lW6GmE4ozt6Q'
  }

  function makeStorageClient () {
    return new Web3Storage({ token: getAccessToken() })
  }


function Summary() {

    const [showModal, setShowModal] = useState(false);

    const [name, setName] = useState("");
    const [image, setImage] = useState(``);
    const [haveMetamask, sethaveMetamask] = useState(true);
    const [useraddress, setUserAddress] = useState('');


    useEffect(() => {
        const { ethereum } = window;
      
        const requestAccount = async () => {
          if (!ethereum) {
            sethaveMetamask(false);
          }
          sethaveMetamask(true);
          const accounts = await ethereum.request({
            method: 'eth_requestAccounts',
          });
          setUserAddress(accounts[0]);
        };
        requestAccount();
      }, []);
      
    

      const hiddenFileInput = useRef(null);
      
      const handleClick = () => {
        hiddenFileInput.current.click();
      };
    
      async function handleChange(event) {
        const fileUploaded = event.target.files[0];
        setImage(URL.createObjectURL(event.target.files[0]));
        const client = makeStorageClient()
        const cid = await client.put([fileUploaded])
        console.log('stored files with cid:', cid)
    
        const res = await client.get(cid)
        console.log(`Got a response! [${res.status}] ${res.statusText}`)
        if (!res.ok) {
          throw new Error(`failed to get ${cid} - [${res.status}] ${res.statusText}`)
        }
    
    
        const filess = await res.files();
        setImage(`https://${cid}.ipfs.dweb.link/${fileUploaded.name}`);
        console.log(image)
        console.log(fileUploaded)
        for (const file of filess) {
          console.log(`${file.cid} -- ${file.path} -- ${file.size}`)
        }
        return cid
    
      };


      async function uploadFile() {
        if (!name) return;
        if (!image) return;

        // If MetaMask exists
    if (typeof window.ethereum !== "undefined") {
    // await requestAccount();

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(bdriveAddress, BDrive.abi, signer);
    const transaction = await contract.uploadFile( 
        name,
        image
    );

    setName("");
    setImage("");
    await transaction.wait();
  }
  window.location.reload(false);

}
    
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
                            Welcome Back, User
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
                                        required
                                        onChange={(e) => setName(e.target.value)}
                                        value={name} 
                                        />
                                    </div>



                                    <p className='text-md mt-10 font-medium'>
                                        Choose File
                                    </p> 

                                    <div className="flex cursor-pointer w-full items-center justify-center bg-grey-lighter">
                                        <label onClick={handleClick} className="w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-600 hover:text-white">
                                            <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                            </svg>
                                            <span className="mt-2 text-base leading-normal">Select a file</span>
                                            <input 
                                            type='file' 
                                            className="hidden"
                                            ref={hiddenFileInput}
                                            onChange={handleChange} 
                                            />
                                        </label>
                                    </div>

                                    {image && (
                                        <iframe
                                        className='w-full'
                                            src={image}
                                        >
                                            </iframe>
                                    )}


                                    <a onClick={uploadFile} type='submit' className="group w-full relative inline-flex items-center overflow-hidden rounded bg-blue-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-green-600" >
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
                <a onClick={() => setShowModal(true)} data-role="smoothscroll" className="group relative inline-block overflow-hidden border border-green-600 px-8 py-3 focus:outline-none focus:ring">
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

                            <p className="mt-1 font-mono text-xs">Upload files of all kind</p>
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
                            <p className="text-lg font-bold">Shared With Others</p>

                            <p className="mt-1 font-mono text-xs">Those files you share with others</p>
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
                            <p className="text-lg font-bold">My Drive</p>

                            <p className="mt-1 font-mono text-xs">All your files</p>
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