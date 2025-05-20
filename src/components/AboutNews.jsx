import { useState, useEffect } from "react";
// import Separator from "./common/Separator";
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
  const [data, setData] = useState(null);

  useEffect(() => {
    if (apiUrl) {
      axios.get(`${apiUrl}/conferencemodule/home/conf/${confid}`, {
        withCredentials: true
      })
        .then(res => {
          setData(res.data);
          console.log(res.data);
        })
        .catch(err => console.log(err));
    }
  }, [apiUrl]);

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
        .catch(err => console.log(err));
    }
  }, [apiUrl]);

  return (
    <div className="bg-black container max-w-7xl mx-auto px-5 sm:px-10 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* About Section - Takes 3/5 of the grid on large screens */}
        <div className="lg:col-span-3 space-y-8">
          <div className="bg-[#00120a] border border-[#00ff4c]/30 rounded-xl p-6 shadow-lg shadow-[#00ff4c]/10">
            <h2 className="text-4xl font-sans font-bold text-[#00ff4c] mb-2">
              AMSDT-2025
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00ff4c] to-transparent mb-6"></div>
            <div className="text-base text-gray-300 space-y-4">
              {data ? (
                <div className="min-h-[216px]" dangerouslySetInnerHTML={{ __html: data.about[0].description }} />
              ) : (
                <div className="min-h-[216px] animate-pulse bg-gray-800/50 rounded"></div>
              )}
            </div>
          </div>

          <div className="bg-[#00120a] border border-[#00ff4c]/30 rounded-xl p-6 shadow-lg shadow-[#00ff4c]/10">
            <h2 className="text-4xl font-sans font-bold text-[#00ff4c] mb-2">
              About AMSDT
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00ff4c] to-transparent mb-6"></div>
            <div className="text-base text-gray-300 space-y-4">
              {data ? (
                <div dangerouslySetInnerHTML={{ __html: data.about[1].description }} />
              ) : (
                <div className="h-32 animate-pulse bg-gray-800/50 rounded"></div>
              )}
            </div>
          </div>
        </div>

        {/* News Section - Takes 2/5 of the grid on large screens */}
        <div className="lg:col-span-2">
          <div className="bg-[#00120a] border border-[#00ff4c]/30 rounded-xl p-6 shadow-lg shadow-[#00ff4c]/10 h-full">
            <h2 className="text-4xl font-sans font-bold text-[#00ff4c] mb-2">News</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00ff4c] to-transparent mb-6"></div>
            
            <div
              id="news"
              className="h-[500px] overflow-auto pr-2"
            >
              <div
                className={`space-y-4 ${isMouseOver ? "animate-none cursor-default" : "animate-wiggle"}`}
                onMouseOver={() => setIsMouseOver(true)}
                onMouseOut={() => setIsMouseOver(false)}
              >
                {newsData.map((item) => (
                  !item.hidden && (
                    <Link 
                      key={item._id} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      to={item.link !== "" ? item.link : `/news/${item._id}`}
                      className="block"
                    >
                      <div className="relative p-4 my-4 rounded-xl hover:shadow-md hover:shadow-[#00ff4c]/30 bg-black/40 backdrop-blur-sm space-y-3 border border-[#00ff4c]/20 transition-all hover:border-[#00ff4c]/50">
                        <div className="w-2 h-2 animate-ping bg-[#00ff4c] absolute -left-1 -top-1 rounded-full"></div>
                        <div className="flex flex-row justify-between items-start">
                          <p className="text-base font-medium text-[#00ff4c]">{item.title}</p>
                          
                          {item.new && (
                            <span className="flex flex-row items-center animate-pulse ml-2">
                              <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth="2" 
                                stroke="currentColor" 
                                className="w-5 stroke-[#00ff4c]"
                              >
                                <path 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" 
                                />
                              </svg>
                              <p className="text-[#00ff4c] text-sm ml-1 font-semibold">NEW</p>
                            </span>
                          )}
                        </div>

                        <p className="text-sm font-sans border-solid border-l-2 border-[#00ff4c] pl-4 text-gray-300">
                          {item.metaDescription}
                        </p>
                      </div>
                    </Link>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutNews;