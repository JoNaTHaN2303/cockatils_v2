import React, { useEffect, useState } from 'react'
import SanityClient from '../client'
import * as images from '../images/images'
import { Link } from 'react-router-dom'

export default function Overzicht(){
  const [data, setData] = useState(null);

  useEffect(() => {
    SanityClient.fetch(`*[_type == "cocktail"]{ name, image{asset->{_id,url},alt}, taste, preparation, strength, ingredients, plan}`)
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div id='overzicht' className="min-h-screen flex justify-center items-center font-semibold px-10 md:px-16 lg:px-20 pb-40">
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 sm:mx-10 xl:mx-20 mt-24'>
        {data && data.map((cocktail) => (
          <Link to={"/cocktail/" + cocktail.name} className='w-full flex flex-col justify-start items-center rounded-md p-3 text-[#373A36] bg-gray-200 group hover:bg-orange-700 hover:text-gray-200 duration-500'>
            <img src={cocktail.image.asset.url} alt={cocktail.name} className='rounded-lg shadow-lg w-full'/>
            <h1 className='text-2xl w-full border-b-2 mt-2 pb-1 border-orange-700 group-hover:border-[#373A36]'>{cocktail.name}</h1>
            <div className='w-full mt-2 text-left text-sm md:text-base xl:text-lg space-y-1'>
              <p className='flex justify-start items-center'><img src={images.taste} alt='' className='h-7 mr-1'/>Taste: {cocktail.taste}</p>
              <p className='flex justify-start items-center'><img src={images.preparation} alt='' className='h-7 mr-1'/>Preparation: {cocktail.preparation}</p>
              <p className='flex justify-start items-center'><img src={images.strength} alt='' className='h-7 mr-1'/>Strength: {cocktail.strength}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

//[#373A36] - dark gray 1