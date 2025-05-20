import Separator from "./common/Separator";
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
    // Fetch the environment URL
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
    <div ref={ref} className=" bg-white container max-w-7xl flex flex-col items-center lg:flex-row lg:justify-evenly lg:items-start mx-auto px-5 sm:px-10 py-16 lg:px-8 lg:py-16 min-h-[200px]">
      <div className="w-full lg:w-3/5 md:max-w-[700px] pr-4" >
        <div className="text-center">
          <h2 className="text-4xl font-black mb-4">Timeline</h2>
          <h3 className="text-xl font-medium leading-relaxed text-gray-800 lg:w-2/3 mx-auto"></h3>
        </div>
        <div className="relative py-5">
          <div
            className="w-10 md:w-12 absolute top-0 left-0 bottom-0 flex flex-col justify-center lg:left-1/2 lg:-ml-6"
            aria-hidden="true"
          >
            <div className="mx-auto w-1 h-2.5 grow-0 bg-gradient-to-b from-transparent to-accent-100 rounded-t" />
            <div className="mx-auto w-1 grow bg-accent-100" />
            <div className="mx-auto w-1 h-2.5 grow-0 bg-gradient-to-t from-transparent to-accent-100 rounded-b" />
          </div>

          <ul className="relative space-y-4 pl-10 md:pl-12 lg:pl-0">
            {datesData.map((item, index) => (
              index % 2 === 0 ? (
                <li key={index} className="relative lg:w-1/2 lg:pr-6 lg:mr-auto">
                  <div className="w-10 md:w-12 absolute top-0 left-0 bottom-0 -translate-x-full flex justify-center mt-5 lg:translate-x-6 lg:left-auto lg:right-0">
                    <div className="w-3 h-3 bg-accent-500 rounded-full ring ring-accent-100 ring-opacity-100 ring-offset-2" />
                  </div>
                  <div className="bg-gray-100 hover:ring hover:ring-gray-100 hover:ring-offset-2 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">{item.title}{" "}</h4>
                    <p className="text-sm leading-relaxed">
                      <a
                        href="#"
                        className="font-medium text-accent-600 hover:text-accent-400"
                      >
                      </a>
                    </p>
                  </div>
                  <div className="px-4 py-2 lg:w-48 lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:translate-x-full lg:flex lg:flex-col lg:mt-4 lg:py-0 lg:pr-0 lg:pl-6">
                    {!item.extended ? (
                      <p className="font-medium text-sm text-gray-500">
                        {formatDate(item.date)}
                      </p>
                    ) : (
                      <p>
                        <p className="font-medium text-sm text-gray-500">
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
                    <div className="w-3 h-3 bg-accent-500 rounded-full ring ring-accent-100 ring-opacity-100 ring-offset-2" />
                  </div>
                  <div className="bg-gray-100 hover:ring hover:ring-gray-100 hover:ring-offset-2 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                  </div>
                  <div className="px-4 py-2 lg:w-48 lg:absolute lg:top-0 lg:left-0 lg:bottom-0 lg:-translate-x-full lg:flex lg:flex-col lg:text-right lg:mt-4 lg:py-0 lg:pl-0 lg:pr-6">
                    {!item.extended ? (
                      <p className="font-medium text-sm text-gray-500">
                        {formatDate(item.date)}
                      </p>
                    ) : (
                      <p>
                        <p className="font-medium text-sm text-gray-500">
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
        <div>
          <p className="text-sm text-justify font-sans font-sm text-blue-800">
          <span className="text-red-600 mr-1">**</span>Separate call for papers will be intimated from the authors participating in the conference for the possible publication in conference partner journals.

          </p>
        </div>
      </div>

      <div className="w-full md:w-[700px] lg:w-2/5 px-4 lg:px-0 mt-10 lg:mt-0 mx-auto lg:pl-5 lg:mx-0 ">
        <h2 className="text-4xl font-sans font-bold text-gray-950 mb-3 lg:mb-4">
          About Doaba Regional Centre (DRC)
        </h2>
        <Separator />
        <p className="text-base text-justify font-sans font-base text-gray-800">
          {data ? <div dangerouslySetInnerHTML={{ __html: data.about[2].description }} /> : " "}
        </p>
      </div>
    </div>
  );
});

// Set a display name for the component
Timeline.displayName = 'Timeline';

export default Timeline;
