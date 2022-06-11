import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { MdCreate } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
import * as images from '../images/images'

export default function Navbar(){
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
      setMobileMenu(false);
  }, [])
  
  return (<>
    <div className='fixed top-0 left-0 w-screen flex justify-between items-center px-8 md:px-14 lg:px-40 py-2 h-20 bg-[#373A36]'>
      <div className='flex justify-center items-center'>
        <Link to={'/'} className="">
          <img src={images.cocktailIcon} alt='' className='h-12'/>
        </Link>
      </div>
      <div className='hidden md:flex justify-center items-center space-x-10'>
        <NavLink className={({ isActive }) => isActive ? "text-center px-2 py-1 border-b-2 border-orange-700 hover:text-orange-700 duration-500"
          : "text-center border-b-2 border-[#373A36] px-2 py-1 hover:text-orange-700 duration-500"} to={'/'}>
          Home
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-center px-2 py-1 border-b-2 border-orange-700 hover:text-orange-700 duration-500"
          : "text-center border-b-2 border-[#373A36] px-2 py-1 hover:text-orange-700 duration-500"} to={'/overzicht'}>
          Cocktails
        </NavLink>
        <Link className="group flex justify-center items-center bg-orange-700 px-4 py-1 rounded-md hover:bg-gray-200 hover:text-orange-700 duration-500" to={'/create'}>
          Create <MdCreate className='ml-2 group-hover:animate-bounce'/>
        </Link>
      </div>
      <div className='md:hidden flex justify-center items-center'>
        <FaBars onClick={() => {setMobileMenu(!mobileMenu)}} className=''/>
      </div>
    </div>
    {mobileMenu && (
      <div className='fixed top-0 left-0 flex justify-center items-center h-full w-full bg-[#373A36]'>
        <div className='fixed top-0 right-0 m-8'>
          <AiOutlineClose onClick={() => {setMobileMenu(!mobileMenu)}} className='w-8 h-8 text-orange-700'/>
        </div>
        <div className='flex flex-col justify-between items-center space-y-8'>
          <Link onClick={() => { setMobileMenu(false) } } className='' to={'/'}>Home</Link>
          <Link onClick={() => { setMobileMenu(false) } } className='' to={'/overzicht'}>Cocktails</Link>
          <Link onClick={() => { setMobileMenu(false) } } className='' to={'/create'}>Create</Link>
        </div>
      </div>
    )}
  </>)
}

// return (<>
//   <div className='sticky top-0 flex items-center justify-between px-10 md:px-20 lg:px-36 h-20 bg-gray-300 text-[#373A36] text-lg'>
//     <div className='flex items-center h-20'>
//       <Link to={'/'} className="flex items-center">
//         <img src={images.cocktailIcon} alt='' className='h-12 mr-2'/> Cocktails
//       </Link>
//     </div>
//     <div className='hidden md:flex items-center h-10 space-x-10'>
//       <NavLink className={({ isActive }) => isActive ? "h-8 px-2 flex items-center border-b-2 border-[#D48166] duration-500"
//         : "h-8 px-2 flex items-center border-b-2 border-gray-300 hover:border-[#D48166] duration-500"} to={'/'}>
//         Home
//       </NavLink>
//       <NavLink className={({ isActive }) => isActive ? "h-8 px-2 flex items-center border-b-2 border-[#D48166] duration-500"
//         : "h-8 px-2 flex items-center border-b-2 border-gray-300 hover:border-[#D48166] duration-500"} to={'/overzicht'}>
//         Overzicht
//       </NavLink>
//     </div>
//     <div className='md:hidden flex items-center justify-center'>
//       <FaBars onClick={() => { setMobileMenu(!mobileMenu) } } />
//     </div>
//     <div className='hidden md:flex items-center'>
//       <Link className="flex items-center rounded-md px-4 py-1 bg-[#D48166] hover:bg-[#373A36] hover:text-[#D48166] duration-500" to={'/create'}>
//         Create <MdCreate className='ml-2'/>
//       </Link>
//     </div>
//   </div>
//   {mobileMenu && (
//     <div className='md:hidden sticky top-20 py-3 space-y-3 px-10 bg-gray-300 border-t-2 border-[#D48166] text-[#373A36]'>
//       <Link onClick={() => { setMobileMenu(false) } } className='h-8 flex items-center border-b-2 border-gray-300 hover:border-[#D48166] hover:text-[#D48166] duration-500' to={'/'}>Home</Link>
//       <Link onClick={() => { setMobileMenu(false) } } className='h-8 flex items-center border-b-2 border-gray-300 hover:border-[#D48166] hover:text-[#D48166] duration-500' to={'/overzicht'}>Overzicht</Link>
//       <Link onClick={() => { setMobileMenu(false) } } className='h-8 flex items-center border-b-2 border-gray-300 hover:border-[#D48166] hover:text-[#D48166] duration-500' to={'/create'}>Create</Link>
//     </div>
//   )}
// </>)