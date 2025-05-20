import { useEffect, useState } from "react";
// import CountdownTimer from "./CountdownTimer";
import { Link } from "react-router-dom";
import Invitation from './common/Invitation';

function SecNavbar({onClickScroll}) {
  const [isHomePage, setIsHomePage] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if the current URL is the homepage
    const isHome = window.location.pathname === '/';
    setIsHomePage(isHome);

    // Show invitation only on the first visit to the homepage in the current session
    if (isHome && !sessionStorage.getItem('invitationShown')) {
      setShow(true);
      sessionStorage.setItem('invitationShown', 'true');
    }
  }, []); // Empty dependency array ensures this runs only once on component mount

  return (
    <>
      <div className="mt-[56px] h-[50px] sm:hidden hidden lg:flex bg-accent-200 shadow z-50 px-2 sm:px-4 lg:px-8 py-3 lg:space-x-5 ">
        <span>
          <p className="font-bold">IIChE ChemCon 2024 | December 27-30, 2024</p>
        </span>

        {isHomePage ? (
          <>
            <button
         onClick={() => onClickScroll('ourspeakers')}              
        className="group relative transition-all duration-300 ease-in-out hover:scale-105 "
            >
              <span>
                <p className="ml-10 text-sm font-semibold rounded-full text-black bg-white px-4 py-[2px] border-radius-2 shadow-lg group-hover:bg-green-500 group-hover:text-white">
                  Our Speakers
                </p>
              </span>
            </button>
          </>
        ) : (
          <Link to="/speakers">
            <button className="group relative transition-all duration-300 ease-in-out hover:scale-105">
              <span>
                <p className="ml-10 text-sm font-semibold rounded-full text-black bg-white px-4 py-[2px] border-radius-2 shadow-lg group-hover:bg-green-500 group-hover:text-white">
                Our Speakers
                </p>
              </span>
            </button>
          </Link>
        )}

{isHomePage ? (
          <>
            <button
         onClick={() => onClickScroll('invitedspeakers')}              
         className="group relative transition-all duration-300 ease-in-out hover:scale-105 "
            >
              <span>
                <p className=" text-sm font-semibold rounded-full text-black bg-white px-2 py-[2px] border-radius-2 shadow-lg group-hover:bg-yellow-500 group-hover:text-white">
                  Invited Speakers
                </p>
              </span>
            </button>
          </>
        ) : (
          <Link to="/invitedspeakers">
            <button className="group relative transition-all duration-300 ease-in-out hover:scale-105">
              <span>
                <p className=" text-sm font-semibold rounded-full text-black bg-white px-2 py-[2px] border-radius-2 shadow-lg group-hover:bg-yellow-500 group-hover:text-white">
                  Invited Speakers
                </p>
              </span>
            </button>
          </Link>
        )}

         <a
          href="https://docs.google.com/document/d/e/2PACX-1vSWIe1xRPemQm_kLC5ylBRfRGse50r6VuWnfdVtw7pZWwxh4CdzkeCS_1ms7bXOybbSWcoSDxXq1ipz/pub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="group relative transition-all duration-300 ease-in-out hover:scale-105">
            <span>
              <p className="text-sm font-semibold rounded-full text-black bg-white px-2 py-[2px] border-radius-2 shadow-lg group-hover:bg-blue-500 group-hover:text-white">
              Best Paper Awards
              </p>
            </span>
          </button>
        </a>

        <button
          onClick={() => setShow(true)}
          className="group relative transition-all duration-300 ease-in-out hover:scale-105"
        >
          <span>
            <p className="text-sm font-semibold rounded-full text-black bg-white px-2 py-[2px] border-radius-2 shadow-lg group-hover:bg-violet-500 group-hover:text-white">
              Inaugural Invitation
            </p>
          </span>
        </button>
        


        <a
          href="https://nitj.ac.in/files/1735198331758-Final%20Scientific%20Agenda%20_%20Chemcon%202024-1.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="group relative transition-all duration-300 ease-in-out hover:scale-105">
            <span>
              <p className="text-sm font-semibold rounded-full text-black bg-white px-2 py-[2px] border-radius-2 shadow-lg group-hover:bg-accent-500 group-hover:text-white">
                Technical Events Schedule
              </p>
            </span>
          </button>
        </a>

       
        {/* <span className="absolute right-[120px] md:top-[110px] xl:top-[58px] z-50">
          <CountdownTimer />
        </span> */}
      </div>
      {<Invitation show={show} setShow={setShow} />}
    </>
  );
}

export default SecNavbar;