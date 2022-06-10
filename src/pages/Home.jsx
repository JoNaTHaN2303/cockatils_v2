import React from 'react'
import { Link } from 'react-router-dom'
import { MdCreate } from 'react-icons/md'
import * as images from '../images/images'

export default function Home(){
  return (
    <div id='home' className="min-h-screen h-screen flex justify-center items-center">
      <div className='h-5/6 w-4/5 flex justify-center items-center m-20 mt-40 bg-gray-200 rounded-md'>
        <div className='h-full w-1/2 flex flex-col justify-center items-start p-10 text-[#373A36]'>
          <p className='text-6xl mb-5 border-b-2 border-orange-700'>Cocktails</p>
          <p className='text-xl'>Here you can create your own cocktails</p>
        </div>
        <div className='h-full w-1/2 flex justify-center items-center'>
          <img src={images.cocktailHome1} alt="" className='h-5/6 rounded-lg shadow-md'/>
        </div>
      </div>
    </div>
  )
}
//[#373A36] - dark gray 1
//[#D48166] - orange 3