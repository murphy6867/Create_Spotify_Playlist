// import { Link } from 'react-router-dom';
import { GoHome } from "react-icons/go";
import { BiSearchAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isClickedHome, setIsClickedHome] = useState(false);
  const [isClickedSearch, setIsClickedSearch] = useState(false);


  const handleClick = (e) => {
    if (e.target.id === "home") {
      setIsClickedHome(true);
      setIsClickedSearch(false);

    } else if (e.target.id === "search") {
      setIsClickedHome(false);
      setIsClickedSearch(true);
    }
  };

  return (
    <nav 
      className="w-full h-1/6 flex flex-col items-start justify-center px-5 gap-4 rounded-md bg-[#121212]"
    >
      <NavLink 
        to="/"
        onClick={(e)=> handleClick(e)}
        id="home"
        className="flex items-center w-full h-auto">
        <GoHome onClick={(e)=> handleClick(e)} id="home" className={`${isClickedHome ===true ? "text-white" : "text-stone-400"} text-3xl me-3 duration-500`} />
        <h1 onClick={(e)=> handleClick(e)} id="home" className={`${isClickedHome === true ? "text-white" : "text-stone-400"} text-md font-medium mx-1 duration-500`}>Home</h1>
      </NavLink>

      <NavLink 
        to="/search"
        onClick={(e)=> handleClick(e)}
        id="search"
        className="flex items-center w-full h-auto">
        <BiSearchAlt onClick={(e)=> handleClick(e)} id="search" className={`${isClickedSearch ===true ? "text-white" : "text-stone-400"} text-3xl me-3 duration-500`} />
        <h1 onClick={(e)=> handleClick(e)} id="search" className={`${isClickedSearch === true ? "text-white" : "text-stone-400"} text-md font-medium mx-1 duration-500`}>Search</h1>
      </NavLink>

    </nav>
  )
}

export default Navbar