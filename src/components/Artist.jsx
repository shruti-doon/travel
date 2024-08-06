import React from 'react'
import data from '../data.json'
import Artistcard from './Artistcard.jsx'
console.log(data)
const Artist = () => {
  return (
    <div className='flex flex-wrap justify-evenly'>
      {data.map((d)=>
      <Artistcard name= {d.name}  genre= {d.genre}>
         
      </Artistcard>
      )}
    </div>
  )
}

export default Artist
