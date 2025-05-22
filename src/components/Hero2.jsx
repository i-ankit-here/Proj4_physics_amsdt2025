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
      <div className="text-white py-6 sm:py-6 h-90vh">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center mt-[100px] max-w-7xl mx-auto lg:px-8 px-3 mt-[80px] lg:mt-[2px]">
          <div className="flex flex-col items-center md:items-start justify-center z-20 py-4 gap-3">
            <div className="w-full flex items-center justify-evenly">
              <img src="nitjlogo.png" alt="AMS" className="w-24 h-24 object-contain" />
              <img src="inst.png" alt="AMS" className="w-32 h-32 object-contain" />
            </div>
            <p className="lg:text-6xl md:text-5xl text-4xl leading-tight lg:leading-none tracking-wide font-bold text-[#00ff4c] text-center md:text-left">
              AMSDT-2025
            </p>

            <p className="lg:text-2xl md:text-xl text-xl leading-tight lg:leading-none tracking-wide font-medium text-white text-center md:text-left my-3">
              International Conference on Advanced Materials for Sustainable Development and Technology
            </p>

            <h3 className="text-[#00ff4c] mx-auto md:mx-0 font-medium text-center md:text-left tracking-wide lg:text-xl">
              <span>Jointly organized by</span>
              <br />
              <span>Dr B R Ambedkar NIT Jalandhar, Punjab, India</span>
              <br />
              <span>& Institute of Nano Science and Technology, Mohali, Punjab, India</span>
            </h3>
            
            <p className="text-white text-sm sm:text-base mt-4 bg-[#00ff4c]/10 border border-[#00ff4c] rounded-md px-4 py-2 w-fit font-medium backdrop-blur-sm">
              November 7-8, 2025 &nbsp;|&nbsp; NIT Jalandhar, India
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
          
          <div className="max-w-2xl flex flex-col justify-center items-center relative">
                <div className="w-full flex flex-col items-center justify-center">
                  <div className="hidden md:flex w-[350px] h-[350px] mx-auto">
                    <img src="molecule.png" alt="AMS" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-full flex justify-center mt-8 md:mt-0">
                    <CountdownBox/>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </>
  );
}

export default Hero2;
