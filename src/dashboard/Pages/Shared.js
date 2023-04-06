/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState, useEffect } from "react";
import PartialNavbar from "../Partials/PartialNavbar";
import Sidebar from '../Partials/Sidebar';


import { ethers } from "ethers";
import BDrive from "../../artifacts/contracts/Bdrive.sol/Bdrive.json";

const bdriveAddress = "0x7b06D17d015500968AA413611f763F5e10F17Df2";
const BDRIVE_ABI = BDrive.abi;


function Shared() {
  const [search, setSearch] = useState("");

  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);
  const [sharedFiles, setSharedFiles] = useState([]);


  useEffect(() => {
    async function init() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(bdriveAddress, BDRIVE_ABI, signer);

      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);

      setProvider(provider);
      setContract(contract);
    }

    init();
  }, []);

  useEffect(() => {
    async function loadSharedFiles() {
      if (contract && account) {
        const [sharedFiles, timestamps, images] = await contract.listSharedFiles();

        const fileData = sharedFiles.map((name, i) => ({
          name,
          timestamp: timestamps[i],
          image: images[i]
        }));

        setSharedFiles(fileData);
      }
    }

    loadSharedFiles();
  }, [contract, account]);
  
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
                    Shared
                  </span>
                </div>

                <form>   
                    <label for="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" onChange={(e) => setSearch(e.target.value)} value={search}  id="search" className="block w-full p-4 pl-10 text-sm border border-gray-300 rounded-lg bg-blue-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-blue-100 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-600 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>

                {/* Shared with me */}
                <div className='mt-10'>
                <p className='text-md'>
                  Shared with others
                </p>
                </div>
  
                <div className='w-full relative mt-3 grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-16'>
                {sharedFiles.length > 0 ? (
                  sharedFiles.filter((file) => file.name.match(new RegExp(search, 'i'))).map((file, i) => (

                      <div key={file.name}>
                        <a href='#nothing' className='block'>
                          <iframe
                            className='h-56 w-full rounded-bl-3xl rounded-tr-3xl border object-cover sm:h-64 lg:h-72'
                            src={file.image}
                            alt={file.name}
                          ></iframe>
                          <div className='mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4'>
                            <strong className='font-medium'>{file.name}</strong>
                            <span className='hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500'></span>
                            <p className='mt-0.5 opacity-50 sm:mt-0'>
                              {new Date(file.timestamp * 1000).toLocaleDateString()}
                            </p>
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

export default Shared