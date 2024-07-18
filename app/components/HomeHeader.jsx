import Link from 'next/link'
import React from 'react'
import { PiFlaskFill } from "react-icons/pi";
import { BsGrid3X3Gap } from "react-icons/bs";


function HomeHeader() {
  return (
    <header>
     <div className='flex justify-end space-x-5 p-5 items-center pr-7 text-sm'>
        <Link href={'https//:www.gmail.com'}>
        Gmail
        </Link>
        <PiFlaskFill  className='size-4'/>
        <BsGrid3X3Gap className='size-4' />
        <button className='bg-blue-500 px-4 py-2  rounded text-white'>Sign In</button>
     </div>
    </header>
  )
}

export default HomeHeader
