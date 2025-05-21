import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar'
// import SecNavbar from '../../components/SecNavbar';
import getEnvironment from '../../getenvironment';
import axios from 'axios';

function RegistrationFAQ(props) {
    const pageid = props.pageid;
    const [apiUrl, setApiUrl] = useState(null);
    const [data, setData] = useState("");
    const location = useLocation(); // Get the current location

    useEffect(() => {
        // Fetch the environment URL
        getEnvironment().then(url => setApiUrl(url));
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (apiUrl) {
            axios.get(`${apiUrl}/conferencemodule/commontemplate/${pageid}`, {
                withCredentials: true
            })
                .then(res => {
                    setData(res.data);
                    console.log(res.data.description);
                })
                .catch(err => console.log(err));
        }
    }, [apiUrl, location, pageid]); // Added pageid to the dependency array

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
                        {data.pageTitle || "Registration FAQ"}
                    </h1>
                    <div className="w-32 h-1 bg-gradient-to-r from-[#00ff4c] to-transparent mb-8"></div>
                    
                    {data ? (
                        <div className="text-gray-300 prose prose-invert max-w-none prose-headings:text-[#00ff4c] prose-strong:text-white prose-a:text-[#00ff4c]">
                            <div 
                                className="text-gray-300" 
                                dangerouslySetInnerHTML={{
                                    __html: data.description ? 
                                        data.description.replace(/<p>/g, '<p class="text-gray-300 mb-4">').replace(/<h2>/g, '<h2 class="text-[#00ff4c] text-xl font-bold mt-6 mb-3">').replace(/<h3>/g, '<h3 class="text-[#00ff4c] text-lg font-bold mt-5 mb-2">').replace(/<ul>/g, '<ul class="list-disc pl-5 mb-4 text-gray-300">').replace(/<li>/g, '<li class="mb-2 text-gray-300">') : ''
                                }}
                            />
                        </div>
                    ) : (
                        <div className="animate-pulse">
                            <div className="h-4 bg-gray-700 rounded w-3/4 mb-4"></div>
                            <div className="h-4 bg-gray-700 rounded w-1/2 mb-4"></div>
                            <div className="h-4 bg-gray-700 rounded w-5/6 mb-4"></div>
                            <div className="h-4 bg-gray-700 rounded w-2/3 mb-4"></div>
                        </div>
                    )}
                    
                    {/* FAQ Quick Links - Will only show if there's content */}
                    {data && data.description && (
                        <div className="mt-10 p-5 bg-[#001a00] border border-[#00ff4c]/30 rounded-lg">
                            <h3 className="text-xl font-bold text-[#00ff4c] mb-4">Have More Questions?</h3>
                            <p className="text-gray-300 mb-4">If you couldn&apos;t find the answer to your question, please feel free to contact us:</p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="mailto:amsdt2025@nitj.ac.in" className="flex items-center justify-center px-4 py-2 bg-[#00ff4c]/10 hover:bg-[#00ff4c]/20 border border-[#00ff4c]/50 rounded-md text-[#00ff4c] transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                    Email Us
                                </a>
                                <a href="/contact" className="flex items-center justify-center px-4 py-2 bg-[#00ff4c]/10 hover:bg-[#00ff4c]/20 border border-[#00ff4c]/50 rounded-md text-[#00ff4c] transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                                    </svg>
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    )}
                </div>
                
                {/* Decorative atom */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 opacity-20 pointer-events-none">
                    <div className="w-full h-full border-2 border-[#00ff4c] rounded-full relative">
                        <div className="absolute w-2 h-2 bg-[#00ff4c] rounded-full top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute w-2 h-2 bg-[#00ff4c] rounded-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute w-2 h-2 bg-[#00ff4c] rounded-full bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2"></div>
                        <div className="absolute w-3 h-3 bg-[#00ff4c] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}

export default RegistrationFAQ;
