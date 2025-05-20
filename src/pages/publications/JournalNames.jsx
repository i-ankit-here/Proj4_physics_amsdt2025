import { useEffect } from 'react';
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import SecNavbar from '../../components/SecNavbar';



function JournalNames() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);




    return (
        <>
            <div className="fixed top-0 w-screen z-40 ">
                <Navbar />
            </div>
            <SecNavbar />
            <div className="bg-white container max-w-7xl mx-auto px-5 sm:px-10  lg:px-8 pt-[58px] lg:pt-[10px] pb-5">
                <div className="w-full mx-auto  md:w-[700px] px-4 lg:w-full min-h-[300px]" >
                    <p className="text-2xl font-sans font-bold mb-5   text-gray-950 underline ">
                        Journals
                    </p>
                    
                    <div className='mt-5 mb-5'>
                    <p className="text-base font-semibold text-justify font-sans font-base text-gray-800">
                    Springer-Biomass Conversion and Biorefinery Journal </p>
                    <a href="https://link.springer.com/journal/13399" target="_blank" rel="noopener noreferrer" className="text-base  text-justify font-sans font-base underline text-blue-500">
                     https://link.springer.com/journal/13399 </a>
                     </div>

                     <div className='mt-5 mb-5'>
                    <p className="text-base font-semibold  text-justify font-sans font-base text-gray-800">
                    Indian Chemical Engineer </p>
                    <a href="https://www.tandfonline.com/journals/tice20" target="_blank" rel="noopener noreferrer" className="text-base  text-justify font-sans font-base underline text-blue-500">
                    https://www.tandfonline.com/journals/tice20</a>
                     </div>

                </div>
            </div>
            <Footer />

        </>
    )
}

export default JournalNames
