import React from 'react'
import { Link} from 'react-router-dom'
import { FaExclamationTriangle } from 'react-icons/fa'
const Notfound = () => {
  return (
    <section className='text-center flex flex-col justify-center items-center h-96'>
        <FaExclamationTriangle className='text-yellow-400 text-6xl mb-4'/>
        <h1 className='text-6xl font-bold mb-4'>404 not found</h1>
        <p className='text-xl mb-5'>this page does not exist</p>
        <Link to='/' className='text-blue-500 hover:underline'>go back</Link>
      
    </section>
  )
}

export default Notfound
