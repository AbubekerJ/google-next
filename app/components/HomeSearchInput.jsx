'use client'

import React, { useState } from 'react'
import { CiMicrophoneOn } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";

import { useRouter } from 'next/navigation';
function HomeSearchInput() {
 const router  = useRouter()
  const [input , serInput] = useState('')
 

  const handlesubmit = (e)=>{
    e.preventDefault()
     if(!input.trim()){
      return
     }
     router.push(`/search/web/?searchTerm=${input}`)
  }

  const handleClick = async (e)=>{
    e.preventDefault()
    const res = await fetch('https://random-word-api.herokuapp.com/word')
    const data = await res.json()
    router.push(`/search/web/?searchTerm=${data[0]}`)
     
  }

  return (
    <>
     <form onSubmit={handlesubmit} className='flex mt-5 w-full mx-auto max-w-[90%] sm:max-w-xl border-2 border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md items-center'>
     <IoIosSearch  className='text-gray-500 text-xl cursor-pointer mr-3' onClick={handlesubmit} />
     <input  className='flex-grow focus:outline-none ' onChange={(e)=>serInput(e.target.value)}/>
     <CiMicrophoneOn className='text-lg'  />

     </form>
    
     <div className='flex flex-row space-x-3'>
     <button onClick={handlesubmit} className='bg-[#f8f9fa] px-3 py-1 rounded-md text-sm text-gray-800 hover:ring-gray-200
                       active:ring-gray-300 focus:outline-none hover:shadow-md'>Google Search</button>
     <button onClick={handleClick} className='bg-[#f8f9fa] px-3 py-1 rounded-md text-sm text-gray-800 hover:ring-gray-200
                       active:ring-gray-300 focus:outline-none hover:shadow-md'>I am Feeling Lucky </button>
     </div> 
   
    
     
    </>
  )
}

export default HomeSearchInput
