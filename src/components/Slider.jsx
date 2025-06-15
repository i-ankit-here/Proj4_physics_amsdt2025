import { useEffect, useState } from "react";

const sliderData = [
  { image: "/side-1.webp", label: "Smart Materials for Sustainable Energy" },
  { image: "/side-2.webp", label: "Nanotechnology for Green Innovation" },
  { image: "/side-3.webp", label: "Advanced Composites for Future Tech" }
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full min-h-screen"
      style={{
        backgroundImage: `url('${sliderData[currentSlide].image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: "background-image 1s ease-in-out"
      }}
    >
      {/* Optional gradient overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-300 opacity-90 z-0"></div> */}

      {/* Label at bottom */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-white px-4">
        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-2xl font-bold bg-blue-800 bg-opacity-70 inline-block px-6 py-3 rounded">
          {sliderData[currentSlide].label}
        </h1>
      </div>
    </div>
  );
}

export default Slider;
