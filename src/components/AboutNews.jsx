import { useState, useEffect } from "react";
import Separator from "./common/Separator";
import { Link } from "react-router-dom";
import axios from "axios";
import getEnvironment from "../getenvironment";


function AboutNews(props) {
   const [apiUrl, setApiUrl] = useState(null);
    useEffect(() => {
        // Fetch the environment URL
        getEnvironment().then(url => setApiUrl(url));
    }, []);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const confid = props.confid;
  const [data, setData] = useState(null)

  useEffect(() => {
    if (apiUrl) {
    axios.get(`${apiUrl}/conferencemodule/home/conf/${confid}`, {
      withCredentials: true

    })
      .then(res => {
        setData(res.data);
        console.log(res.data);

      })
      .catch(err => console.log(err))

  }}, [apiUrl]);
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    if (apiUrl) {
    axios.get(`${apiUrl}/conferencemodule/announcements/conf/${confid}`, {
      withCredentials: true

    })
      .then(res => {
        const sortedData = res.data.sort((a, b) => a.sequence - b.sequence);
        setNewsData(sortedData);
        console.log(sortedData);

      })
      .catch(err => console.log(err))

  }}, [apiUrl]);


  return (
    <div className=" bg-white container max-w-7xl flex flex-col items-center lg:flex-row lg:justify-evenly lg:items-start  mx-auto px-5 sm:px-10  lg:px-8 py-20">
      <div className="w-full  md:w-[700px]  s px-4 lg:w-3/5 ">

        <h2 className="text-4xl   font-sans font-bold text-gray-950  ">
        IIChE-Chemcon 2024        </h2>
        <Separator />
        <p className="text-base text-justify font-sans font-base text-gray-800">
          {data ? <div className="min-h-[216px]" dangerouslySetInnerHTML={{ __html: data.about[0].description }} /> : <div className="min-h-[216px]"></div>}

        </p>
        <h2 className="text-4xl font-sans font-bold mt-4 text-gray-950  ">
          About IIChE
        </h2>
        <Separator />
        <p className="text-base text-justify font-sans font-base text-gray-800">
          {data ? <div dangerouslySetInnerHTML={{ __html: data.about[1].description }} /> : " "}
        </p>
      </div>
      <div className="sm:w-full md:w-[700px] sm:pr-6 lg:w-2/5 lg:ml-4 max-w-[700px] h-96 mt-10 sm:px-2 lg:mt-0 ml-5 md:mx-auto lg:px-5  ">
        <h2 className="text-4xl font-sans font-bold text-gray-950 mb-3 lg:mb-4">News</h2>

        <Separator />
        <div
          id="news"
          className="h-[400px]   overflow-auto bg-amber-100  rounded-xl p-4 "
        >
          <div
            className={`space-y-4  ${isMouseOver ? "animate-none cursor-default" : "animate-wiggle"
              }`}
            onMouseOver={() => setIsMouseOver(true)}
            onMouseOut={() => setIsMouseOver(false)}
          // className="flex flex-col  animate-wiggle"
          >

            {newsData.map((item) => (
              <Link key={item._id} target="_blank" rel="noopener noreferrer"
                to={item.link !== "" ? item.link : `/news/${item._id}`}  >

                {!item.hidden && <div className="relative p-4 my-4 rounded-xl hover:shadow-md hover:shadow-accent-600/50 bg-white space-y-4 border-solid border-2 border-amber-400">
                  <div className="w-2 h-2 animate-ping bg-accent-600 absolute -left-1 -top-1 rounded-full"></div>
                  <div className=' flex flex-row'>

                    <p className="text-base font-medium text-accent-600">{item.title}                    </p>

                    {item.new && <span className=' absolute mr-10 right-0  flex flex-row animate-bounce '>

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 stroke-amber-400 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                      </svg>
                      <p className=" text-amber-400 text-sm ml-1 font-semibold">NEW</p>
                    </span >}

                  </div>

                  <p className="text-sm font-sans border-solid border-l-4 border-amber-400 pl-4">
                    {item.metaDescription}
                  </p>
                </div>
                }
              </Link>
            ))}



          </div>
        </div>
      </div>
    </div >
  );
}

export default AboutNews;