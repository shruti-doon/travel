import React from 'react'
import travel from '../assets/travel.webp'
const Landscape = (props) => {
  return (
    <>
      <div className='bg-cover bg-center p-4' style={{height:'400px', backgroundImage:`url(${travel})`}} >
        <h1 className='text-center mt-20 text-6xl font-serif '>LOVE TRAVELLING ?</h1>
        <h2 className='text-center mt-10 font-mono text-xl'>you are, where you should be!!</h2>
        
      </div>
    </>
  )
}

export default Landscape
