import React, { useEffect, useState } from 'react'
import SanityClient from '../client'
import { useParams } from 'react-router-dom';

export default function Overzicht(){
  const [data, setData] = useState(null);
  const [cocktail, setCockatil] = useState(null);
  let {id} = useParams();

  useEffect(() => {
    SanityClient.fetch(`*[_type == "cocktail"]{ name, image{asset->{_id,url},alt}, taste, preparation, strength, ingredients, plan}`)
      .then((data) => setData(data))
      .catch((err) => console.error(err));
    if(data){
        setCockatil(data.filter(item => item.name === id))
    }
  }, [data, id]);

  return(
    <div id='overzicht' className="min-h-screen flex flex-col justify-start items-start font-semibold pt-32 px-10 md:px-16 lg:px-20 pb-20">
        {data && data.map((cocktail) => (
        <>
            <div className='w-full flex flex-col md:flex-row justify-center items-center md:items-start xl:px-10'>
                <div className='w-full sm:w-4/5 md:w-2/5'>
                    <img src={cocktail.image.asset.url} alt={cocktail.name} className='rounded-md'/>
                </div>
                <div className='w-full sm:w-4/5 md:w-3/5 md:pl-5'>
                    <h1 className='text-5xl border-b-2 mt-2 pb-1 border-orange-700 group-hover:border-[#373A36]'>{cocktail.name}</h1>
                    <div className='w-full mt-2 text-left text-sm md:text-base xl:text-lg space-y-5'>
                        <p className='flex justify-start items-center'>Taste: {cocktail.taste}</p>
                        <p className='flex justify-start items-center'>Preparation: {cocktail.preparation}</p>
                        <p className='flex justify-start items-center'>Strength: {cocktail.strength}</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col md:flex-row justify-center items-center md:items-start xl:px-10'>
                <div className='w-full sm:w-4/5 md:w-auto mt-5'>
                    <p className='text-left text-md md:text-lg xl:text-xl mb-1 border-b-2 border-orange-700'>Ingrediënts: </p>
                    <p className='text-left text-sm md:text-base xl:text-lg mb-5'>{cocktail.ingredients}</p>
                    <p className='text-left text-md md:text-lg xl:text-xl mb-1 border-b-2 border-orange-700'>Step-by-step plan: </p>
                    <p className='text-left text-sm md:text-base xl:text-lg'>{cocktail.plan}</p>
                </div>
            </div>
        </>
        ))}
    </div>
  )
}

//[#373A36] - dark gray 1
