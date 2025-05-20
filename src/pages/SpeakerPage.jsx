import { useEffect,useState } from 'react';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SecNavbar from '../components/SecNavbar';
import axios from "axios";
import getEnvironment from "../getenvironment";
import {  Link } from "react-router-dom";

function SpeakerPage(props) {
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
        const sortedSpeakers = (res.data || []).filter((speaker) => speaker.TalkType !== "1").sort((a, b) => a.sequence - b.sequence);
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
                <h2 className="text-4xl font-sans font-bold text-center text-gray-950 mb-5">Our Speakers</h2>
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

export default SpeakerPage


// import { useEffect, useState } from "react";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import SecNavbar from "../components/SecNavbar";
// import axios from "axios";
// import getEnvironment from "../getenvironment";
// import { Link } from "react-router-dom";

// function SpeakerPage(props) {
//   const confid = props.confid;
//   const [speakers, setSpeakers] = useState([]);
//   const [speakersType1, setSpeakersType1] = useState([]);
//   const [apiUrl, setApiUrl] = useState(null);
//   const [showInvited, setShowInvited] = useState(false); // Toggle between invited and other speakers

//   useEffect(() => {
//     // Fetch the environment URL
//     getEnvironment()
//       .then((url) => {
//         console.log("API URL:", url); // Debugging API URL
//         setApiUrl(url);
//       })
//       .catch((err) => console.error("Error fetching environment:", err));
//   }, []);

//   useEffect(() => {
//     if (apiUrl && confid) {
//       axios
//         .get(`${apiUrl}/conferencemodule/speakers/conference/${confid}`, {
//           withCredentials: true,
//         })
//         .then((res) => {
//           const allSpeakers = Array.isArray(res.data) ? res.data : [];
//           const sortedSpeakers = allSpeakers
//             .filter((speaker) => speaker.TalkType !== "1")
//             .sort((a, b) => a.sequence - b.sequence);
//           setSpeakers(sortedSpeakers);

//           const sortedSpeakersType1 = allSpeakers
//             .filter((speaker) => speaker.TalkType === "1")
//             .sort((a, b) => a.sequence - b.sequence);
//           setSpeakersType1(sortedSpeakersType1);
//         })
//         .catch((err) => console.error("Error fetching speakers:", err));
//     }
//   }, [apiUrl, confid]);

//   return (
//     <>
//       <div className="fixed top-0 w-screen z-40">
//         <Navbar />
//       </div>
//       <SecNavbar />
//       <div className="bg-white container max-w-7xl mx-auto px-5 sm:px-10 lg:px-8 pt-[58px] min-h-[300px] lg:pt-[10px] pb-5">
//         <h2 className="text-4xl font-sans font-bold text-center text-gray-950 mb-5">
//           {showInvited ? "Invited Speakers" : "Our Speakers"}
//         </h2>
//         <div className="flex justify-center space-x-4 mb-6">
//           <button
//             onClick={() => setShowInvited(false)}
//             className={`px-4 py-2 rounded-lg ${
//               !showInvited
//                 ? "bg-accent-500 text-white font-bold"
//                 : "bg-accent-100 text-gray-700 font-semibold"
//             }`}
//           >
//             Our Speakers
//           </button>
//           <button
//             onClick={() => setShowInvited(true)}
//             className={`sm:px-2 px-4 py-2 rounded-lg ${
//               showInvited
//                 ? "bg-accent-500 text-white font-bold"
//                 : "bg-accent-100 text-gray-700 font-semibold"
//             }`}
//           >
//             Invited Speakers
//           </button>
//         </div>
//         <div className="w-full">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4 px-6">
//             {
//               (showInvited ? speakersType1 : speakers).map((speaker) => (
//                 <Link
//                   key={speaker.id}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   to={speaker.ProfileLink !== "" ? speaker.ProfileLink : "/"}
//                 >
//                   <div className="w-full bg-white shadow-md hover:shadow-xl hover:shadow-accent-700 rounded-lg border border-gray-200 flex flex-col items-center justify-center p-4 min-h-[287px]">
//                     <img
//                       src={speaker.ImgLink}
//                       alt={speaker.Name}
//                       className="w-32 h-32 rounded-full object-cover mb-4"
//                     />
//                     <p className="font-sans text-[18px] font-bold text-gray-900">
//                       {speaker.Name}
//                     </p>
//                     <p className="font-sans text-[12px] font-semibold text-gray-500">
//                       {speaker.Institute}
//                     </p>
//                   </div>
//                 </Link>
//               ))
//           }
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default SpeakerPage;
