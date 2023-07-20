import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='h-screen w-screen bg-[#161925] flex justify-center items-center gap-4'>
          <form method="post" action="https://getform.io/f/7163a505-b33b-4ea0-9de8-5857e9771c33" className='max-w-[600px] w-full flex flex-col p-2'>
            <div className="pb-8 mx-auto">
                  <h1 className="text-4xl font-bold inline border-b-2  border-[#4084cd] text-center text-[#4084cd]">Contact me</h1>

            </div>
              <input className="bg-blue-100 p-2 text-[#161925] font-bold border-2 hover:border-[#4084cd] rounded" type="text" placeholder='Name' name="name" />
              <input className="my-4 p-2 bg-blue-100 text-[#161925] font-bold border-2 hover:border-[#4084cd] rounded" type="email" placeholder='Email' name="email" />
              <textarea name="message" cols="30" rows="10" className='bg-blue-100 p-2 text-[#161925] font-bold border-2 hover:border-[#4084cd] rounded' placeholder='Message'></textarea>
              <button className='text-[#161925] font-extrabold mx-auto w-[200px] h-[50px] bg-red-500 rounded-md py-2 text-3xl hover:scale-110 duration-500 hover:bg-red-600 flex items-center justify-center mt-6'>Connect</button>
        </form>
    </div>
  )
}

export default Contact