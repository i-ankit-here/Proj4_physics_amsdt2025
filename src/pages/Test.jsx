import Timeline from "../components/Timeline";
import OurEvents from "../components/OurEvents";
// import HeroSection from "../components/HeroSection";
// import Speakers from "../components/SpeakerSection/Speakers";
import Footer from "../components/Footer";
import AboutNITJ from "../components/AboutNITJ";
import AboutNews from "../components/AboutNews";
import SponsorShip from "../components/Sponsorship";
import { useEffect,useRef } from "react";
import Hero2 from "../components/Hero2";
import Slider from "../components/Slider";
import SecNavbar from "../components/SecNavbar";
import Navbar from "../components/Navbar";
import Speaker from "../components/Speaker";
import InvitedSpeaker from "../components/InvitedSpeaker";
import VideoGallery from "../components/VideoGallery";
import DriveLinks from "../components/Drivelink";
import Waves from "../components/waves/Waves";
// import AboutNews from "./components/Dummy";
function Test(props) {
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
    <div className="bg-black">
    <div className="fixed top-0 w-screen z-40 bg-black">
        <Navbar />
      </div>
      <SecNavbar onClickScroll={scrollToSection}/>
    
      <div className="relative bg-black mt-10">
      <Waves
        lineColor="rgba(0, 255, 156, 0.2)"
        backgroundColor="000"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
        />
        <Hero2 confid={props.confId}  />
      </div>
      <Slider  />
      <DriveLinks/>
      <VideoGallery/>
      <Slider confid={props.confId} />
      <AboutNews confid={props.confId} />
      <Speaker confid={props.confId}  ref={ourspeakersRef}   />
      <InvitedSpeaker confid={props.confId}  ref={invitedspeakersRef}   />
      <Timeline confid={props.confId}  />
      {/* <Speakers /> */}
      <OurEvents confid={props.confId}  />
      <AboutNITJ confid={props.confId} />
      <SponsorShip confid={props.confId} />
      <Footer />
      
    </div>
  );
}

export default Test;