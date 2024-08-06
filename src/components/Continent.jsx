import React from 'react'
// import cont from  '../cont.json'
 import Contcomp from './Contcomp.jsx'
import africa from '../assets/africa.avif'
import north from '../assets/north.webp'
import antarctica from '../assets/antarctica.webp'
import asia from '../assets/asia.webp'
import australia from '../assets/australia.jpg'
import europe from '../assets/europe.webp'
import south from '../assets/south.avif'
const Continent = () => {

  return (
    <>
    <div style={{height:"500px"}} className="bg-sky-100">
      <p className=' font-mono font-light underline text-2xl hover:font-extrabold'>Discover the Seven Continents</p>
    
      <div className='flex flex-wrap justify-evenly'>
      <Contcomp bg={asia} name="Asia"></Contcomp>
      <Contcomp bg={europe} name="Europe"></Contcomp>
      <Contcomp bg={africa} name="Africa"></Contcomp>
      <Contcomp bg={south} name="South America"></Contcomp>
      <Contcomp bg={australia} name="Australia"></Contcomp>
      <Contcomp bg={north} name="North America"></Contcomp>
      <Contcomp bg={antarctica} name="Antarctica"></Contcomp>
     
    </div>  </div>
    </>
  )
}

export default Continent
