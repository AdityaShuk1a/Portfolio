
const DefaultHomePage = () => {
  return (
    <div className="fixed w-full h-screen z-0 bg-black text-white flex flex-col justify-center items-center overflow-hidden">
      {/* Optional Navbar at top (if needed) */}
   
      
      {/* Main Hero Section */}
      <div className="flex flex-col justify-center items-center text-center">
        <div className="flex flex-col md:flex-row gap-2 md:gap-6">
          <h1 className="text-[18vw] md:text-[12vw] font-extrabold tracking-tight leading-none">
            ADITYA
          </h1>
          <h1 className="text-[18vw] md:text-[12vw] font-extrabold tracking-tight text-gray-400 leading-none">
            SHUKLA
          </h1>
        </div>
        <div className="md:text-center lg:text-right w-full" >

        <h2 className="text-gray-400  font-bold text-[5vw] md:text-[2vw] mt-6 tracking-wide">
          FULL STACK DEVELOPER
        </h2>
        </div>
        
      </div>
    </div>
  );
};

export default DefaultHomePage;
