
const NavBar = () => {
  return (
    <div className="fixed z-30  text-white bg-black top-0 w-full flex justify-center gap-12 text-lg md:text-3xl font-semibold p-4">
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
  )
}

export default NavBar
