import { useEffect, useState } from "react";
import gsap from "gsap";
import axios from "axios";
import formatDate from "../utility/formatDate";
import getEnvironment from "../getenvironment";
import { Link } from "react-router-dom";
// import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { FaDownload } from "react-icons/fa";
// import Invitation from "./common/invitation";
function HeroSection(props) {
  const confid = props.confid;
  const [data, setData] = useState(null);
  // const [showinvitation, SetShowinvitation] = useState(true);
  const [apiUrl, setApiUrl] = useState(null);
  useEffect(() => {
    // Fetch the environment URL
    getEnvironment().then(url => setApiUrl(url));
  }, []);
  useEffect(() => {
    const animation = () => {
      let tl = gsap.timeline();
      let tl2 = gsap.timeline();
      let tl3 = gsap.timeline();
      let tl4 = gsap.timeline();
      let tl5 = gsap.timeline();
      let tween = tl.fromTo(
        ".main",
        {
          x: 600,
          y: 600,

        },
        {
          x: 0,
          y: 0,

          duration: 3.5,
          stagger: 7,
          opacity: 1,
          ease: "sine.out",
        }
      );

      let tween2 = tl2.fromTo(
        ".main",
        { x: 0, y: 0, zIndex: -1 },
        {
          x: -600,
          y: -600,
          duration: 3.5,
          stagger: 7,
          opacity: 0,
          delay: 7,
          ease: "sine.out",
        }
      );

      let tween3 = tl3.fromTo(
        ".main2",
        {
          opacity: 0,
          x: 600,
          y: 600,

        },
        {
          x: 0,
          y: 0,
          duration: 3.5,
          stagger: 7,
          opacity: 1,
          ease: "sine.out",
          delay: 21,

        }
      );

      let tween4 = tl4.to(".main2", {
        x: -600,
        y: -600,
        duration: 3.5,
        stagger: 7,
        opacity: 1,
        delay: 28,
        ease: "sine.out",
      });

      let tween5 = tl5.to("main", { opacity: 0, duration: 0.5 });

      tween.seek(0);
      tween2.seek(0);
      tween5.play();
      tween3.seek(0);
      tween4.seek(0);
    };

    animation();
    setInterval(() => {
      animation();
    }, 49000);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (apiUrl) {

      axios
        .get(`${apiUrl}/conferencemodule/home/conf/${confid}`, {
          withCredentials: true,
        })
        .then((res) => {
          setData(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [apiUrl, confid]);

  return (
    <>
      
      {/* <Invitation /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center max-w-7xl mx-auto lg:px-8 px-3 mt-[58px] lg:mt-[2px] ">
        <div className=" flex flex-col items-center md:items-start justify-center z-20 py-4 gap-3 ">

          {/* Logos added */}
            <div className=" w-full  flex flex-row justify-evenly items-center pr-10">
          
              <img src="/nitjlogo.png" className="bg-white w-10 h-10 md:w-20 md:h-20" alt="" />
              <img src="/iichelogo.png" alt="" className="bg-white w-10 h-10 md:w-20 md:h-20" />
              <img src="/chemconlogo.png" alt="" className="bg-white w-10 h-10 md:w-20 md:h-20 " />
              <img src="/cipetlogo.png" alt="" className="bg-white w-10 h-10 md:w-20 md:h-20 " />

            </div>
          <p className="bg-white lg:text-3xl md:text-3xl text-3xl leading-tight lg:leading-none tracking-wide font-bold text-accent-500 text-center  ">
            {data ? data.confName : " "}{" "}
          </p>

          <p className="bg-white  lg:text-2xl md:text-2xl text-2xl leading-tight lg:leading-none tracking-wide font-bold text-accent-400 text-center my-3 mx-auto">
            {data ? data.shortName : " "}{" "}
          </p>

          <h3 className="bg-white  mx-auto font-bold text-center tracking-wide  lg:text-xl">
            Role of Chemical Engineering towards Sustainable Development and
            Atmanirbhar Bharat
          </h3>

          <h4 className="bg-white  text-accent-500 mx-auto font-bold text-center md:text-left text-md ">
            {" "}
            {data
              ? formatDate(data.confStartDate) +
              " to " +
              formatDate(data.confEndDate)
              : " "}
          </h4>
          <p className=" mx-auto">
            <p className="bg-white  mx-auto font-semibold text-center  ">Organized by</p>
            <h4 className="bg-white  mx-auto font-bold  text-xl text-center md:text-center ">
              <p> Indian Institute of Chemical Engineers</p>
              <p> Doaba Regional Centre</p> <p>NIT Jalandhar</p>
            </h4>
          </p>
          <div className="bg-white  flex flex-col md:flex-row   gap-4 items-center">
            <div className="flex flex-col justify-center items-center max-w-[300px]">
              <p className="  font-semibold text-center md:text-left ">
                77<sup>th </sup>Annual Session
              </p>
              {/* <img src="/logo77th.jpg" className=" w-16 md:w-20 " alt="" /> */}

              <p className=" font-bold text-center ">
                Indian Institute of Chemical Engineers
              </p>
            </div>
            <div className="flex flex-col justify-center  max-w-[300px] items-center">
              <p className=" font-semibold text-center md:text-left ">
                Organized at
              </p>
              {/* <img src="/logo.png" className=" w-16 md:w-20 " alt="" /> */}

              <p className=" font-bold text-center ">
                Dr. B R Ambedkar National Institute of Technology, Jalandhar
              </p>
            </div>
          </div>
          {/* <section className="mt-8 lg:mt-14 text-stone-900 text-center md:text-left">
            <h1 className="lg:text-5xl text-3xl  font-bold">
              IIChE ChemCon 2024
            </h1>
            <div className="space-y-4 mt-6 lg:mt-10">
              <p className="lg:text-xl text-lg font-medium">


              </p>

            </div>
          </section> */}
          <div className="flex flex-row  mx-auto items-center">
                  <Link
                  to={data ? data.facebookLink :" "} target="_blank"
                  className="inline-flex justify-between items-center mx-5 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                  role="alert"
                >
                  <span className="text-sm bg-violet-600 font-bold uppercase rounded-full text-white px-4 py-1.5 mr-2">
                  <FaDownload />
                  </span>{" "}
                  <span className="text-xs md:text-sm font-medium pr-2">Flyer Chemcon-2024 </span>
                  
                </Link>
                <Link
                  to={data ? data.twitterLink :" "} target="_blank"
                  className="inline-flex justify-between items-center mx-5  text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                  role="alert" 
                >
                  <span className="text-sm bg-green-500 font-bold uppercase rounded-full text-white px-4 py-1.5 mr-2">
                  <FaDownload />
                  </span>{" "}
                  <span className="text-xs md:text-sm font-medium pr-2">Brochure Chemcon-2024 </span>
                  
                </Link>
        </div>
          {/* <a
            href="https://docs.google.com/document/u/1/d/e/2PACX-1vRjWCr2kIO67CAcCz--1dCqer8dvDH5yYGQV7jA_XblMNko4KPk3B4ZT4no98o-sEcg-II7pbaN_ga4/pub" target="_blank" rel="noopener noreferrer"
            className="mt-3 mx-auto flex items-center animate-bounce justify-center whitespace-nowrap rounded-md border w-fit border-transparent bg-accent-500 px-6 py-2 text-base font-semibold text-white shadow-sm hover:bg-accent-700"
          >
            Presentation and Poster Schedule
          </a> */}
          {/* 

          <button className='flex flex-row animate-bounce mx-auto bg-white ' onClick={props.onClickScroll}>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-7 stroke-violet-500  ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                      </svg>
                      <p className=" text-violet-600  font-semibold font-serif text-lg ml-2 my-auto">Deadline Extended </p>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-7 ml-2 stroke-violet-600  ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                      </svg>

          </button> */}
<a
            href="https://docs.google.com/document/u/1/d/e/2PACX-1vRjWCr2kIO67CAcCz--1dCqer8dvDH5yYGQV7jA_XblMNko4KPk3B4ZT4no98o-sEcg-II7pbaN_ga4/pub" target="_blank" rel="noopener noreferrer" className="mx-auto"
          >
          <button className='mx-auto flex flex-row animate-bounce    bg-white mt-3 '>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-7 stroke-violet-700  ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                      </svg>
                      <p className=" text-red-600  font-semibold font-serif underline  ml-2 text-xl my-auto"> Presentation and Poster Schedule </p>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-7 ml-2 stroke-violet-700  ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                      </svg>

          </button>
          </a>   
        </div>

        <div className="relative h-full w-full p-[0%] min-h-[20rem] top-10 overflow-hidden">
          <div className="h-full w-full relative">
            <div className="opacity-0 absolute main  grid grid-cols-4 grid-rows-4 gap-2 md:gap-5 w-full h-full ">
              <div className="relative col-span-4 row-span-3 flex justify-center rounded-lg">
                <div className="absolute w-full h-full   z-40  rounded-lg" />
                <img
                  src="/main.webp"
                  className={`bg-black  object-cover h-full object-left lg:rounded-xl rounded-lg`}
                  alt=""
                />
              </div>
            </div>
            <div className="opacity-0 absolute main  grid grid-cols-4 grid-rows-4 gap-2 md:gap-5 w-full h-full ">
              <div className="  relative col-span-4 row-span-3 flex justify-center rounded-lg">
                <div className="absolute w-full h-full   z-30  rounded-lg" />
                <img
                  src="/side-1.webp"
                  className={`bg-black  object-cover h-full object-left lg:rounded-xl rounded-lg`}
                  alt=""
                />
              </div>
            </div>

            <div className="opacity-0 absolute main  grid grid-cols-4 grid-rows-4 gap-2 md:gap-5 w-full h-full ">
              <div className="  relative col-span-4 row-span-3 flex justify-center rounded-lg">
                <div className="absolute w-full h-full  z-20  rounded-lg" />
                <img
                  src="/side-2.webp"
                  className={`bg-black  object-cover h-full object-left lg:rounded-xl rounded-lg`}
                  alt=""
                />
              </div>
            </div>

            <div className="opacity-0 absolute main  grid grid-cols-4 grid-rows-4 gap-2 md:gap-5 w-full h-full ">
              <div className="  relative col-span-4 row-span-3 flex justify-center rounded-lg">
                <div className="absolute w-full h-full  z-20  rounded-lg" />
                <img
                  src="/side-3.webp"
                  className={`bg-black  object-cover h-full object-left lg:rounded-xl rounded-lg`}
                  alt=""
                />
              </div>
            </div>
            <div className="opacity-0 absolute main2 grid grid-cols-4 grid-rows-4 gap-2 md:gap-5 w-full h-full ">
              <div className="relative col-span-4 row-span-3 flex justify-center rounded-lg">
                <div className="absolute w-full h-full   z-40  rounded-lg" />
                <img
                  src="/main.webp"
                  className={`bg-black  object-cover h-full object-left lg:rounded-xl rounded-lg`}
                  alt=""
                />
              </div>
            </div>
            <div className="opacity-0 absolute main2  grid grid-cols-4 grid-rows-4 gap-2 md:gap-5 w-full h-full ">
              <div className="  relative col-span-4 row-span-3 flex justify-center rounded-lg">
                <div className="absolute w-full h-full   z-30  rounded-lg" />
                <img
                  src="/side-1.webp"
                  className={`bg-black  object-cover h-full object-left lg:rounded-xl rounded-lg`}
                  alt=""
                />
              </div>
            </div>

            <div className="opacity-0 absolute main2  grid grid-cols-4 grid-rows-4 gap-2 md:gap-5 w-full h-full ">
              <div className="  relative col-span-4 row-span-3 flex justify-center rounded-lg">
                <div className="absolute w-full h-full   z-20  rounded-lg" />
                <img
                  src="/side-2.webp"
                  className={`bg-black  object-cover h-full object-left lg:rounded-xl rounded-lg `}
                  alt=""
                />
              </div>
            </div>

            <div className="opacity-0 absolute main2  grid grid-cols-4 grid-rows-4 gap-2 md:gap-5 w-full h-full ">
              <div className="  relative col-span-4 row-span-3 flex justify-center rounded-lg">
                <div className="absolute w-full h-full  z-20  rounded-lg" />
                <img
                  src="/side-3.webp"
                  className={`bg-black  object-cover h-full object-left lg:rounded-xl rounded-lg`}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
