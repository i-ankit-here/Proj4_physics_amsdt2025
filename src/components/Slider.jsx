import { forwardRef } from 'react';
import { useState, useEffect, useCallback } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import axios from "axios";
import getEnvironment from "../getenvironment";

// Add display name to the component
const Slider = forwardRef(function Slider(props) {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const confid = props.confid;
  const [apiUrl, setApiUrl] = useState(null);

  // Fallback images if API fails
  const inaugural = [
    { imgLink: "https://nitj.ac.in/files/1735399335249-0L9A2115.JPG", name: "Conference Inauguration" },
    { imgLink: "https://nitj.ac.in/files/1735399354448-0L9A2089.JPG", name: "Opening Ceremony" },
    { imgLink: "https://nitj.ac.in/files/1735399374524-0L9A2146.JPG", name: "Keynote Address" },
    { imgLink: "https://nitj.ac.in/files/1735399392312-0L9A2163.JPG", name: "Panel Discussion" },
    { imgLink: "https://nitj.ac.in/files/1735399410039-0L9A2228.JPG", name: "Research Presentations" }
  ];

  useEffect(() => {
    // Fetch the environment URL
    getEnvironment().then(url => setApiUrl(url));
  }, []);
  
  // Fetch images from API
  useEffect(() => {
    if (apiUrl) {
      axios.get(`${apiUrl}/conferencemodule/images/conference/${confid}`, {
        withCredentials: true
      })
        .then(res => {
          const filteredSlides = (res.data || [])
            .filter(slide => slide.feature)
            .sort((a, b) => a.sequence - b.sequence);
          
          if (filteredSlides.length > 0) {
            setSlides(filteredSlides);
          } else {
            // Fallback to inaugural images if no featured images
            setSlides(inaugural);
          }
          console.log("Fetched slides:", filteredSlides);
        })
        .catch(err => {
          console.log("Error fetching slides:", err);
          // Fallback to inaugural images on error
          setSlides(inaugural);
        });
    }
  }, [apiUrl, confid, inaugural]);

  const prevSlide = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  // Auto-advance slides
  useEffect(() => {
    if (slides.length === 0) return; // Don't set interval if no slides
    
    const intervalId = setInterval(() => {
      nextSlide();
    }, 4500);
    
    return () => clearInterval(intervalId);
  }, [currentIndex, slides.length, nextSlide]);

  return (
    <div className="container lg:max-w-7xl mx-auto sm:mb-10 py-8">
      <div className="h-[420px] w-full md:h-[520px] lg:h-[450px] m-auto relative group">
        {slides.length > 0 && (
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].imgLink})` }}
            className="w-full h-full rounded-2xl bg-center bg-cover relative border-2 border-[#00ff4c] shadow-lg shadow-[#00ff4c]/30"
          >
            {slides[currentIndex].name && (
              <div className="absolute text-sm lg:text-xl font-sans font-medium bottom-0 left-0 right-0 bg-black/70 text-white text-center p-2 backdrop-blur-sm">
                {slides[currentIndex].name}
              </div>
            )}
            
            <div
              className="hidden group-hover:block absolute top-[50%] -translate-y-1/2 left-5 rounded-full p-2 bg-black/50 text-[#00ff4c] hover:bg-[#00ff4c] hover:text-black cursor-pointer transition-all"
              onClick={prevSlide}
            >
              <BsChevronCompactLeft className="w-4 h-4 md:w-8 md:h-8" />
            </div>
            
            <div
              className="hidden group-hover:block absolute top-[50%] -translate-y-1/2 right-5 rounded-full p-2 bg-black/50 text-[#00ff4c] hover:bg-[#00ff4c] hover:text-black cursor-pointer transition-all"
              onClick={nextSlide}
            >
              <BsChevronCompactRight className="w-4 h-4 md:w-8 md:h-8" />
            </div>
          </div>
        )}

        <div className="flex justify-center py-2">
          {slides.map((_, index) => (
            <RxDotFilled
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`text-2xl cursor-pointer transition-all ${
                index === currentIndex ? "text-[#00ff4c] scale-125" : "text-gray-400 hover:text-[#00ff4c]/70"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

export default Slider;