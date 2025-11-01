import React from "react";
import DefaultHomePage from "./DefaultHomePage";
import { ChevronDown } from "lucide-react";
import HomePagePart2 from "../components/homePageComponents/HomePagePart2";
const HomePage = () => {
  return (
    <div className="relative w-full h-full overflow-x-hidden">
      {/* Background layer */}
      <DefaultHomePage />

      <div className="relative z-20 bg-transparent">
        <section className="h-screen bg-transparent flex justify-center items-end p-28 text-white  font-bold">
          <ChevronDown size={50}/>
        </section>
        <section className="h-screen w-full" >
          <HomePagePart2 />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
