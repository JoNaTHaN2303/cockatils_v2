import React from 'react'
import * as images from '../images/images'

export default function Create(){
  return (
    <div id='create' className="min-h-screen flex justify-center items-center font-semibold px-10 md:px-16 lg:px-20">
      <img src={images.meme} alt=''/>
    </div>
  )
}