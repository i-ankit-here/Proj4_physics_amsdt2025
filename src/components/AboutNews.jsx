import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import getEnvironment from "../getenvironment";

function NewsItem({ item, onHover, onLeave }) {
  if (item.hidden) return null;
  return (
    <Link
      key={item._id}
      to={item.link || `/news/${item._id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
      onMouseOver={onHover}
      onMouseOut={onLeave}
    >
      <div className="relative p-4 my-4 rounded-xl hover:shadow-md hover:shadow-[#00ff4c]/30 bg-black/40 backdrop-blur-sm space-y-3 border border-[#00ff4c]/20 transition-all hover:border-[#00ff4c]/50">
        <div className="w-2 h-2 animate-ping bg-[#00ff4c] absolute -left-1 -top-1 rounded-full" />
        <div className="flex justify-between items-start">
          <p className="text-base font-medium text-[#00ff4c]">{item.title}</p>
          {item.new && (
            <span className="flex items-center animate-pulse ml-2 text-[#00ff4c] text-sm font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09L9 18.75l.813-2.846a4.5 4.5 0 003.09-3.09z"
                />
              </svg>
              NEW
            </span>
          )}
        </div>
        <p className="text-sm border-l-2 border-[#00ff4c] pl-4 text-gray-300">
          {item.metaDescription}
        </p>
      </div>
    </Link>
  );
}

export default function AboutNews({ confid }) {
  const [apiUrl, setApiUrl] = useState(null);
  const [data, setData] = useState(null);
  const [newsData, setNewsData] = useState([]);
  const [isMouseOver, setIsMouseOver] = useState(false);

  // 1) Load base URL
  useEffect(() => {
    getEnvironment().then((url) => setApiUrl(url));
  }, []);

  // 2) Fetch conference “about” sections
  useEffect(() => {
    if (!apiUrl) return;
    axios
      .get(`${apiUrl}/conferencemodule/home/conf/${confid}`, { withCredentials: true })
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, [apiUrl, confid]);

  // 3) Fetch announcements
  useEffect(() => {
    if (!apiUrl) return;
    axios
      .get(`${apiUrl}/conferencemodule/announcements/conf/${confid}`, { withCredentials: true })
      .then((res) => {
        setNewsData(res.data.sort((a, b) => a.sequence - b.sequence));
      })
      .catch((err) => console.error(err));
  }, [apiUrl, confid]);

  // 4) Loading state
  if (!data) {
    return (
      <div className="py-20 text-center text-gray-500">
        Loading conference info…
      </div>
    );
  }

  const aboutItems = Array.isArray(data.about) ? data.about : [];

  return (
    <div className="bg-black container max-w-7xl mx-auto px-5 sm:px-10 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* About Sections */}
        <div className="lg:col-span-3 space-y-8">
          {aboutItems.map((section, idx) => (
            <div
              key={idx}
              className="bg-[#00120a] border border-[#00ff4c]/30 rounded-xl p-6 shadow-lg shadow-[#00ff4c]/10"
            >
              <h2 className="text-4xl font-bold text-[#00ff4c] mb-2">
                {section.title || `Section ${idx + 1}`}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#00ff4c] to-transparent mb-6" />
              <div className="text-base text-gray-300 space-y-4 min-h-[216px]">
                {/* Only render if description exists */}
                {section.description ? (
                  <div
                    dangerouslySetInnerHTML={{ __html: section.description }}
                  />
                ) : (
                  <div className="h-32 animate-pulse bg-gray-800/50 rounded" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* News Section */}
        <div className="lg:col-span-2">
          <div className="bg-[#00120a] border border-[#00ff4c]/30 rounded-xl p-6 shadow-lg shadow-[#00ff4c]/10 h-full">
            <h2 className="text-4xl font-bold text-[#00ff4c] mb-2">News</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00ff4c] to-transparent mb-6" />

            <div
              id="news"
              className="h-[500px] overflow-auto pr-2"
            >
              <div
                className={`space-y-4 ${
                  isMouseOver ? "cursor-default" : "animate-wiggle"
                }`}
                onMouseOver={() => setIsMouseOver(true)}
                onMouseOut={() => setIsMouseOver(false)}
              >
                {newsData.length === 0 ? (
                  <p className="text-gray-500">No news available</p>
                ) : (
                  newsData.map((item) => (
                    <NewsItem
                      key={item._id}
                      item={item}
                      onHover={() => setIsMouseOver(true)}
                      onLeave={() => setIsMouseOver(false)}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
