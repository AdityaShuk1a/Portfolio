import { PageRoutes } from "../../routes/PageRoutes"

const NavBar = () => {
  return (
    <div className="fixed z-30 px-5 py-4 text-white bg-black top-0 w-full flex justify-between gap-12 text-lg md:text-3xl font-semibold">
        <a 
          href={PageRoutes.Leetcode}
          className="hover:text-gray-400 underline transition-colors"
        >
          LEETCODE
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={PageRoutes.Linkedin}
          className="hover:text-gray-400 transition-colors underline "
        >
          LINKEDIN
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={PageRoutes.Projects}
          className="hover:text-gray-400 transition-colors underline "
        >
          PROJECTS
        </a>
      </div>
  )
}

export default NavBar
