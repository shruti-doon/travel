import React from 'react'
import Landcomp from './Landcomp.jsx'
import mountain from '../assets/mountain.jpg'
import ocean from '../assets/ocean.jpg'
import desert from '../assets/desert.jpeg'
import wood from '../assets/wood.jpg'
const Card = () => {
  return (
    <>
    <div className='bg-sky-100 p-3'>
   <p className='my-4 font-mono font-light underline text-2xl hover:font-extrabold'> Embark on a Journey Through Captivating Landscapes</p>
    <div className='flex flex-wrap justify-evenly p-5' >
      <Landcomp bg={mountain}>
      <span>THE MOUNTAINS</span>
      </Landcomp> {/* wrapper component*/}
      <Landcomp bg={ocean} >THE WATERS</Landcomp>
      <Landcomp bg={desert}>THE DESERT</Landcomp>
      <Landcomp bg={wood}>THE WOODS</Landcomp>
     
      </div></div>
    </>
  )
}

export default Card
