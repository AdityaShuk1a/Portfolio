
import DefaultHomePage from "./DefaultHomePage";
import { ChevronDown} from "lucide-react";
import HomePagePart2 from "../components/homePageComponents/HomePagePart2";
import Projects from "./Projects"
import LastPage from "./LastPage";


const HomePage = () => {
  
   
  return (
    <div className="relative w-full h-full bg-black overflow-x-hidden" >
      {/* Background layer */}
      <DefaultHomePage />
      

      <div className="relative z-20 bg-transparent "  >
        <section className="h-screen bg-transparent flex justify-center items-end p-28 text-white  font-bold">
          <ChevronDown size={50}/>
        </section>
        <section className="h-screen w-full"  >
          <HomePagePart2 />
        </section>
        <section className="h-screen w-full" >
          <Projects />
        </section>
        <section className="h-screen w-full" >
          <LastPage />
        </section>

      </div>
    </div>
  );
};

export default HomePage;
