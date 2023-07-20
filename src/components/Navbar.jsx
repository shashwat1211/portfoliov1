import React, { useState } from 'react'
import {FaBars ,FaTimes , FaGithub ,FaLinkedin} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png"
import {Link} from "react-scroll"

export const Navbar = () => {
  const [side , setSide] = useState(false)
  const handleClick=()=>{
    setSide(!side)
  }
  return (
    <div className='fixed w-screen bg-[#161925] h-[80px] text-[#4084cd] flex justify-between items-center px-4'>
        <div className='m-4'>
          <img src={Logo} alt="logo" className='w-[100px]' />
        </div>
        <div>
          <ul className='hidden md:flex text-[18px]'>
            <li>
              <Link activeClass="active" to="home" smooth={true} offset={50} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="about" smooth={true} offset={30} duration={500}>
              About
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="skills" smooth={true} offset={50} duration={500}>
                Skills
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="projects" smooth={true} offset={50} duration={500}>
                Projects
              </Link>
            </li>
            <li>
            <Link activeClass="active" to="contact" smooth={true} offset={50} duration={500}>
              Contact
            </Link>
          </li>
          </ul>
        </div>
      <div className='md:hidden z-40 cursor-pointer px-3' onClick={handleClick} >
          {!side ? <FaBars /> :<FaTimes/>}
        </div>
      <div className= {!side ? "hidden":'fixed top-0 right-0 p-4 h-screen w-full bg-[#161925] flex flex-col justify-center items-center'}>
        <ul>
          <li className='py-6 text-3xl border-b-2 border-[#323a5b]'>
            <Link onClick={handleClick} to="home" smooth={true} offset={50} duration={500}>
              Home
            </Link>
          </li>
          <li className='py-6 text-3xl border-b-2 border-[#323a5b]'>
            <Link onClick={handleClick} to="about" smooth={true} offset={50} duration={500}>
              About
            </Link>
          </li>
          <li className='py-6 text-3xl border-b-2 border-[#323a5b]' >
            <Link onClick={handleClick} to="skills" smooth={true} offset={50} duration={500}>
              Skills
            </Link>
          </li>
          <li className='py-6 text-3xl border-b-2 border-[#323a5b]' >
            <Link onClick={handleClick} to="projects" smooth={true} offset={50} duration={500}>
              Projects
            </Link>
          </li>
          <li className='py-6 text-3xl' >
            <Link onClick={handleClick} to="contact" smooth={true} offset={50} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className='hidden lg:flex fixed flex-col left-0 top-[35%]'>
        <ul>
          <li className='flex justify-between items-center w-[158px] h-[50px] ml-[-100px] hover:ml-[-10px] duration-500 bg-[#0077b5]'>
            <a href="https://www.linkedin.com/in/shashwat-raj-090016236"
              className='flex justify-between items-center w-full text-white text-xl '
              >Linked In <FaLinkedin size={33} /></a>
          </li>
          <li className='flex justify-between items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-500 bg-[#333]'>
            <a href="https://github.com/shashwat1211"
              className='flex justify-between items-center w-full  text-white text-xl '
            >GitHub <FaGithub size={35} /></a>
          </li>
          <li className='flex justify-between items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-500 bg-[#BB001B]'>
            <a href="mailto:shashwatraj30@gmail.com"
              className='flex justify-between items-center w-full text-white text-xl '
            >Mail <HiOutlineMail size={30} /></a>
          </li>
          <li className='flex justify-between items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-500 bg-[#565f69]'>
            <a href="https://portfolio013.netlify.app"
              className='flex justify-between items-center w-full  text-white text-xl '
            >Resume  <BsFillPersonLinesFill size={35} /></a>
          </li>
        </ul>
      </div>
    </div>
  )
}
