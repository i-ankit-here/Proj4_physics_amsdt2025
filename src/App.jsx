import Home from "./pages/Home";
import Events from "./pages/Events";
import Accommodation from "./pages/Accomodation/Accomodation";
import Location from "./pages/Location";
import RegistrationFee from "./pages/Registration/RegistrationFee";
import RegistrationLink from "./pages/Registration/RegistrationLink";
import RegistrationFAQ from "./pages/Registration/RegistrationFAQ";
import Souvenir from "./pages/Souvenir";
import Sponsors from "./pages/Sponsors";
import { Route, Routes } from "react-router-dom";
//import Committee from "./pages/Committee";
import CommonNews from "./pages/CommonNews";
import ParticlesComponent from "./components/Particle";
import './App.css'
import CommontemplateCommittee from "./pages/Committee/CommonTemplateCommittee";
import Hotels from "./pages/Accomodation/Hotels";
import SpeakerPage from "./pages/SpeakerPage";
import InvitedSpeakerPage from "./pages/InvitedSpeakersPage";
function App() {
   const confid="65fed89def981d3a955ddd9f";
  return (
    <>
    <ParticlesComponent id="particle" />

<div id="content ">
      < Routes >
      {/* https://xceed.nitj.ac.in/conferencemodule/commontemplate/671fb502dbcf15e8ac081476 */}
        <Route path="/" element={<Home confId={confid} />} />
        <Route path="sponsorship" element={<Sponsors />} />
        <Route path="events" element={<Events />} />
        <Route path="location" element={<Location confid={confid}  />} />
        <Route path="accommodation" element={<Accommodation confid={confid}/>} />
        <Route path="hotelslist" element={<Hotels confid={confid}/>} />
        <Route path="souvenir" element={<Souvenir />} />
        <Route path="speakers" element={<SpeakerPage confid={confid} />} />
        <Route path="invitedspeakers" element={<InvitedSpeakerPage confid={confid} />} />
        <Route path="registrationfee" element={<RegistrationFee />} />
        <Route path="registrationlink" element={<RegistrationLink />} />
        <Route path="registrationfaq" element={<RegistrationFAQ pageid="671fb502dbcf15e8ac081476" />} />
        <Route path="nationalcommittee" element={<CommontemplateCommittee pageid="66c2bf945e7b005443191765" />} />
        <Route path="localcommittee" element={<CommontemplateCommittee pageid="66c2c0855e7b00544319176c" />} />
        <Route path="news/:newsid" element={<CommonNews /> } />


      </Routes >
      </div>
    </>
  );
}

export default App;


