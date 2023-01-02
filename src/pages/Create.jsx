import React, { useRef } from 'react'
import { ToastContainer, toast } from 'react-toast'
import emailjs from '@emailjs/browser';

export default function Create(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_2mq1fur', 'template_alsx2st', form.current, 'user_xL0f900gdgaMXcKV1Ui2v')
      .then((result) => {
        notify();
      }, (error) => {
        console.log(error.text);
        formError();
      });
    e.target.reset();
  };

  const notify = () => {
    toast.success('Cocktail succesfully submitted!')
  };

  const formError = () => {
    toast.error('Something went wrong!')
  };
  
  return (
    <div id='create' className="min-h-screen flex justify-center items-start font-semibold pt-32 px-10 md:px-16 lg:px-20">
        <form onSubmit={sendEmail} ref={form} className='flex flex-col justify-center align-middle w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 text-left text-xl md:text-2xl'>
          <label className='w-full mb-2 border-b-2 border-orange-700'>Name:</label>
          <input 
            type='text' 
            name='name' 
            placeholder='Name' 
            required
            className='w-full mt-0 mb-3 rounded text-[#373A36] px-1'></input>
          <label className='w-full mb-2 border-b-2 border-orange-700'>Taste:</label>
          <input 
            type='text' 
            name='taste' 
            placeholder='Taste' 
            required
            className='w-full mt-0 mb-3 rounded text-[#373A36] px-1'></input>
          <label className='w-full mb-2 border-b-2 border-orange-700'>Preparation:</label>
          <input 
            type='text' 
            name='preperation' 
            placeholder='Preperation' 
            required
            className='w-full mt-0 mb-3 rounded text-[#373A36] px-1'></input>
          <label className='w-full mb-2 border-b-2 border-orange-700'>Strength:</label>
          <input 
            type='text' 
            name='strength' 
            placeholder='Strength' 
            required
            className='w-full mt-0 mb-3 rounded text-[#373A36] px-1'></input>
          <label className='w-full mb-2 border-b-2 border-orange-700'>Ingrediënts:</label>
          <input 
            type='text' 
            name='ingredients' 
            placeholder='List of ingrediënts' 
            required
            className='w-full mt-0 mb-3 rounded text-[#373A36] px-1'></input>
          <label className='w-full mb-2 border-b-2 border-orange-700'>Step-by-step plan:</label>
          <textarea 
            type='text' 
            name='stepbystep' 
            placeholder='How do you make the cocktail' 
            required
            className='w-full h-40 mt-0 mb-3 rounded text-[#373A36] px-1'></textarea>
          <input type='submit' value="Submit" className='mt-3 hover:text-orange-700 hover:bg-gray-200 hover: cursor-pointer flex flex-col justify-center items-center rounded-md w-full h-12 shadow-xl bg-orange-700 text-gray-200 duration-500'/>
        </form>
      <ToastContainer />
    </div>
  )
}