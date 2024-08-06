import React from 'react'
import about from '../about.json'
import { useState } from 'react'
const About = () => {
let desc=about.description;
const [showfull,setshowfull] = useState(false);
if(!showfull)
{
    desc=desc.substring(0,90)+'...';
}

    return (
        
    <div className='bg-teal-100 p-4'>
        {/* <p className='font-bold font-serif text-3xl' >ABOUT</p> */}
       <p className='font-mono'>{desc}</p> 
        <button onClick={()=> setshowfull((prevState) => !prevState)} className='text-indigo-500 mb-5 hover:text-indigo-600' >{showfull ? 'Less':'More'}</button> 

    </div>
  )
}

export default About
