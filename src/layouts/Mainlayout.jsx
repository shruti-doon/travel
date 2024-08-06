import React from 'react'
import {Outlet} from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
const Mainlayout = () => {
  return (
    <>
    <Navbar name="safarnama"/>
     <Outlet/> 
    </>
  )
}

export default Mainlayout
