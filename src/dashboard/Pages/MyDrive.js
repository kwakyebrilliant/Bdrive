import React, {useState, useEffect} from 'react'
import PartialNavbar from "../Partials/PartialNavbar";
import Sidebar from '../Partials/Sidebar';

import { FaShare } from 'react-icons/fa'

import { ethers } from 'ethers';
import BDrive from "../../artifacts/contracts/Bdrive.sol/Bdrive.json";

// const bdriveAddress = "0x7b06D17d015500968AA413611f763F5e10F17Df2";

 
function MyDrive() {

  const [showModal, setShowModal] = useState(false);

  const [files, setFiles] = useState([]);
  const [search, setSearch] = useState("");
  
  const [fileIndex, setFileIndex] = useState("");
  const [recipientAddress, setRecipientAddress] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState(false);
  const [isMetamaskConnected, setIsMetamaskConnected] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const bdriveAddress = "0x7b06D17d015500968AA413611f763F5e10F17Df2";
        const contract = new ethers.Contract(bdriveAddress, BDrive.abi, signer);
        const [names, timestamps, images] = await contract.listFiles();
        const files = names.map((name, index) => ({
          name,
          timestamp: timestamps[index].toNumber(),
          cid: images[index]
        }));
        setFiles(files);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);


  useEffect(() => {
    async function checkMetamask() {
      if (typeof window.ethereum !== "undefined") {
        setIsMetamaskInstalled(true);
        try {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          setIsMetamaskConnected(true);
        } catch (err) {
          setIsMetamaskConnected(false);
        }
      } else {
        setIsMetamaskInstalled(false);
      }
    }
    checkMetamask();
  }, []);

  async function shareFile() {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const bdriveAddress = "0x7b06D17d015500968AA413611f763F5e10F17Df2";
      const contract = new ethers.Contract(bdriveAddress, BDrive.abi, signer);

      await contract.shareFile(fileIndex, recipientAddress);
      setStatusMessage("File shared successfully!");
    } catch (err) {
      console.error(err);
      setStatusMessage("Error sharing file: " + err.message);
    }
  }

  // async function getImage(cid) {
  //   const web3Storage = new Web3Storage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDE0ZGU4NTUwMjAxMTdENDIyY0IxOTRBREJiZERlOTJGZjBkYzkxNzciLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzkzMTA5MjU2NDcsIm5hbWUiOiJCRHJpdmUifQ.hQVswoHltLw7O53wrarZP5lVW00dTI-lW6GmE4ozt6Q" });
  //   const res = await web3Storage.get(cid);
  //   if (res.status === 200) {
  //     const blob = await res.blob();
  //     return URL.createObjectURL(blob);
  //   } else {
  //     throw new Error("Failed to fetch image from web3.storage");
  //   }
  // }

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
                        <input onChange={(e) => setSearch(e.target.value)} value={search} type="search" id="search" className="block w-full p-4 pl-10 text-sm border border-gray-300 rounded-lg bg-blue-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-blue-100 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-600 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>

                {showModal ? (
                <div>
                  {isMetamaskInstalled ? (
                    isMetamaskConnected ? (
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
                                  Share File
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
                              Enter File Index
                          </p>

                          <div>
                              <label className="sr-only" for="index">Number</label>
                              <input
                              className="w-96 rounded-lg border-gray-200 shadow-md p-3 text-sm"
                              placeholder="eg. 1"
                              type="number"
                              id="index"
                              value={fileIndex} 
                              onChange={(e) => setFileIndex(e.target.value)}
                              />
                          </div>

                          <p className='text-md font-medium'>
                              Enter Receiver's Address
                          </p>

                          <div>
                              <label className="sr-only" for="address">Address</label>
                              <input
                              className="w-96 rounded-lg border-gray-200 shadow-md p-3 text-sm"
                              placeholder="eg. Polygon Address"
                              type="text"
                              id="address"
                              value={recipientAddress} 
                              onChange={(e) => setRecipientAddress(e.target.value)}
                              />
                          </div>

                          <a onClick={shareFile} className="group w-full relative inline-flex items-center overflow-hidden rounded bg-blue-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-green-600">
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
                                  Share File
                              </span>
                              </a>

                              <div>{statusMessage}</div>

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
                    ) : (
                      <div>Please connect to MetaMask.</div>
                    )
                  ) : (
                    <div>Please install MetaMask.</div>
                  )}
                </div>
                ): null}

                
               

                {/* Suggested */}
                <div className='mt-10'>
                <p className='text-md'>
                  Suggested
                </p>
                </div>

            
                <div className='w-full relative mt-3 grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-16'>
                {files
                      .slice(0, 4)
                      .map((file) => (
                          <div key={file.name}>
                              <iframe
                                  src={file.cid}
                                  alt={file.name}
                                  className="relative border block overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat"
                              />
                          </div>
                      ))}
                {files.length === 0 && 
                <div className="flex justify-center">
                    <h3 className='text-xl font-bold'>
                      No file found
                      </h3>
                  </div>}
              </div>


                {/* Files */}
                <div className='mt-10'>
                <p className='text-md'>
                  Files
                </p>
                </div>

                <div className='w-full relative mt-3 grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-16'>
                {files.length > 0 ? (
                  files
                    .filter((file) => file.name.match(new RegExp(search, 'i')))
                    .sort((a, b) => b.timestamp - a.timestamp)
                    .slice(0, 4)
                    .map((file) => (
                      <div key={file.name}>
                        <a href='#nothing' className='block'>
                          <iframe
                            className='h-56 w-full rounded-bl-3xl rounded-tr-3xl border object-cover sm:h-64 lg:h-72'
                            src={file.cid}
                            alt={file.name}
                          ></iframe>
                          <div className='mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4'>
                            <strong className='font-medium'>{file.name}</strong>
                            <span className='hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500'></span>
                            <p className='mt-0.5 opacity-50 sm:mt-0'>
                              {new Date(file.timestamp * 1000).toLocaleDateString()}
                            </p>
                            <span className='inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white'>
                            
                              <FaShare
                                className='text-blue-500 cursor-pointer lg:w-4 lg:h-4'
                                onClick={() => setShowModal(true)}
                              />
                            </span>
                          </div>
                        </a>
                      </div>
                    ))
                ) : (
                  <div className='flex justify-center'>
                    <h3 className='text-xl font-bold'>
                      No file found
                      </h3>
                  </div>
                )}
                </div>

                


                </div>
                

            </div>

        </div>
        </>
    </div>
  )
}

export default MyDrive