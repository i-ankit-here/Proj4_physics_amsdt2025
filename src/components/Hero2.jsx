import { useEffect } from "react";

// import Invitation from "./common/invitation";
import CountdownBox  from './timer.jsx'
function Hero2(props) {
  console.log(props);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      {/* <Invitation /> */}
      <div className="text-white py-12 h-90vh">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center mt-[100px] max-w-7xl mx-auto lg:px-8 px-3 mt-[80px] lg:mt-[2px]">
          <div className="flex flex-col items-center md:items-start justify-center z-20 py-4 gap-3">
            <div className="w-full flex items-center justify-evenly">
              <img src="nitjlogo.png" alt="AMS" className="w-24 h-24 object-contain" />
              <img src="inst.png" alt="AMS" className="w-24 h-24 object-contain" />
            </div>
            <p className="lg:text-6xl md:text-5xl text-4xl leading-tight lg:leading-none tracking-wide font-bold text-[#00ff4c] text-center md:text-left">
              AMSDT-2025
            </p>

            <p className="lg:text-2xl md:text-xl text-xl leading-tight lg:leading-none tracking-wide font-medium text-white text-center md:text-left my-3">
              International Conference on Advanced Materials for Sustainable Development and Technology
            </p>

            <h3 className="text-[#00ff4c] mx-auto md:mx-0 font-medium text-center md:text-left tracking-wide lg:text-xl">
            Jointly organized by Dr B R Ambedkar NIT Jalandhar, Punjab, India & Institute of Nano Science and Technology, Mohali, Punjab, India
            </h3>
            
            <p className="text-white text-sm sm:text-base mt-4 bg-[#00ff4c]/10 border border-[#00ff4c] rounded-md px-4 py-2 w-fit font-medium backdrop-blur-sm">
              January 22–24, 2025 &nbsp;|&nbsp; NIT Jalandhar, India
            </p>
            
            <div className="flex flex-wrap gap-4 mt-6">
              <button className="bg-[#00ff4c] hover:bg-[#00cc3d] text-black font-bold py-3 px-8 rounded-md transition-all">
                Register Now
              </button>
              <button className="border-2 border-[#00ff4c] text-[#00ff4c] hover:bg-[#00ff4c20] font-bold py-3 px-8 rounded-md transition-all">
                Submit Paper
              </button>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center items-center">
              <div className="absolute w-full h-full flex items-center justify-center">
                <div className="w-[450px] h-[450px]">
                  <img src="molecule.png" alt="AMS" className="w-full h-full object-contain" />
                </div>
            </div>
          </div>
        </div>
      <CountdownBox/>
      </div>
    </>
  );
}

export default Hero2;
