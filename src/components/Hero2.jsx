import { useEffect } from "react";
import { motion } from "framer-motion";
import CountdownBox from "./timer.jsx";

function Hero2(props) {
  console.log(props);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="text-gray-800 p-6 sm:py-10 min-h-screen bg-white">
        {/* <div className="w-full flex items-center justify-between flex-wrap gap-6 p-6"
            style={{
              background: 'linear-gradient(to right, #FF9933, #FFFFFF, #138808)',
            }}
        >
          <img src="nitjlogo.png" alt="AMS" className="w-48 h-48 object-contain" />

          <div className="flex-1 flex flex-col items-center text-center gap-3 pt-10">
            <p className="lg:text-4xl md:text-3xl text-2xl font-medium tracking-wide text-align-center">
              International Conference on Advanced Materials for Sustainable Development and Technology
            </p>
            <p className="lg:text-3xl md:text-2xl text-xl font-bold">
              (AMSDT-2025)
            </p>

            <div>
              <h3 className="text-blue-600 font-medium tracking-wide text-lg">
                Jointly organized by
              </h3>
              <ul className="text-blue-600 list-disc list-inside mt-2 text-sm sm:text-base">
                <li>Dr B R Ambedkar NIT Jalandhar, Punjab, India</li>
                <li>Institute of Nano Science and Technology, Mohali, Punjab, India</li>
              </ul>
            </div>
          </div> */}

          {/* <img src="inst.png" alt="AMS" className="w-48 h-48 object-contain" />
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-12 max-w-7xl mx-auto px-4">
          {/* Left Molecule Image */}
          <div className="flex justify-center">
            <img src="graphene.png" alt="AMS" className="w-52 h-52 object-contain" />
          </div>

          {/* Center Content Block */}
          <div className="flex flex-col items-center text-center gap-4">
            <div className="relative h-24 overflow-hidden flex items-center justify-center bg-white w-full">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: "-100%" }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="text-xl font-semibold text-blue-700"
              >
                Ranking Band: 351-400 in THE Asia University Rankings 2025
              </motion.div>
            </div>

            <p className="text-sm sm:text-base mt-2 bg-blue-50 border border-blue-500 rounded-md px-4 py-2 font-medium">
              November 7-8, 2025 &nbsp;|&nbsp; Hybrid Mode
            </p>

            <p className="text-sm sm:text-base mt-2 px-4 py-2 font-medium">
              Venue: Dr B R Ambedkar National Institute of Technology, Jalandhar
            </p>

            <div className="flex flex-wrap gap-4 mt-4 justify-center">
              <a
                href="https://amsdt2025.com/registrationlink"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-md transition-all"
              >
                Register Now
              </a>
            </div>
          </div>

          {/* Right Molecule Image */}
          <div className="flex justify-center">
            <img src="solarcell.png" alt="AMS" className="w-52 h-52 object-contain" />
          </div>

          {/* Molecule Image Right (for symmetry on smaller screens) */}
          <div className="flex justify-center md:hidden">
            <img src="solarcell.JPG" alt="AMS" className="w-52 h-52 object-contain" />
          </div>

          {/* Countdown */}
          <div className="w-full flex justify-center mt-8 md:col-span-4">
            <CountdownBox />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero2;
