import { useEffect } from 'react';
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

function RegistrationLink() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-black min-h-screen relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
                <div className="absolute w-[800px] h-[800px] border border-[#00ff4c]/10 rounded-full -right-1/4 top-1/4 transform -translate-y-1/2"></div>
                <div className="absolute w-[500px] h-[500px] border border-[#00ff4c]/15 rounded-full -left-1/4 bottom-1/4"></div>
                <div className="absolute w-3 h-3 bg-[#00ff4c] rounded-full left-[10%] top-[20%] animate-pulse"></div>
                <div className="absolute w-2 h-2 bg-[#00ff4c] rounded-full right-[15%] bottom-[30%] animate-pulse"></div>
            </div>
            
            <div className="fixed top-0 w-screen z-40">
                <Navbar />
            </div>
            
            <div className="container max-w-7xl mx-auto px-5 sm:px-10 lg:px-8 pt-[80px] lg:pt-[100px] pb-16 relative z-10">
                <div className="bg-[#00120a] border border-[#00ff4c]/30 rounded-xl p-6 md:p-8 shadow-lg shadow-[#00ff4c]/10 backdrop-blur-sm">
                    <h1 className="text-4xl font-bold text-[#00ff4c] mb-4">
                        Registration 
                    </h1>
                    <div className="w-32 h-1 bg-gradient-to-r from-[#00ff4c] to-transparent mb-8"></div>
                    
                    <div className="text-gray-300 prose prose-invert max-w-none">
                                          
                        <div className="flex flex-col items-center justify-center my-10">
                            <div className="relative group">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00ff4c] to-[#00ff4c]/50 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                                <a
                                    href="https://www.nitj.ac.in/events_registration/ic_amsdt_2025/login" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="relative flex items-center justify-center px-8 py-4 bg-black rounded-lg leading-none text-[#00ff4c] font-medium hover:text-white transition-colors duration-300"
                                >
                                    <span className="mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
                                        </svg>
                                    </span>
                                    Register for AMSDT-2025
                                </a>
                            </div>
                            
                           
                        </div>
                        
                        {/* <div className="mt-8 p-4 bg-[#00ff4c]/5 border-l-4 border-[#00ff4c] rounded">
                            <p className="font-medium text-[#00ff4c]">Important Note:</p>
                            <p className="mt-2">An additional late registration fee of Rs. 1000/- applies to all categories after registration deadline.</p>
                        </div> */}
                        
                        {/* <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-5 bg-[#001a00] border border-[#00ff4c]/30 rounded-lg"> */}
                                <h3 className="text-xl font-bold text-[#00ff4c] mb-3">Guidelines for Registration</h3>
                                <ul className="space-y-2 list-disc pl-5">
                                    <ul>
  <li>- Selected abstract will be accepted for presentation. After the acceptance of the abstract, the authors are required to register for the conference by paying the registration fees.</li>
  <li>- Please pay the registration fee only through the payment portal provided on the conference website. No other means of fee payment will be accepted.</li>
  <li>- After the acceptance of the abstract for presentation, at least one of the authors of an accepted abstract must register for the conference in order to present it.</li>
  <li>- If more than one author of an accepted abstract wishes to attend the conference, they need to register separately.</li>
  <li>- Students are requested to upload their valid student ID cards (front and back sides) during the online registration process.</li>
  <li>- The registration fee includes the conference kit, access/admission to technical sessions, and all conference meals. Any gateway charges incurred will be borne by the registrant.</li>
  <li>- The registration fee is non-refundable and non-transferable.</li>
  <li>- Please keep a copy of the transaction receipt.</li>
  <li>- Please note that AMSDT-2025 will not be responsible for any loss, financial or otherwise, caused by improper transactions conducted online. While the organizers have taken all reasonable precautions to ensure a safe online transaction, it is the registrant’s responsibility to secure their user IDs, passwords, Paper ID, transaction ID, etc., when paying the registration fee.</li>
</ul>

                                </ul>
                            </div>
                        </div>
                    {/* </div>
                </div> */}
                
            </div>
            
            <Footer />
        </div>
    )
}

export default RegistrationLink
