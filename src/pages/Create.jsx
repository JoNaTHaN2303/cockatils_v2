import React from 'react'
import { ToastContainer, toast } from 'react-toast'

export default function Create(){
  const sendEmail = (e) => {
    e.preventDefault();

    e.target.reset();
    notify();
  };

  const notify = () => {
    toast.success('Cocktail succesvol opgeslaan!')
  }
  
  return (
    <div id='create' className="min-h-screen flex justify-center items-start font-semibold pt-40 px-10 md:px-16 lg:px-20">
      <div className='w-full flex flex-col md:flex-row md:pl-5'>
        <form action='' onSubmit={sendEmail} className='flex flex-col w-full'>
          <label className=''>Naam:</label>
          <input 
              type='text' 
              name='fullName'
              placeholder='Naam' 
              required
              className='field mt-2 mb-3 p-1 rounded-md'
          ></input>
          <textarea 
              placeholder='Schets in grote lijnen het concept van uw evenement'
              name='concept'
              required
              className='h-32 mt-2 mb-3 p-1 rounded-md'
          ></textarea>
          <button
              className='p-3 mb-7 mt-3 bg-[#ab0f2a] border-2 border-[#ab0f2a] rounded text-white hover:bg-gray-100 duration-[400ms] hover:text-black'
          >Verstuur</button>
        </form>
        <div className='w-full mt-2 text-left text-sm md:text-base xl:text-lg space-y-10'>
          <p className='w-full text-left text-md md:text-lg xl:text-xl mb-1 border-b-2 border-orange-700'>Name: </p>
          <p className='w-full text-left text-md md:text-lg xl:text-xl mb-1 border-b-2 border-orange-700'>Taste: </p>
          <p className='w-full text-left text-md md:text-lg xl:text-xl mb-1 border-b-2 border-orange-700'>Preparation: </p>
          <p className='w-full text-left text-md md:text-lg xl:text-xl mb-1 border-b-2 border-orange-700'>Strength: </p>
          <p className='w-full text-left text-md md:text-lg xl:text-xl mb-1 border-b-2 border-orange-700'>Ingrediënts: </p>
          <p className='w-full text-left text-md md:text-lg xl:text-xl mb-1 border-b-2 border-orange-700'>Step-by-step plan: </p>
        </div>
        
      </div>
      <ToastContainer />
    </div>
  )
}