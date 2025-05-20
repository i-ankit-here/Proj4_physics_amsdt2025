import { useState } from "react";
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function VideoGallery() {
  const videos = [
    { name: "Day 1", embed: "https://www.youtube.com/embed/X8KjZgPn2Vc" },
    { name: "Day 2", embed: "https://www.youtube.com/embed/iiL-6vL41Wk" },
    { name: "Day 3: Part 1", embed: "https://www.youtube.com/embed/T3JW_1AAkvE" },
    { name: "Day 3: Part 2", embed: "https://www.youtube.com/embed/kXzW0jpcwUs" },
    { name: "Day 4", embed: "https://www.youtube.com/embed/n3nALHfH8fM" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // const prevSlide = () => {
  //   const isFirstSlide = currentIndex === 0;
  //   setCurrentIndex(isFirstSlide ? videos.length - 1 : currentIndex - 1);
  // };

  // const nextSlide = () => {
  //   const isLastSlide = currentIndex === videos.length - 1;
  //   setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  // };

  return (
    <div className="bg-white container space-y-8 lg:max-w-7xl mx-auto px-8 sm:px-10 lg:px-8  mb-28 sm:mb-5 ">
      <div className="h-[420px] w-full md:h-[520px] lg:h-[680px] m-auto relative group pb-16">
        <h2 className="text-4xl font-sans font-bold text-center text-gray-950 mb-3">
          Video Gallery
        </h2>

        <div className="flex justify-center space-x-4 mb-3 font-sans flex-wrap">
          {videos.map((video, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`px-4 py-1 rounded-lg mb-2 ${
                currentIndex === index
                  ? "bg-violet-700 text-white font-bold"
                  : "bg-violet-100 text-gray-700 font-semibold"
              }`}
            >
              {video.name}
            </button>
          ))}
        </div>

        {videos.length > 0 && (
          <div className="w-full h-full rounded-2xl bg-center bg-cover relative border-2 border-violet-700 shadow-lg shadow-violet-700">
            <iframe
              width="100%"
              height="100%"
              src={videos[currentIndex].embed}
              title={videos[currentIndex].name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-2xl"
            ></iframe>
            {videos[currentIndex].name && (
              <div className="absolute text-sm lg:text-xl font-sans font-medium bottom-0 left-0 right-0 bg-black/50 text-white text-center p-2">
                {videos[currentIndex].name}
              </div>
            )}
            {/* <div
              className="hidden group-hover:block absolute top-[50%] -translate-x-0 left-5 rounded-full p-2 bg-black/30 text-white hover:bg-white hover:text-black cursor-pointer"
              onClick={prevSlide}
            >
              <BsChevronCompactLeft className="w-4 h-4 md:w-8 md:h-8" />
            </div>
            <div
              className="hidden group-hover:block absolute top-[50%] -translate-x-0 right-5 rounded-full p-2 bg-black/30 text-white hover:bg-white hover:text-black cursor-pointer"
              onClick={nextSlide}
            >
              <BsChevronCompactRight className="w-4 h-4 md:w-8 md:h-8" />
            </div> */}
          </div>
        )}

        <div className="flex justify-center py-2">
          {videos.map((_, index) => (
            <RxDotFilled
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`text-2xl cursor-pointer ${
                index === currentIndex ? "text-violet-700" : "text-black"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoGallery;
