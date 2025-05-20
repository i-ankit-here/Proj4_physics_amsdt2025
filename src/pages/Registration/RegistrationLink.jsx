import { useEffect } from 'react';
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import SecNavbar from '../../components/SecNavbar';



function RegistrationLink() {
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
                        Registration Link

                    </p>
                    <p className="text-base  text-justify font-sans font-base text-gray-800">

                        Register now by clicking on the link below:

                    </p>
                    <a
                        href="https://forms.gle/FswBCsUuCqnBWUuR7" target="_blank" rel="noopener noreferrer"
                        className="text-base  text-justify font-sans font-base underline text-blue-500"
                    >
                      https://forms.gle/FswBCsUuCqnBWUuR7  
                    </a>

<p>An additional late registration fee of Rs. 1000/- applies to all categories after registration deadline. </p>

                </div>
            </div>
            <Footer />

        </>
    )
}

export default RegistrationLink
