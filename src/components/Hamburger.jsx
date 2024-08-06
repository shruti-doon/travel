import React from 'react'
import{FaBars} from 'react-icons/fa'
import {useState} from 'react'
const Hamburger = () => {
    const [showmenu,setshowmenu] = useState(false)
   
  return (
    <>
      <button onClick={()=> setshowmenu((prevState) => !prevState)} ><FaBars style={{height:"35px",marginLeft:"2px",width:"30px",marginTop:"2px"}}/>
      {showmenu  && <div className="bg-sky-950 absolute top-12 right-0 rounded-l-2xl shadow-xl" style={{minHeight:'auto',width:'200px', border: '2px solid transparent',boxShadow:' 0 0 10px 5px rgba(0, 0, 0, 0.5)'}}>
        <ul className='text-white mb-3'>
            <li className='hover:font-bold font-mono ' style={{textTransform:'uppercase' }}>India</li>
            <li className='hover:font-bold font-mono' style={{textTransform:'uppercase'}}>Monaco</li>
            <li className='hover:font-bold font-mono ' style={{textTransform:'uppercase' }}>Santorini islands</li>
            <li className='hover:font-bold font-mono' style={{textTransform:'uppercase'}}>new york</li>
           
            </ul></div>} 
        
      </button>
    </>
  )
}

export default Hamburger
