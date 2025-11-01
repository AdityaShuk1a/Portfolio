import React from 'react'

const DefaultHomePage = () => {
  return (
    <div className=" fixed w-full z-0 min-h-screen bg-black text-white flex flex-col">
      
      <div className="absolute top-0 w-full flex justify-center gap-12 text-lg md:text-3xl font-semibold p-4">
        <a href="mailto:adityasarika0292004@gmail.com" className="hover:text-gray-400 underline md:absolute md:left-20 transition-colors ">
          EMAIL
        </a>
        <a
          href="https://linkedin.com/in/adityashuk1a"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors underline "
        >
          LINKEDIN
        </a>
      </div>

      <div className="flex flex-1 text-[20vw] md:text-[11vw] gap-0 md:gap-9 flex-col md:flex-row justify-center items-center text-center">
        <h1 className="font-extrabold tracking-wide">
          ADITYA
        </h1>
        <h1 className=" font-extrabold tracking-wide text-gray-400">
          SHUKLA
        </h1>
      </div>

      <div className=" font-bold text-2xl md:text-4xl text-white   w-full flex flex-col md:flex-row items-center md:justify-around p-4 ">
        <div className="" >
          <h1>
            DATA ANALYST<br />
          </h1>
          
        </div>
        <div className="" >
          <h1>
            FULL STACK DEVELOPER 
          </h1>
        </div>

      </div>
    </div>
  )
}

export default DefaultHomePage
