import { useEffect, useState } from 'react';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom';
import getEnvironment from '../getenvironment';
import axios from 'axios';

function CommonNews() {
    const [apiUrl, setApiUrl] = useState(null);
    const { newsid } = useParams();
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch the environment URL
        getEnvironment().then(url => setApiUrl(url));
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (apiUrl) {
            setLoading(true);
            axios.get(`${apiUrl}/conferencemodule/announcements/${newsid}`, {
                withCredentials: true
            })
                .then(res => {
                    setData(res.data);
                    setLoading(false);
                })
                .catch(err => {
                    console.log(err);
                    setLoading(false);
                })
        }
    }, [apiUrl, newsid]);

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
                    {loading ? (
                        <div className="animate-pulse">
                            <div className="h-8 bg-gray-700 rounded w-3/4 mb-6"></div>
                            <div className="h-4 bg-gray-700 rounded w-full mb-4"></div>
                            <div className="h-4 bg-gray-700 rounded w-5/6 mb-4"></div>
                            <div className="h-4 bg-gray-700 rounded w-4/5 mb-4"></div>
                        </div>
                    ) : (
                        <>
                            <h1 className="text-4xl font-bold text-[#00ff4c] mb-4">
                                {data.title}
                            </h1>
                            <div className="w-32 h-1 bg-gradient-to-r from-[#00ff4c] to-transparent mb-8"></div>
                            
                            <div className="flex items-center mb-6 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                </svg>
                                <span>{new Date(data.createdAt).toLocaleDateString('en-US', { 
                                    year: 'numeric', 
                                    month: 'long', 
                                    day: 'numeric' 
                                })}</span>
                            </div>
                            
                            <div className="text-gray-300 prose prose-invert max-w-none prose-headings:text-[#00ff4c] prose-strong:text-white prose-a:text-[#00ff4c]">
                                <div dangerouslySetInnerHTML={{
                                    __html: data.description ? 
                                        data.description.replace(/<p>/g, '<p class="text-gray-300 mb-4">').replace(/<h2>/g, '<h2 class="text-[#00ff4c] text-xl font-bold mt-6 mb-3">').replace(/<h3>/g, '<h3 class="text-[#00ff4c] text-lg font-bold mt-5 mb-2">').replace(/<ul>/g, '<ul class="list-disc pl-5 mb-4 text-gray-300">').replace(/<li>/g, '<li class="mb-2 text-gray-300">') : ''
                                }}/>
                            </div>
                            
                            {data.attachments && data.attachments.length > 0 && (
                                <div className="mt-8 p-4 bg-[#001a00] border border-[#00ff4c]/30 rounded-lg">
                                    <h3 className="text-xl font-bold text-[#00ff4c] mb-3">Attachments</h3>
                                    <ul className="space-y-2">
                                        {data.attachments.map((attachment, index) => (
                                            <li key={index}>
                                                <a 
                                                    href={attachment.url} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="flex items-center text-gray-300 hover:text-[#00ff4c] transition-colors"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                                    </svg>
                                                    {attachment.name || `Attachment ${index + 1}`}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </>
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

export default CommonNews
