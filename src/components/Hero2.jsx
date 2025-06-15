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
      {/* Outer container with top padding to push content below navbar */}
      <div className="text-gray-800 p-6 sm:py-10 bg-white  pt-[384px]">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="relative h-24 overflow-hidden flex items-center justify-center pt-[256px] bg-white w-full">
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

          <div className="flex flex-wrap gap-2 mt-1 justify-center">
            <a
              href="https://amsdt2025.com/registrationlink"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-md transition-all"
            >
              Register Now
            </a>
          </div>

          {/* Countdown timer */}
          <div className="w-full flex justify-center mt-8">
            <CountdownBox />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero2;
