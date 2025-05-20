import ConfettiExplosion from 'react-confetti-explosion';
import { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { ImCross } from "react-icons/im";

function Invitation({ show, setShow }) {
  const [isConfettiVisible, setIsConfettiVisible] = useState(false);
  const images = ['/invitation.jpeg', '/speaker.png'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let confettiTimeout;

    if (show) {
      confettiTimeout = setTimeout(() => {
        setIsConfettiVisible(true);
      }, 400);
    }

    return () => {
      clearTimeout(confettiTimeout);
    };
  }, [show]);

  useEffect(() => {
    let interval;

    if (show) {
      // Change the image every 5 seconds
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
    }

    return () => clearInterval(interval); 
    }, [show, images.length]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      {show && (
        <div className="flex w-full h-screen bg-black bg-opacity-70 backdrop-blur-sm justify-center  fixed top-14 z-50">

          <button
            className="absolute top-0 right-2 bg-white z-50 text-black font-bold w-8 h-8 flex items-center justify-center hover:bg-accent-600 hover:text-white focus:outline-none"
            onClick={() => setShow(false)}
            aria-label="Close invitation"
          >
            <ImCross />
          </button>
          <button
            className="absolute left-2 top-1/2 z-50 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-white hover:text-black"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <BsChevronCompactLeft className='w-4 h-4 sm:w-8 sm:h-8 ' />
          </button>
          <button
            className="absolute top-1/2 right-2 z-50 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-white hover:text-black"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <BsChevronCompactRight className='w-4 h-4 sm:w-8 sm:h-8' />
          </button>
          <div className="w-full flex flex-col items-center  justify-center sm:justify-start">
            {isConfettiVisible && (
              <ConfettiExplosion
                zIndex={50}
                force={0.9}
                particleCount={300}
                duration={5000}
                width={2000}
              />
            )}
            <div className="relative w-[80%] sm:h-[650px] mx-auto">

              <img
                src={images[currentIndex]}
                alt="Invitation"
                className="w-full h-full object-contain  rounded-lg"
              />

            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Invitation;

// import ConfettiExplosion from 'react-confetti-explosion';
// import  { useState ,useEffect } from 'react';

// function Invitation({ show, setShow }) {
//   const [isConfettiVisible, setIsConfettiVisible] = useState(false);
//   //const images=['/invitation.jpeg','/speaker.png'];

//   useEffect(() => {
//     let confettiTimeout;
//    // let hideConfettiTimeout;

//     if (show) {
//       // Trigger confetti after a delay
//       confettiTimeout = setTimeout(() => {
//         setIsConfettiVisible(true);
//       }, 400);

//       // // Hide confetti after 5 seconds
//       // hideConfettiTimeout = setTimeout(() => {
//       //   setIsConfettiVisible(false);
//       // }, 4000);
//     }

//     // Cleanup timeouts on unmount or when `show` changes
//     return () => {
//       clearTimeout(confettiTimeout);
//      // clearTimeout(hideConfettiTimeout);
//     };
//   }, [show]);

//   return (
//     <>
//       {show && (
//         <div className="flex w-full h-screen bg-black bg-opacity-70 backdrop-blur-sm justify-center fixed top-14 z-50">
//           {isConfettiVisible && <ConfettiExplosion zIndex={50} force={0.9} particleCount={300}  duration={5000} width={2200} />}
//           <button
//             className="absolute top-0 right-2 bg-white text-black font-bold w-8 h-10 flex items-center justify-center hover:bg-accent-600 hover:text-white focus:outline-none"
//             onClick={() => setShow(false)}
//             aria-label="Close invitation"
//           >
//             X
//           </button>
//           <div className="w-full">
//             <img
//               src="/speaker.png"
//               alt="Invitation"
//               className="w-[80%] sm:h-[650px] sm:aspect-auto sm:w-auto mx-auto "
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Invitation;

