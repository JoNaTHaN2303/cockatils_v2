import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div id='home' className="min-h-screen h-screen flex justify-center items-center">
      <div className='h-4/6 w-3/5 flex flex-col justify-center items-center text-center m-20 mt-32 rounded-md'>
        <div className='h-full w-full flex flex-col justify-end items-center text-gray-200 pb-10'>
          <p className='text-5xl sm:text-7xl mb-5 px-3 border-b-2 border-orange-700'>Cocktails</p>
          <p className='text-xl md:text-2xl'>Here you can view & create your own cocktails</p>
        </div>
        <div className='h-full w-full flex flex-col md:flex-row justify-start md:justify-center items-center md:items-start font-semibold text-lg text-orange-700 space-y-6 md:space-y-0 md:space-x-10 mb-10 text-center'>
          <Link to='/overzicht' className='bg-gray-200 flex flex-col justify-center items-center rounded-md w-64 h-12 shadow-xl hover:bg-orange-700 hover:text-gray-200 duration-500'>
            <p className=''>All cocktails</p>
          </Link>
          <Link to='/create' className='bg-gray-200 flex flex-col justify-center items-center rounded-md w-64 h-12 shadow-xl hover:bg-orange-700 hover:text-gray-200 duration-500'>
            <p className=''>Create your own</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
//[#373A36] - dark gray 1
//[#D48166] - orange 3