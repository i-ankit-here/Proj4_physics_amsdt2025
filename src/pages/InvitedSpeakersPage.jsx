import { useEffect,useState } from 'react';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SecNavbar from '../components/SecNavbar';
import axios from "axios";
import getEnvironment from "../getenvironment";
import {  Link } from "react-router-dom";

function InvitedSpeakerPage(props) {
    const confid = props.confid;
    const [speakers, setSpeakers] = useState([]);
    const [apiUrl, setApiUrl] = useState(null);
    useEffect(() => {
        // Fetch the environment URL
        getEnvironment().then(url => setApiUrl(url));
    }, []);  
  useEffect(() => {
    if (apiUrl) {
    axios.get(`${apiUrl}/conferencemodule/speakers/conference/${confid}`, {
      withCredentials: true
    })
      .then(res => {
        const sortedSpeakers = (res.data || []).filter((speaker) => speaker.TalkType === "1").sort((a, b) => a.sequence - b.sequence);
        setSpeakers(sortedSpeakers);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }}, [apiUrl, confid]); 
   
    return (
        <><div className="fixed top-0 w-screen z-40 "> 
        <Navbar />      
        </div>
        <SecNavbar />
        <div className="bg-white container max-w-7xl mx-auto px-5 sm:px-10  lg:px-8 pt-[58px] min-h-[300px] lg:pt-[10px] pb-5">
                <h2 className="text-4xl font-sans font-bold text-center text-gray-950 mb-5">Invited Speakers</h2>
                  <div className="w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4 px-6">
                      {speakers.map((speaker) => (
                        <Link
                          key={speaker.id}
                          target="_blank"
                          rel="noopener noreferrer"
                          to={speaker.ProfileLink !== "" ? speaker.ProfileLink : "/"}
                        >
                          <div className="w-full bg-white shadow-md hover:shadow-xl hover:shadow-accent-700 rounded-lg border border-gray-200 flex flex-col items-center justify-center p-4 min-h-[287px]">
                            <img
                              src={speaker.ImgLink}
                              alt={speaker.Name}
                              className="w-32 h-32 rounded-full object-cover mb-4"
                            />
                            <p className="font-sans text-[18px] font-bold text-gray-900">{speaker.Name}</p>
                            <p className="font-sans text-[12px] font-semibold text-gray-500">{speaker.Institute}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                
            </div>
            <Footer />
        </>
    )
}

export default InvitedSpeakerPage
