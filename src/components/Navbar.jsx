import React from "react";
import limg from "../assets/limg.png";
import loupe from "../assets/loupe.png";
import Hamburger from "./Hamburger.jsx";
import {NavLink} from 'react-router-dom'

const Navbar = ({name}) => {
  const linkclass = ({isActive})=> isActive ? 'p-1 my-2 mx-2 border-2 border-white border-spacing-2   hover:underline hover:font-semibold ' : 'p-1 my-2 mx-2  hover:underline hover:font-semibold';
  return (
    <>
      <nav className="flex  bg-sky-950 " style={{ height: "50px" }}>
        <div className="flex" style={{ width: "20%" }}>
          <img style={{ height: "50px" }} src={limg} alt="Logo" />
          <span className="font-bold text-white mx-2 my-3 font-mono" >{name}</span>
        </div>
        <div>
          <ul className="text-white flex">
            <NavLink className={linkclass} to='/' >
              Home
            </NavLink>
            <NavLink className={linkclass} to='/about'>
              About
            </NavLink>
          </ul>
        </div>
        <div className="flex border-white border-4" style={{ width: "35%" }}>
          <input
            className="bg-white ml-3 my-2 border rounded-l-lg"
            style={{ width: "80%", height: "30px" }}
          ></input>
          <div
            className="my-2 bg-gray-300 rounded-r-lg border"
            style={{ width: "7%", height: "30px" }}
          >
            <img
              style={{ height: "23px", marginTop: "3px", marginLeft: "1px" }}
              src={loupe}
            />
          </div>
        </div>
        <div className=" ml-36 flex justify-end">
          <ul className="text-white flex">
            <NavLink className={linkclass} to='/gallery'>
              Gallery
            </NavLink>
           
          </ul>
        </div>
       <div className="bg-white ml-6 rounded-lg  hover:bg-slate-300 hover:rounded-xl" style={{height:"40px", marginTop:"5px",width:"35px"}}> <Hamburger/></div> 
      </nav>
    </>
  );
};

export default Navbar;
