// import Separator from "./common/Separator";
import axios from "axios";
import getEnvironment from "../getenvironment";
import { useState, useEffect, forwardRef } from "react";
import formatDate from "../utility/formatDate";

const Timeline = forwardRef((props, ref) => {
  const confid = props.confid;
  const [datesData, setDatesData] = useState([]);
  const [data, setData] = useState(null);
  const [apiUrl, setApiUrl] = useState(null);

  useEffect(() => {
    getEnvironment().then(url => setApiUrl(url));
  }, []);

  useEffect(() => {
    if (apiUrl) {
      axios.get(`${apiUrl}/conferencemodule/eventDates/conference/${confid}`, {
        withCredentials: true,
      })
        .then(res => {
          setDatesData(res.data);
          console.log(res.data);
        })
        .catch(err => console.log(err));

      axios.get(`${apiUrl}/conferencemodule/home/conf/${confid}`, {
        withCredentials: true,
      })
        .then(res => {
          setData(res.data);
          console.log(res.data);
        })
        .catch(err => console.log(err));
    }
  }, [apiUrl]);

  return (
    <div ref={ref} className="bg-black container max-w-7xl flex flex-col items-center lg:flex-row lg:justify-evenly lg:items-start mx-auto px-5 sm:px-10 py-16 lg:px-8 lg:py-16 min-h-[200px]">
      <div className="w-full lg:w-3/5 md:max-w-[700px] pr-4">
        <div className="text-center">
          <h2 className="text-4xl font-black mb-4 text-[#00ff4c]">Timeline</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00ff4c] to-transparent mx-auto mb-8"></div>
        </div>
        <div className="relative py-5">
          <div
            className="w-10 md:w-12 absolute top-0 left-0 bottom-0 flex flex-col justify-center lg:left-1/2 lg:-ml-6"
            aria-hidden="true"
          >
            <div className="mx-auto w-1 h-2.5 grow-0 bg-gradient-to-b from-transparent to-[#00ff4c] rounded-t" />
            <div className="mx-auto w-1 grow bg-[#00ff4c]" />
            <div className="mx-auto w-1 h-2.5 grow-0 bg-gradient-to-t from-transparent to-[#00ff4c] rounded-b" />
          </div>

          <ul className="relative space-y-6 pl-10 md:pl-12 lg:pl-0">
            {datesData.map((item, index) => (
              index % 2 === 0 ? (
                <li key={index} className="relative lg:w-1/2 lg:pr-6 lg:mr-auto">
                  <div className="w-10 md:w-12 absolute top-0 left-0 bottom-0 -translate-x-full flex justify-center mt-5 lg:translate-x-6 lg:left-auto lg:right-0">
                    <div className="w-3 h-3 bg-[#00ff4c] rounded-full ring ring-[#00ff4c]/30 ring-opacity-100 ring-offset-2 ring-offset-black" />
                  </div>
                  <div className="bg-[#00120a] hover:bg-[#001a0d] border border-[#00ff4c]/30 hover:border-[#00ff4c]/70 transition-all duration-300 rounded-xl p-5 shadow-md hover:shadow-[#00ff4c]/20">
                    <h4 className="font-semibold mb-2 text-white">{item.title}{" "}</h4>
                    <p className="text-sm leading-relaxed text-gray-300">
                      <a
                        href="#"
                        className="font-medium text-[#00ff4c] hover:text-[#00ff4c]/80"
                      >
                      </a>
                    </p>
                  </div>
                  <div className="px-4 py-2 lg:w-48 lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:translate-x-full lg:flex lg:flex-col lg:mt-4 lg:py-0 lg:pr-0 lg:pl-6">
                    {!item.extended ? (
                      <p className="font-medium text-sm text-[#00ff4c]">
                        {formatDate(item.date)}
                      </p>
                    ) : (
                      <p>
                        <p className="font-medium text-sm text-[#00ff4c]">
                          {formatDate(item.newDate)}
                        </p>
                        <p className="font-medium text-sm text-gray-500 line-through">
                          {formatDate(item.date)}
                        </p>
                      </p>
                    )}
                  </div>
                </li>
              ) : (
                <li key={index} className="relative lg:w-1/2 lg:pl-6 lg:ml-auto">
                  <div className="w-10 md:w-12 absolute top-0 left-0 bottom-0 -translate-x-full flex justify-center mt-5 lg:-translate-x-6">
                    <div className="w-3 h-3 bg-[#00ff4c] rounded-full ring ring-[#00ff4c]/30 ring-opacity-100 ring-offset-2 ring-offset-black" />
                  </div>
                  <div className="bg-[#00120a] hover:bg-[#001a0d] border border-[#00ff4c]/30 hover:border-[#00ff4c]/70 transition-all duration-300 rounded-xl p-5 shadow-md hover:shadow-[#00ff4c]/20">
                    <h4 className="font-semibold mb-2 text-white">{item.title}</h4>
                  </div>
                  <div className="px-4 py-2 lg:w-48 lg:absolute lg:top-0 lg:left-0 lg:bottom-0 lg:-translate-x-full lg:flex lg:flex-col lg:text-right lg:mt-4 lg:py-0 lg:pl-0 lg:pr-6">
                    {!item.extended ? (
                      <p className="font-medium text-sm text-[#00ff4c]">
                        {formatDate(item.date)}
                      </p>
                    ) : (
                      <p>
                        <p className="font-medium text-sm text-[#00ff4c]">
                          {formatDate(item.newDate)}
                        </p>
                        <p className="font-medium text-sm text-gray-500 line-through">
                          {formatDate(item.date)}
                        </p>
                      </p>
                    )}
                  </div>
                </li>
              )
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <p className="text-sm text-justify font-sans font-medium text-[#00ff4c]/80 bg-[#00120a] border border-[#00ff4c]/20 p-4 rounded-lg">
            <span className="text-red-500 mr-1">**</span>Separate call for papers will be intimated from the authors participating in the conference for the possible publication in conference partner journals.
          </p>
        </div>
      </div>

      <div className="w-full md:w-[700px] lg:w-2/5 px-4 lg:px-0 mt-10 lg:mt-0 mx-auto lg:pl-8 lg:mx-0 border-l-0 lg:border-l border-[#00ff4c]/30">
        <h2 className="text-4xl font-sans font-bold text-[#00ff4c] mb-3 lg:mb-4">
          About Doaba Regional Centre (DRC)
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#00ff4c] to-transparent mb-6"></div>
        <div className="text-base text-justify font-sans font-base text-gray-300 bg-[#00120a] border border-[#00ff4c]/30 p-6 rounded-xl shadow-md">
          {data ? <div dangerouslySetInnerHTML={{ __html: data.about[2].description }} /> : (
            <div className="animate-pulse space-y-3">
              <div className="h-4 bg-[#001a0d] rounded w-3/4"></div>
              <div className="h-4 bg-[#001a0d] rounded"></div>
              <div className="h-4 bg-[#001a0d] rounded w-5/6"></div>
              <div className="h-4 bg-[#001a0d] rounded w-2/3"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

// Set a display name for the component
Timeline.displayName = 'Timeline';

export default Timeline;
