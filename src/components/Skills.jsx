import React from 'react'
import Reactimg from "../assets/react.png"
import Htmlimg from "../assets/html.png"
import cssimg from "../assets/css.png"
import jsimg from "../assets/javascript.png"
import cimg from "../assets/c++.png"
import nodeimg from "../assets/node.png"

const Skills = () => {
  return (
          <div name="skills" className='bg-[#161925] w-screen'>
          <div className=' max-w-[1000px] p-4 flex flex-col justify-center items-center h-screen mx-auto'>
        <div>
                <p className='text-[#4084cd] text-4xl font-bold text-center border-b-2 border-[#4084cd]  inline'>Skills set</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 text-center py-8 gap-4 font-bold'>
              <div className='text-[#8EA8C3] hover:scale-125 duration-500 my-6 shadow-md shadow-black'>
                <img className='mx-auto w-20 my-2' src={cimg} alt="c++ icon" />
                <p className='my-4'>C++</p>
            </div>
              <div className='text-[#8EA8C3] hover:scale-125 duration-500 my-6  shadow-md shadow-black'>
                      <img className='mx-auto w-20 my-2' src={Htmlimg} alt="c++ icon" />
                      <p className='my-4'>HTML</p>
              </div>
              <div className='text-[#8EA8C3] hover:scale-125 duration-500 my-6 shadow-md shadow-black'>
                      <img className='mx-auto w-20 my-2' src={cssimg} alt="c++ icon" />
                      <p className='my-4'>CSS</p>
              </div>
              <div className='text-[#8EA8C3] hover:scale-125 duration-500 my-6 shadow-md shadow-black'>
                      <img className='mx-auto w-20 my-2' src={jsimg} alt="c++ icon" />
                      <p className='my-4'>JavaScript</p>
              </div>
              <div className='text-[#8EA8C3] hover:scale-125 duration-500 my-6 shadow-md shadow-black'>
                      <img className='mx-auto w-20 my-2' src={Reactimg} alt="c++ icon" />
                      <p className='my-4'>React JS</p>
              </div>
              <div className='text-[#8EA8C3] hover:scale-125 duration-500 my-6 shadow-md shadow-black'>
                      <img className='mx-auto w-20 my-2' src={nodeimg} alt="c++ icon" />
                      <p className='my-4'>Node JS</p>
              </div>
        </div>
        </div>
    </div>
  )
}

export default Skills