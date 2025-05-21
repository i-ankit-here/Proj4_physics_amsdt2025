import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SecNavbar from '../components/SecNavbar';
import { useParams } from 'react-router-dom';
import getEnvironment from '../getenvironment';
import axios from 'axios';

function CommonNews() {
  const [apiUrl, setApiUrl] = useState(null);
  const [data, setData] = useState(null);              // ← start as null
  const { newsid } = useParams();

  // load base URL
  useEffect(() => {
    getEnvironment().then(url => setApiUrl(url));
  }, []);

  // fetch once we have apiUrl
  useEffect(() => {
    if (!apiUrl) return;
    window.scrollTo(0, 0);
    axios
      .get(`${apiUrl}/conferencemodule/announcements/${newsid}`, { withCredentials: true })
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, [apiUrl, newsid]);

  // while loading...
  if (data === null) {
    return (
      <>
        <Navbar />
{/*         <SecNavbar /> */}
        <div className="container mx-auto mt-[58px] p-8 text-center text-gray-600">
          Loading announcement…
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="fixed top-0 w-screen z-40">
        <Navbar />
      </div>

      <div className="bg-white container max-w-7xl mx-auto px-5 sm:px-10 lg:px-8 mt-[58px] lg:mt-[10px] min-h-[300px] pb-5">
        <div className="w-full mx-auto md:w-[700px] px-4 lg:w-full">
          <h1 className="text-2xl font-bold mb-5 text-gray-950 underline">
            {data.title}
          </h1>
          <div
            className="text-base text-justify text-gray-800 prose"
            dangerouslySetInnerHTML={{ __html: data.description || '' }}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CommonNews;
