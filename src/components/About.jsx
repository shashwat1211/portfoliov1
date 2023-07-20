import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-screen h-screen bg-[#161925]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        {/* <div className='max-w-[1000px] w-full grid grid-cols-2 gap-6'> */}
          <div className='mb-8'>
            <p className='font-bold inline border-b-2  border-[#468dda] text-4xl text-[#4084cd] text-center'>
              About
            </p>
          </div>
        {/* </div> */}
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-6 px-5'>
          <div className='text-[#8EA8C3] text-4xl sm:text-right font-bold'>
            <p>Hi, I am Shashwat.<br/>Nice to meet you.</p>
          </div>
          <div className='text-[#8EA8C3]'>
            <p className='font-bold py-1'>I am a passionate programmer. I do competitive programming and 
            also specialize in building web applications. </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About