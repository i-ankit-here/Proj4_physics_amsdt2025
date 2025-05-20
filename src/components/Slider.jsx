import { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Slider() {
  const [slides, setSlides] = useState([]);
  const [heading, setHeading] = useState("Inaugural Function");
  const [currentIndex, setCurrentIndex] = useState(0);

  const inaugural = [
    { imgLink: "https://nitj.ac.in/files/1735399335249-0L9A2115.JPG", name: "" },
    { imgLink: "https://nitj.ac.in/files/1735399354448-0L9A2089.JPG", name: "" },
    { imgLink: "https://nitj.ac.in/files/1735399374524-0L9A2146.JPG", name: "" },
    { imgLink: "https://nitj.ac.in/files/1735399392312-0L9A2163.JPG", name: "" },
    { imgLink: "https://nitj.ac.in/files/1735399410039-0L9A2228.JPG", name: "" },
    { imgLink: "https://nitj.ac.in/files/1735399427569-0L9A2339.JPG", name: "" },
    { imgLink: "https://nitj.ac.in/files/1735399448976-0L9A2343.JPG", name: "" },
    { imgLink: "https://nitj.ac.in/files/1735399471501-0L9A2371.JPG", name: "" },
    { imgLink: "https://nitj.ac.in/files/1735399491301-0L9A2392.JPG", name: "" },
    { imgLink: "https://nitj.ac.in/files/1735399542768-0L9A2396.JPG", name: "" }
  ];

  const invitations = [
    { imgLink: "https://nitj.ac.in/files/1728104187991-WhatsApp%20Image%202024-10-05%20at%207.35.55%20AM.jpeg", name: "IIChE CHEMCON 2024 team with L&T Director Sh Parthasarthi at L&T house Mumbai" },
    { imgLink: "https://nitj.ac.in/files/1728104229106-WhatsApp%20Image%202024-10-05%20at%207.38.31%20AM.jpeg", name: "CHEMCON Team at UPL" },
    { imgLink: "https://nitj.ac.in/files/1728104266596-WhatsApp%20Image%202024-10-05%20at%207.38.32%20AM.jpeg", name: "Inviting Industry Partners" },
    { imgLink: "https://nitj.ac.in/files/1728104330664-WhatsApp%20Image%202024-10-03%20at%2010.25.43%20PM.jpeg", name: "Inviting Prof. A. B. Pandit, VC, ICT Mumbai for CHEMCON 2024" },
    { imgLink: "https://nitj.ac.in/files/1728104394354-WhatsApp%20Image%202024-10-03%20at%2010.25.42%20PM.jpeg", name: "Inviting Industry Partners - Arti Industries" },
    { imgLink: "https://nitj.ac.in/files/1729938898055-WhatsApp%20Image%202024-10-24%20at%204.25.00%20PM.jpeg", name: "Team Chemcon inviting Sh. A K Singh, CEO Petronet LNG at New Delhi" },
    { imgLink: "https://nitj.ac.in/files/1729938997356-WhatsApp%20Image%202024-10-24%20at%204.25.24%20PM.jpeg", name: "Inviting Industry Partners" },
    { imgLink: "https://nitj.ac.in/files/1729939106207-WhatsApp%20Image%202024-10-24%20at%204.26.01%20PM.jpeg", name: "Team Chemcon Inviting Sh O P Singh, Director ONGC" }
  ];

  const day1 = [
    { imgLink: "https://nitj.ac.in/files/1735399990395-0L9A2970.JPG", name: "" },
    { imgLink: "https://nitj.ac.in/files/1735400011292-0L9A2983.JPG", name: "" },
    { imgLink: "https://nitj.ac.in/files/1735400027152-0L9A3010.JPG", name: "" },
    { imgLink: "https://nitj.ac.in/files/1735400046195-0L9A3028.JPG", name: "" },
    { imgLink: "https://nitj.ac.in/files/1735400061118-0L9A3051.JPG", name: "" },
    { imgLink: "https://nitj.ac.in/files/1735400146087-0L9A3083.JPG", name: "" },
    { imgLink: "https://nitj.ac.in/files/1735400205408-0L9A3107.JPG", name: "" },
    { imgLink: "https://nitj.ac.in/files/1735400237759-0L9A3111.JPG", name: "" },
    { imgLink: "https://nitj.ac.in/files/1735400358695-0L9A3261.JPG", name: "" }
  ];

  const day2 = [
    { imgLink: "https://nitj.ac.in/files/1735905313078-0L9A3928.JPG", name: "" },
    { imgLink: "https://nitj.ac.in/files/1735905348891-0L9A4079.JPG", name: "" },
    { imgLink: "https://nitj.ac.in/files/1735905364658-0L9A4085.JPG", name: "" },
    { imgLink: "https://nitj.ac.in/files/1735905383183-0L9A4103.JPG", name: "" },
    { imgLink: "https://nitj.ac.in/files/1735905398895-0L9A4121.JPG", name: "" },
    { imgLink: "https://nitj.ac.in/files/1735905418035-0L9A4159.JPG", name: "" },
    { imgLink: "https://nitj.ac.in/files/1735905432000-0L9A4204.JPG", name: "" },
    { imgLink: "https://nitj.ac.in/files/1735905454810-0L9A4228.JPG", name: "" },
    { imgLink: "https://nitj.ac.in/files/1735905484927-0L9A4244.JPG", name: "" },
    { imgLink: "https://nitj.ac.in/files/1735905501732-0L9A4252.JPG", name: "" },
    { imgLink: "https://nitj.ac.in/files/1735905518488-0L9A4256.JPG", name: "" },
    { imgLink: "https://nitj.ac.in/files/1735905532492-0L9A4262.JPG", name: "" },
    { imgLink: "https://nitj.ac.in/files/1735905550516-0L9A4278.JPG", name: "" },
];


  const day3 = [
    { imgLink: "https://nitj.ac.in/files/1735642366747-0L9A5751.JPG", name: "" },
    { imgLink: "https://nitj.ac.in/files/1735642396710-0L9A5762.JPG", name: "" },
    { imgLink: "https://nitj.ac.in/files/1735642446103-0L9A5753.JPG", name: "" },
    { imgLink: "https://nitj.ac.in/files/1735642420804-0L9A5758.JPG", name: "" },
    { imgLink: "https://nitj.ac.in/files/1735642282938-0L9A5708.JPG", name: "" },

  ];

  useEffect(() => {
    // Set initial slides to 'invitations'
    setSlides(inaugural);



  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(intervalId);
  }, [currentIndex, slides]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleSetSlides = (newSlides, name) => {
    setHeading(name);
    setSlides(newSlides);
    setCurrentIndex(0); // Reset to the first slide
  };

  return (
    <div className="bg-white container space-y-8 lg:max-w-7xl mx-auto px-8 sm:px-10 lg:px-8 mb-32 sm:mb-10">
      <div className="h-[420px] w-full md:h-[520px] lg:h-[680px] m-auto py-16 relative group">

        <h2 className="text-4xl font-sans font-bold text-center text-gray-950 mb-3">Image Gallery</h2>
        <div className="flex justify-center space-x-4 mb-3 font-sans flex-wrap">


          <button onClick={() => handleSetSlides(inaugural, "Inaugural Function")}
            className={`px-4 py-1 rounded-lg  mb-2 ${heading === "Inaugural Function"
              ? "bg-accent-500 text-white font-bold"
              : "bg-accent-100 text-gray-700 font-semibold"
              }`}>Inaugural Function</button>
          <button onClick={() => handleSetSlides(day1, "Day1")} className={`px-4 py-1 rounded-lg  mb-2 ${heading === "Day1"
            ? "bg-accent-500 text-white font-bold"
            : "bg-accent-100 text-gray-700 font-semibold"
            }`}>Day 1 </button>

          <button onClick={() => handleSetSlides(day2, "Day2")} className={`px-4 py-1 rounded-lg  mb-2 ${heading === "Day2"
            ? "bg-accent-500 text-white font-bold"
            : "bg-accent-100 text-gray-700 font-semibold"
            }`}>Day 2 </button>
          <button onClick={() => handleSetSlides(day3, "Day3")} className={`px-4 py-1 rounded-lg  mb-2 ${heading === "Day3"
            ? "bg-accent-500 text-white font-bold"
            : "bg-accent-100 text-gray-700 font-semibold"
            }`}>Day 3</button>
          <button onClick={() => handleSetSlides(invitations, "Invitations")} className={`px-4 py-1 rounded-lg  mb-2 ${heading === "Invitations"
            ? "bg-accent-500 text-white font-bold"
            : "bg-accent-100 text-gray-700 font-semibold"
            }`}>Invitations</button>

        </div>

        {slides.length > 0 && slides[currentIndex] && (
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].imgLink})` }}
            className="w-full h-full rounded-2xl bg-center bg-cover relative border-2 border-accent-500 shadow-lg shadow-accent-500"
          >
            {slides[currentIndex].name && (
              <div className="absolute text-sm lg:text-xl font-sans font-medium bottom-0 left-0 right-0 bg-black/50 text-white text-center p-2">
                {slides[currentIndex].name}
              </div>
            )}
            <div
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
            </div>
          </div>
        )}

        <div className="flex justify-center py-2 ">
          {slides.map((_, index) => (
            <RxDotFilled
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`text-2xl cursor-pointer ${index === currentIndex ? "text-accent-500 " : "text-black"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;


//This is the code if you want to fetch images from Backend
/*
import  { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import axios from "axios";
import getEnvironment from "../getenvironment";

function Slider(props) {
  const [apiUrl, setApiUrl] = useState(null);
    useEffect(() => {
        // Fetch the environment URL
        getEnvironment().then(url => setApiUrl(url));
    }, []);  
  const [slides, setSlides] = useState([]); // Initialize slides state with an empty array
  const confid = props.confid;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (apiUrl) {
    axios.get(`${apiUrl}/conferencemodule/images/conference/${confid}`, {
      withCredentials: true
    })
      .then(res => {
        const filteredSlides = (res.data || []).filter(slide => slide.feature).sort((a, b) => a.sequence - b.sequence); // Filter slides where feature is true
        setSlides( filteredSlides); 
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }}, [apiUrl, confid]); // Add apiUrl and confid to the dependency array

  useEffect(() => {
    // Set up an interval to call nextSlide every 15 seconds
    const intervalId = setInterval(() => {
      nextSlide();
    }, 2500);

    // Clean up the interval when the component is unmounted or on dependency change
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="bg-white container space-y-8 lg:max-w-7xl mx-auto px-8 sm:px-10 lg:px-8 md:pb-5">
      <div className='h-[420px] w-full md:h-[520px] lg:h-[680px] m-auto py-16 relative group'>
        <h2 className="text-4xl font-sans font-bold text-center text-gray-950 mb-5">Image Gallery</h2>
        {slides.length > 0 && ( // Check if slides array is not empty before accessing its properties
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].imgLink})` }}
            className='w-full h-full rounded-2xl bg-center bg-cover '
          >
            <div className="absolute text-sm lg:text-xl font-sans font-medium bottom-0 left-0 right-0 bg-black/50 text-white text-center p-2">
              {slides[currentIndex].name}
            </div>
          </div>
        )}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0   left-5 rounded-full p-2 bg-black/30 text-white hover:bg-white hover:text-black  cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} className='w-4 h-4 md:w-8 md:h-8' />
        </div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0  right-5 rounded-full p-2 bg-black/30 text-white hover:bg-white hover:text-black  cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} className='w-4 h-4 md:w-8 md:h-8'  />
        </div>
        <div className='flex top-4 justify-center py-2  '>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-sm sm:text-xl md:text-3xl cursor-pointer ${
                currentIndex === slideIndex ? 'text-accent-500' : ''
              }`}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
*/