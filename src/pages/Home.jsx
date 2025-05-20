import Timeline from "../components/Timeline";
import OurEvents from "../components/OurEvents";
import HeroSection from "../components/HeroSection";
// import Speakers from "../components/SpeakerSection/Speakers";
import Footer from "../components/Footer";
import AboutNITJ from "../components/AboutNITJ";
import AboutNews from "../components/AboutNews";
import SponsorShip from "../components/Sponsorship";
import { useEffect,useRef  } from "react";
import Slider from "../components/Slider";
import SecNavbar from "../components/SecNavbar";
import Navbar from "../components/Navbar"
import Speaker from "../components/Speaker";
import InvitedSpeaker from "../components/InvitedSpeaker";
import VideoGallery from "../components/VideoGallery";
import DriveLinks from "../components/Drivelink";
// import AboutNews from "./components/Dummy";
function Home(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const ourspeakersRef = useRef(null);
  const invitedspeakersRef = useRef(null);

  // Step 2: Define the scroll function
  const scrollToSection = (section) => {
    
    if(section=='ourspeakers'){
      ourspeakersRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }else if(section=='invitedspeakers'){
      invitedspeakersRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    
  };
  return (
    <>
    <div className="fixed top-0 w-screen z-40 ">
        <Navbar />
      </div>
      <SecNavbar onClickScroll={scrollToSection}/>
    
      <HeroSection confid={props.confId}  />
      <Slider  />
      <DriveLinks/>
      <VideoGallery/>
      {/* <Slider confid={props.confId} /> */}
      <AboutNews confid={props.confId} />
      <Speaker confid={props.confId}  ref={ourspeakersRef}   />
      <InvitedSpeaker confid={props.confId}  ref={invitedspeakersRef}   />
      <Timeline confid={props.confId}  />
      {/* <Speakers /> */}
      <OurEvents confid={props.confId}  />
      <AboutNITJ confid={props.confId} />
      <SponsorShip confid={props.confId} />
      <Footer />
      
    </>
  );
}

export default Home;