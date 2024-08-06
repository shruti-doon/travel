import React from 'react'

const Artistcard = (props) => {
  return (
    <div className="bg-indigo-100 p-4 mx-3 my-3 " style={{height:'200px',width:'20%',textTransform:'uppercase'}}>
     <p className='font-bold font-serif mb-3 text-lg'>{props.name}</p>
    
     <p className='my-3 font-semibold text-gray-400 text-sm'>{props.genre}</p> 
    </div>
  )
}

export default Artistcard
