import React from 'react'
import Typed from "react-typed"
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import MeImg from "../assets/me.jpg"
const Home = () => {
  return (
    <div name="home" className='bg-[#161925] w-screen h-screen text-white ' >
      <div className='flex flex-col justify-center max-w-[1000px] mx-auto h-full px-8'>
        <h1 className='text-2xl text-[#8EA8C3] font-bold'>Hi,</h1>
        <h1 className='text-4xl text-[#4084cd] font-extrabold'>My name is Shashwat Raj.</h1>
        <h2 className='text-3xl sm:text-6xl font-bold  text-[#8EA8C3]'>I am <Typed strings={["a Student. . ." , "a Web Developer. ." , "a CPer. . ."]} loop typeSpeed={50} backSpeed={70}/></h2>
        <p className='max-w-[500px] py-4 text-[#8EA8C3] text-xl font-semibold'>I am a full stack web developer based in India. I specialised in building and designing web applications.</p>
        <div>
          <button className='group text-[#161925] font-extrabold w-[200px] h-[50px] bg-red-500 rounded-md py-2 text-2xl hover:scale-110 duration-500 hover:bg-red-600 flex items-center justify-center'>
          <Link to="projects" smooth={true} offset={50} duration={500}>
            My projects
          </Link>
            <span className='group-hover:rotate-90 duration-500'>
              <HiArrowNarrowRight className='ml-3' size={25}/>
            </span>
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default Home