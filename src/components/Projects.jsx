import React from 'react'
import BlogImg from "../assets/blogVerse.jpg"
import FitnessImg from "../assets/fitnessadv.jpg"
const Projects = () => {
  return (
    <div name="projects" className='w-screen md:h-[140vh] h-[190vh] pt-[200px] bg-[#161925] text-white'>
        <div className='max-w-[1000px] flex flex-col justify-center items-center mx-auto p-4 w-full gap-2'>
          <div>
          <h1 className='text-[#4084cd] text-4xl font-bold text-center border-b-2 border-[#4084cd] inline'>Projects</h1>
          </div>
          <div className='p-6'>
              <div className='grid md:grid-cols-2 justify-center items-center shadow-lg shadow-black rounded-lg hover:scale-110 duration-300 p-4 cursor-pointer my-10' >
                <a href="https://blogverse01.netlify.app" className='py-0'><img src={BlogImg} alt="blog" className="rounded-lg mt-6 w-[350px] sm:w-full" /></a>
                <div className='flex flex-col justify-center items-center m-2 w-[350px] sm:w-full'>
                  
                  <h1 className='text-2xl font-bold text-[#9cb8d6]'>Blog Verse</h1>
                  
                  <p className='font-semibold text-[#8EA8C3] text-[16px] p-4 '>
                    A blog website where users can view blogs from all over and create their own blogs.<br />
                    Technologies used - Node, ExpressJS, MongoDB, ReactJS<br />
                  </p>
                </div>
              </div>

            <div className='grid md:grid-cols-2 justify-center items-center shadow-lg shadow-black rounded-lg hover:scale-110 duration-300 p-4 cursor-pointer my-10' >
              <a href="https://fitnessadv2.netlify.app/"><img src={FitnessImg} alt="fit" className="rounded-lg mt-6 w-[350px] sm:w-full" /></a>
              <div className='flex flex-col justify-center items-center m-2 w-[350px] sm:w-full'>

                <h1 className='text-2xl font-bold text-[#9cb8d6]'>Fitness Advisor</h1>

                <p className='font-semibold text-[#8EA8C3] text-[16px] p-4 '>
                  A fitness website where users can know all about various exercises, check their Body fat percentage as well as BMI.
                  An app that suggests exercises to improve physical health of the user.<br/>
                  Technologies used - ReactJS, Tailwind Css and Rapid Api for apis. 
                


                </p>
              </div>
            </div>


          </div>
        </div>
    </div>
  )
}

export default Projects